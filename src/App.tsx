import * as React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { ImageResource, WebAppManifest } from 'web-app-manifest';

//  Presentational Components
import NotificationPage from './NotificationPage';
import ErrorPage from './ErrorPage';
import { base64icon } from './base64icons';
import Header from './Header';
import Steps from './Steps/Steps';
import AppStyles from './style';

//  Config
const secDelay = 10; //  Delay for 10 Seconds

interface AppProps {}
interface AppState {}

export class AppComponent extends React.Component<AppProps, AppState> {
  public componentDidMount() {
    //  Reprocess the Link on Focus
    //  The PWA remains in the "tray", and when the user taps it again, it should be redirected.
    window.onfocus = () => this.forceUpdate();
  }

  //  TODO:  Pull MOST of this out of Render?
  public render() {
    //  Unpack Request
    const { origin, pathname } = window.location;
    const params = new URLSearchParams(window.location.search);

    //  Unpack Params
    const encodedLink = params.get('link');
    const encodedManifest = params.get('manifest');

    //
    //  Handle Home Page
    //

    if (!encodedLink || !encodedManifest) {
      let letter = `ERA:App Icons`;
      return (
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: AppStyles.color.COLOR_PRIMARY_BLACK, //manifest.theme_color,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: AppStyles.color.COLOR_PWA_list_2,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: AppStyles.color.COLOR_SECONDARY_WHITE,
                fontSize: 15,
                padding: 15
              }}>
              Added to Homescreen
            </Text>
          </View>
        </View>
      );
      //  TODO:  Indicate missing link / manifest
      return (
        <NotificationPage
          title="Welcome to Homeward"
          text="Click Here for Usage Instruction"
          onPress={() => Linking.openURL('https://github.com/CodalReef/Homeward')}
        />
      );
    }

    //  Parse and Decode
    //  TODO:  Validate payloads (Enjoi?)  Currently, if present, we assume valid.
    const link = decodeURIComponent(encodedLink);
    const manifest: WebAppManifest = JSON.parse(decodeURIComponent(encodedManifest));

    //
    //  Handle Link
    //

    //  Get the Timestamp
    const timestamp = params.get('timestamp');

    //  Handle Missing Timestamp
    //  Redirects the user back to the same page with a timestamp.
    if (timestamp == null) {
      let paramString = '?';
      params.forEach((value, key) => (paramString += `${key}=${encodeURIComponent(value)}&`));
      paramString += `timestamp=${new Date().getTime().toString()}`;
      const newUrl = `${origin}${pathname}${paramString}`;
      window.location.replace(newUrl);
      return;
    }

    //  Guard Missing
    if (!manifest) {
      return <ErrorPage text="No Manifest Provided" />;
    }
    if (!link) {
      return <ErrorPage text="No Link Provided" />;
    }

    //  Inject the Manifest
    //  REFERENCE (inspired by):  https://medium.com/@alshakero/how-to-setup-your-web-app-manifest-dynamically-using-javascript-f7fbee899a61
    //  CONSIDER:  Can we use "start_url" to do deep linking without the timing?  I tried, but it wasn't working.
    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);
    document.getElementById('manifest-link')?.setAttribute('href', manifestURL);

    //  Handle Apple Icons (Dynamically set 'apple-touch-icon' to the the "180x180")
    //  REFERENCE:
    const { icons = [] } = manifest;
    const iOSIcon = icons.find((icon: ImageResource) => icon.sizes === '180x180');
    document.getElementById('apple-touch-icon-link')?.setAttribute('href', iOSIcon?.src || '');

    //  Set the Page Background Color
    document.body.style.backgroundColor = manifest.theme_color || 'white';

    //  Determine Browser
    const browserString = navigator.appVersion.toLowerCase();
    //  TODO:  iOS isn't working
    const isSafariIos = browserString.includes('ios') && browserString.includes('safari');
    const isAndroidChrome = browserString.includes('android') && browserString.includes('chrome');

    //  Get the App Letter (or 'U' for Unknown)
    const letter = manifest.name ? manifest.name[0] || 'U' : 'U';

    //  Get the Timestamps
    const storedTimestamp = Number.parseInt(timestamp);
    const currentTimestamp = new Date().getTime();

    //  Convert Second Delay to Milliseconds
    const msDelay = secDelay * 1000;

    //  Determine whether or not we're still waiting for the time to elapse.
    const stillWaiting = currentTimestamp - storedTimestamp <= msDelay;

    //  Handle Waiting Case
    if (stillWaiting) {
      // CONSIDER:  Consider Plugins to support additional devices / browsers.

      return (
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: AppStyles.color.COLOR_PRIMARY_BLACK, //manifest.theme_color,
            alignItems: 'center',
            paddingTop: 85
          }}>
          <Header letter={letter} icon={base64icon} />
          <View style={{ height: 70 }} />
          <Steps />
        </View>
      );
    }

    //  Handle Exceeded Case

    //  Guard Link
    if (link === null) {
      return <Text>No Link was Provided</Text>;
    }

    //  Redirect to the Deep Link
    window.location.replace(link);

    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: AppStyles.color.COLOR_PRIMARY_BLACK, //manifest.theme_color,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: AppStyles.color.COLOR_PWA_list_2,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: AppStyles.color.COLOR_SECONDARY_WHITE,
              fontSize: 15,
              padding: 15
            }}>
            Added to Homescreen
          </Text>
        </View>
      </View>
    );
  }
}

import { View, Text, Image } from 'react-native';
import React from 'react';
import AppStyles, { SCREEN_HEIGHT, SCREEN_WIDTH } from './style';

const Steps = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'white'
      }}>
      {/* Step 1 */}
      <View
        style={{
          alignItems: 'center',
          //   justifyContent: 'center',
          flexDirection: 'row',
          padding: 10,
          borderRadius: 10,
          backgroundColor: AppStyles.color.COLOR_PWA,
          width: SCREEN_WIDTH * 0.8
        }}>
        <Text
          style={{
            fontFamily: AppStyles.fonts.Gilroy_Medium,
            color: 'white',
            fontSize: AppStyles.fontSize.FONT_16
          }}>{`1    Tap`}</Text>
        <Image
          source={require('../assets/images/share.png')}
          resizeMode="contain"
          style={{
            height: 15,
            width: 15,
            paddingHorizontal: 15
          }}
        />
        <Text
          style={{ fontFamily: AppStyles.fonts.Gilroy_Medium, color: 'white', fontSize: AppStyles.fontSize.FONT_16 }}>
          at the bottom of the screen.
        </Text>
      </View>

      {/* Step 2 */}
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: AppStyles.color.COLOR_PWA,
          width: SCREEN_WIDTH * 0.8,
          marginTop: SCREEN_HEIGHT * 0.02
        }}>
        {/* step 2 description */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text
              style={{
                fontFamily: AppStyles.fonts.Gilroy_Medium,
                color: 'white',
                fontSize: AppStyles.fontSize.FONT_16
              }}>{`2    `}</Text>
          </View>
          <View style={{ width: '80%' }}>
            <Text
              style={{
                fontFamily: AppStyles.fonts.Gilroy_Medium,
                color: 'white',
                fontSize: AppStyles.fontSize.FONT_16
              }}>{`Select "Add to Home Screen" from the dropdown menu.`}</Text>
          </View>
        </View>
        {/* list */}
        <View
          style={{
            alignItems: 'center',
            marginTop: SCREEN_HEIGHT * 0.02
          }}>
          {/* 1st */}
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: AppStyles.color.COLOR_PWA_list_1,
              width: '100%',
              paddingVertical: SCREEN_HEIGHT * 0.02
            }}>
            <Text
              style={{
                fontFamily: AppStyles.fonts.Gilroy_SemiBold,
                color: 'white',
                fontSize: AppStyles.fontSize.FONT_14
              }}>
              Add Bookmark
            </Text>
          </View>
          {/* 2nd */}
          {/* 3rd */}
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: AppStyles.color.COLOR_PWA_list_1,
              width: '100%',
              paddingVertical: SCREEN_HEIGHT * 0.02,
              marginTop: SCREEN_HEIGHT * 0.01
            }}>
            <Text
              style={{
                fontFamily: AppStyles.fonts.Gilroy_SemiBold,
                color: 'white',
                fontSize: AppStyles.fontSize.FONT_14
              }}>
              Markup
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Steps;

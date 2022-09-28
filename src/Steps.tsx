import { View, Text, Image } from 'react-native';
import React from 'react';
import AppStyles from './style';

const Steps = () => {
  return (
    <View>
      <View style={{ height: 70 }} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        {/* Step 1 */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            padding: 15,
            borderRadius: 10,
            backgroundColor: AppStyles.color.COLOR_PRIMARY_BLACK
          }}>
          <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', fontSize: 15 }}>{`1    Tap`}</Text>
          <Image
            source={require('../assets/images/share.png')}
            resizeMode="contain"
            style={{
              height: 15,
              width: 15,
              paddingHorizontal: 15
            }}
          />
          <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', fontSize: 15 }}>
            at the bottom of the screen.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Steps;

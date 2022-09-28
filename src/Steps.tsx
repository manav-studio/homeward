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
          backgroundColor: AppStyles.color.COLOR_PRIMARY_BLACK,
          width: SCREEN_WIDTH * 0.8
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

      {/* Step 2 */}
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: AppStyles.color.COLOR_PRIMARY_BLACK,
          width: SCREEN_WIDTH * 0.8,
          marginTop: SCREEN_HEIGHT * 0.02
        }}></View>
    </View>
  );
};

export default Steps;

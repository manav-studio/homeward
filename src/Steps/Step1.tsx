import { View, Text, Image } from 'react-native';
import React from 'react';
import AppStyles, { SCREEN_WIDTH } from '../style';

const Step1 = () => {
  return (
    <View
      style={{
        alignItems: 'center',
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
        source={require('../../assets/images/share.png')}
        resizeMode="contain"
        style={{
          height: 15,
          width: 15,
          paddingHorizontal: 15
        }}
      />
      <Text style={{ fontFamily: AppStyles.fonts.Gilroy_Medium, color: 'white', fontSize: AppStyles.fontSize.FONT_16 }}>
        at the bottom of the screen.
      </Text>
    </View>
  );
};

export default Step1;

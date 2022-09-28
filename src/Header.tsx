import React from 'react';
import { View, Text, Image } from 'react-native';
import { SCREEN_HEIGHT } from './style';

const Header = ({ letter, icon }: any) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Image resizeMode="contain" style={{ height: 80, width: 80 }} source={{ uri: icon }} />
        <Text
          style={{
            marginTop: SCREEN_HEIGHT * 0.02,
            color: 'white',
            fontSize: 15,
            fontWeight: '900',
            fontFamily: 'Gilroy-Medium'
          }}>
          {letter}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: SCREEN_HEIGHT * 0.05
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: '900',
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center'
          }}>
          {`How to install single\nicons.`}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: '900',
            fontFamily: 'Gilroy-Medium',
            textAlign: 'center',
            marginTop: SCREEN_HEIGHT * 0.02
          }}>
          {`Please note that you can install single\nicons only via Safari.`}
        </Text>
      </View>
    </View>
  );
};

export default Header;

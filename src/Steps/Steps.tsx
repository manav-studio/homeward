import { View, Text, Image } from 'react-native';
import React from 'react';
import AppStyles, { SCREEN_HEIGHT, SCREEN_WIDTH } from '../style';
import Step1 from './Step1';
import Step2 from './Step2';

const Steps = () => {
  return (
    <View>
      <Step1 />
      <Step2 />
    </View>
  );
};

export default Steps;

import { Dimensions } from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const AppStyles = {
  color: {
    COLOR_PRIMARY_BLACK: '#1C1D1E',
    COLOR_SECONDARY_WHITE: '#FFFFFF',
    COLOR_BUTTON: '#3D348B',
    COLOR_GREY: '#8D8989',
    COLOR_CHINEASE_BLACK: 'rgba(18, 18, 18, 0.43)',
    COLOR_PWA: '#2E2D2D',
    COLOR_PWA_list_1: '#363636'
  },
  fonts: {
    Gilroy_Medium: 'Gilroy-Medium',
    Gilroy_Bold: 'Gilroy-Bold',
    Gilroy_SemiBold: 'Gilroy-SemiBold'
  },
  fontSize: {
    FONT_8: 8,
    FONT_10: 10,
    FONT_12: 12,
    FONT_14: 14,
    FONT_16: 16,
    FONT_18: 18,
    FONT_20: 20,
    FONT_22: 22,
    FONT_24: 24,
    FONT_26: 26,
    FONT_28: 28,
    FONT_30: 30,
    FONT_32: 32
  }
};
export default AppStyles;

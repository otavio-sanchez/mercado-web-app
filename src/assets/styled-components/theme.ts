import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export interface Tema {
  fontSizeSmall: number;
  fontSizeMedium: number;
  fontSizeLarge: number;
  fontSizeLarger: number;
  fontSizeXLarge: number;
  fontSizeXXLarge: number;

  mobileWidth: number,
  tableWidth: number,
  desktopWidth: number,
  desktopXLWidth: number,
  screenWidth: number,
  screenHeight: number,
}

export const theme: Tema = {
  fontSizeSmall: 13,
  fontSizeMedium: 16,
  fontSizeLarge: 20,
  fontSizeLarger: 24,
  fontSizeXLarge: 28,
  fontSizeXXLarge: 32,

  mobileWidth: 425,
  tableWidth: 768,
  desktopWidth: 1024,
  desktopXLWidth: 1440,
  screenWidth: width < height ? width : height,
  screenHeight: width > height ? width : height,
};

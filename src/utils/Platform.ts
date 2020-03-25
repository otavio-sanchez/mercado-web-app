import { Platform as RNPlatform } from 'react-native';
import { theme } from '../assets/styled-components/theme';

export const Platform = {
  OS: RNPlatform.OS,
  Version: RNPlatform.Version,
  select: ({ native, desktop, ios, android, web, app }: any): any => {
    return RNPlatform.select({
      ios: native || ios || app,
      android: native || android || app,
      web: web || (theme.mobileWidth >= window.innerWidth ? app : desktop)
    });
  }
};

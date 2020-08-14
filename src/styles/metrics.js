
import { Platform } from 'react-native';

export const metrics = {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 20 },
  }),
  tabBarHeight: 50,
};
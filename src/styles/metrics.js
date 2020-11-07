import { Platform } from 'react-native';

const paddingTop = Platform.OS === 'ios' ? 20 : 0;

export const metrics = {
  paddingTop: paddingTop,
};
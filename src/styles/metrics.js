import { Platform } from 'react-native';

const metrics = {
  paddingTopMenu: Platform.OS === 'ios' ? 20 : 0,
  colorBlue: "#5271ff",
  colorYellow: "#ffde1d",
  colorPink: "#ff13a6",
  fontSizeSmall: 15,
  fontSizeMedium: 20,
  fontSizeBig: 26,
  fontSizeTitle: 35,
};

export default metrics;
import { Dimensions, useWindowDimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const window = useWindowDimensions();
export const isDesktopDevice = window.width > 768;
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

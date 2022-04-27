/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Index: {
            screens: {
              Index: 'one',
            },
          },
          ProfileScreen: {
            screens: {
              Index: 'two',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
      LoginScreen: 'login',
      RegisterScreen: 'register',
     
    },
  },
};

export default linking;

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
              Index: 'index',
            },
          },
          ProfileScreen: {
            screens: {
              Index: 'profile',
            },
          },
        
          InfoScreen: {
            screens: {
              Index: 'info',
            },
          },
          MealOfferScreen: {
            screens: {
              Index: 'meal',
            },
          },
          SocialScreen: {
            screens: {
              Index: 'social',
            },
          },
          RequestScreen: {
            screens: {
              Index: 'request',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
      LoginScreen: 'login',
      ReviewScreen: 'review',
      EditProfileScreen:  'edit/profile',
      CookProfileScreen:  'profile/cook',
      ConfirmPaymentScreen:  'meal/confirm',
      RegisterScreen: 'register',
    },
  },
};

export default linking;

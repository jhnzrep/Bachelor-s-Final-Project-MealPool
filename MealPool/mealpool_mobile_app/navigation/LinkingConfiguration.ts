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
          CookProfileScreen: {
            screens: {
              Index: 'profile/cook',
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
          ReviewScreen: {
            screens: {
              Index: 'review',
            },
          },
          EditProfileScreen: {
            screens: {
              Index: 'edit/profile',
            },
          },
          SocialScreen: {
            screens: {
              Index: 'social',
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

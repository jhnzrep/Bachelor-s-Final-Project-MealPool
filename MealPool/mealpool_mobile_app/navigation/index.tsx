/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MealOfferScreen from '../screens/MealOfferScreen';
import ProfileScreen from '../screens/ProfileScreen';
import IndexScreen from '../screens/IndexScreen';
import LoginScreen from '../screens/LoginScreen';
import InfoScreen from '../screens/InfoScreen';
import ReviewScreen from '../screens/ReviewScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SocialScreen from '../screens/SocialScreen';
import { useGlobalContext } from '../GlobalContext';
import CookProfileScreen from '../screens/CookProfileScreen';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/** 
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {backgroundColor: Colors.light_orange_full_opacity.background}
      }}>
       <BottomTab.Screen
        name="Index"
        component={IndexScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="silverware-fork-knife" size={size} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" size={size} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="more-horizontal" size={size} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="MealOfferScreen"
        component={MealOfferScreen}
        options={{
          tabBarIcon: ({ color, size }) =><AntDesign name="pluscircle" size={size} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{
          tabBarIcon: ({ color, size }) =><AntDesign name="pluscircle" size={size} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) =><AntDesign name="pluscircle" size={size} color={color} />,
        }}
      />
        <BottomTab.Screen
        name="CookProfileScreen"
        component={CookProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) =><AntDesign name="pluscircle" size={size} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="SocialScreen"
        component={SocialScreen}
        options={{
          tabBarIcon: ({ color, size }) =><AntDesign name="pluscircle" size={size} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

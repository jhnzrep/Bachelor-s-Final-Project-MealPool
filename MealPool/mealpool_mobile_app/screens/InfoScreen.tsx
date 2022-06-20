import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import CustomInput from '../components/CustomInput';
import Navigation from '../components/Navigation';
import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import MealCategoryBox from '../components/MealCategoryBox';
import { DATA, food_category_mock_data } from '../constants/MockData';
import Async_Storage from '../services/asyncStorage';
import { useGlobalContext } from '../GlobalContext';
import { useNavigation } from '@react-navigation/native';

export default function InfoScreen({  }: RootTabScreenProps<'InfoScreen'>) {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()
  const navigation = useNavigation();

  const logOut = () => {
    Async_Storage.removeData()
    setIsLoggedIn(false);
    navigation.navigate("LoginScreen")
  }
 
  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
      <Navigation/> 

        <ScrollView style={styles.scroll_container}>
            <View style={styles.container}>
                <View style={styles.separator}></View>
                <View style={styles.menu_item}>
                    <Text style={styles.text} >Account</Text>
                </View>
                <View style={styles.separator}></View>

                <View style={styles.menu_item}>
                    <Text style={styles.text} >Cart</Text>
                </View>
                <View style={styles.separator}></View>
               
                  <View style={styles.menu_item}>
                    <Pressable
                  onPress={logOut }
                  >
                      <Text style={styles.text_underline}>Log out</Text>
                </Pressable>

                  </View>

                <View style={styles.separator}></View>

            </View>
        </ScrollView> 
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',  
    justifyContent: 'center',
    color: Colors.text_color.background,
    maxWidth: 1400,
    margin: 'auto'
  },
  menu_item: {
    width: '100%',
    height: 64,
    paddingLeft: 40,
    justifyContent: 'center'
  },
  separator: {
      width: '100%',
      height: 1,
      backgroundColor: Colors.dark_orange.background
  },
  scroll_container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },
  text: {
    fontWeight: '700',
  },
  text_underline: {
    fontWeight: '700',
    color: Colors.dark_orange.background,
    textDecorationLine: 'underline'
  }


});

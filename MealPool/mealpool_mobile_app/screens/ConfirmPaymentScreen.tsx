import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList } from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditScreenInfo from '../components/EditScreenInfo';
import Logo from '../components/Logo';
import SubmitButton from '../components/SubmitButton';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import CustomInput from '../components/CustomInput';
import Navigation from '../components/Navigation';
import SearchInput from '../components/SearchInput';
import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import MealCategoryBox from '../components/MealCategoryBox';
import { DATA, food_category_mock_data } from '../constants/MockData';
import axios from 'axios';
import MealService from '../services/meal_service';
import { useGlobalContext } from '../GlobalContext';
import Async_Storage from '../services/asyncStorage';
import jwt_decode from "jwt-decode";
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';


export default function ConfirmPaymentScreen({ navigation }: RootStackScreenProps<'ConfirmPaymentScreen'>) {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()
  const route = useRoute();
  const [loading, setLoading] = React.useState(false);
  let meals = route.params.item
  meals = [meals].flat()
  const userId = meals[0].cookId
  const mealId = meals[0]._id;
  console.log(userId, mealId)
  const makeRequest = () => {
    MealService.requestMeal({userId, mealId }).then(response=> {
      console.log(response)
    })  
    console.log("AAAAAAAAA")
  }


  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'space-between'  }}>
        <View>
        <Navigation/> 
            <View style={styles.container}>
                {meals.map((item : any) => {
                    return <CustomCard
                        orderBtnHide={true}
                        title={item.name}
                    />
                })} 

                <View style={styles.separator}></View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingLeft: 30, paddingRight: 30, marginTop: 20 }}>
                    <Text>
                        Total:
                    </Text>
                    <Text>
                        2 Points
                    </Text>
                </View>
            </View>
         </View>

        <View  style={{alignItems: 'center'}}>
            <SubmitButton 
                onPress={makeRequest}
                text="Make request"  
            />
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1,            // all the available vertical space will be occupied by it
    alignContent: 'space-between',
    justifyContent: 'space-between', // will create the gutter between body and footer
    color: Colors.text_color.background
  },
  scroll_container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },
  separator: {
    marginTop: 20,
    width: '100%',
    height: 1,
    backgroundColor: Colors.dark_orange.background
  },

});

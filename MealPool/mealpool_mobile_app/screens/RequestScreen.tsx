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
import CookCard from '../components/CookCard';
import UserService from '../services/user_service';
import RequestCard from '../components/RequestCard';

export default function RequestScreen({ navigation }: RootTabScreenProps<'RequestScreen'>) {
 
  const [searchVal, setSearchVal] = React.useState('');
  const [requestedMeals, setRequestedMeals] = React.useState(Array);
  const [cookedMeals, setCookedMeals] = React.useState(Array);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()

  const acceptRequest = () => {
    console.log("ACCEPT")
  }
  const declineRequest = () => {
    console.log("DECLINE")
  }
  React.useEffect(() => {
    MealService.getRequestedMeals(user[0].id).then(response=> {
      setRequestedMeals(response)
    
    })  

    MealService.getCookedMeals(user[0].id).then(response=> {
     setCookedMeals(response)
    })  
}, [])


return (
  <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
    <Navigation/> 

      <ScrollView style={styles.scroll_container}>
      <View style={styles.container}>
          <CustomHeader value="Your requested meals" />

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, justifyContent: 'space-around'}}>
        {requestedMeals.map((item : any, index) => {
              return <RequestCard
                   id={item.cookId}
              />
          })} 
        </View>

        <CustomHeader value="Users requested meals from you" />

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, justifyContent: 'space-around'}}>
          
        {cookedMeals.map((item : any, index : any) => {
          <Text>LOOL{item}</Text>
          if (item.requests.length > 0) {
            return item.requests.map((item2 : any) => {
              console.log("ITEM2", item2.points)
              return <RequestCard
                  points={item2.points}
                  status={item2.status}
                  userId={item2.userid}
                  acceptRequest={acceptRequest}
                  declineRequest={declineRequest}

              />
            })
          
          }
          })} 
        </View>


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
  margin: 'auto',
},
scroll_container: {
  width: '100%',
  paddingRight: 20,
  paddingLeft: 20,
},

});

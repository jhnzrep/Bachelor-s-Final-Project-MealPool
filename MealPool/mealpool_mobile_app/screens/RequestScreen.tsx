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
import GoBackButton from '../components/GoBackButton';

export default function RequestScreen({ navigation }: RootTabScreenProps<'RequestScreen'>) {
 
  const [searchVal, setSearchVal] = React.useState('');
  const [requestedMeals, setRequestedMeals] = React.useState(Array);
  const [cookedMeals, setCookedMeals] = React.useState(Array);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()

  const acceptRequest = (userId, mealId, item) => {
    console.log("ACCEPT", userId, mealId)
    MealService.acceptRequestMeal({userId, mealId}).then(response=> {
      setRequestedMeals(response)
    })  
  }
  const declineRequest = (userId, mealId, item) => {
    MealService.declineRequestMeal({userId, mealId}).then(response=> {
      setRequestedMeals(response)
    }) 
  }
  React.useEffect(() => {
    return () => {
      setCookedMeals([]); // This worked for me
      setRequestedMeals([])
    };
  }, []);


  React.useEffect(() => {
    MealService.getRequestedMeals(user[0].id).then(response=> {
      setRequestedMeals(response)
    })  

    MealService.getCookedMeals(user[0].id).then(response=> {
     setCookedMeals(response)
    })  
}, [])


console.log("REQQE", requestedMeals)


return (
  <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
    <Navigation/> 

      <ScrollView style={styles.scroll_container}>
      <View style={styles.container}>
          <CustomHeader value="Your requested meals" />

        <View style={styles.card_wrapper}>
          {
          requestedMeals.length > 0 ?
          requestedMeals.map((item : any, index) => {
                var requests = item.requests
                return requests.map(item2 => {
                  if (item2.userid == user[0].id ) {
                  console.log("CHECK ME OUT", item2, user[0].id)
                    return <RequestCard
                      points={item2.points}
                      status={item2.status}
                      cookId={item.cookId}
                      type="requested"
                    />
                  }
                })
            })
          : null
          } 
        </View>


        <View style={styles.card_wrapper}>
        <CustomHeader value="Users requested meals from you" />
        {
        cookedMeals.length > 0? 
        cookedMeals.map((item : any, index : any) => {
          <Text>LOOL{item}</Text>
          if (item.requests.length > 0) {
            return item.requests.map((item2 : any) => {
              console.log("ITEM", item._id)
              const points = item2
              console.log("POINTS", points)
              return <RequestCard
                  points={item2.points}
                  status={item2.status}
                  userId={item2.userid}
                  acceptRequest={acceptRequest.bind(this, item2.userid, item._id)}
                  declineRequest={declineRequest.bind(this, item2.userid, item._id )}
                  type="requests"
              />
            })
          
          }
          })
        : null
        } 
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
card_wrapper: {
  flexDirection: 'row', 
  flexWrap: 'wrap', 
  flex: 1, 
  justifyContent: 'space-around',
  marginBottom: 90,
},
scroll_container: {
  width: '100%',
  paddingRight: 20,
  paddingLeft: 20,
},

});

import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList , View, RefreshControl} from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditScreenInfo from '../components/EditScreenInfo';
import Logo from '../components/Logo';
import SubmitButton from '../components/SubmitButton';
import { Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';
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
import { useFocusEffect } from '@react-navigation/native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function IndexScreen({ navigation }: RootTabScreenProps<'Index'>) {
 
  const [searchVal, setSearchVal] = React.useState('');
  const [meals, setMeals] = React.useState(Array);
  const [token, setToken] = React.useState('');
  const [category, setCategory] = React.useState("");
  const [searchTitle, setSearchTitle] = React.useState('Popular offers');
  const [foundItems, setFoundItem] = React.useState(0);
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()
  const [loading, setLoading] = React.useState(false);
  const [key, setKey] = React.useState(0);

  const [internetCheck, setInternetCheck] = React.useState(0);
  React.useEffect(() => {
    //code
    console.log('internet', internetCheck)
  }, [internetCheck]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  const isEmpty = (str) => {
    return (!str || str.length === 0 );
  }

  const userIsNotAuthorized = () => {
    Async_Storage.removeData()
    navigation.navigate('RegisterScreen')
  }

const checkJwtExpiration =  async () => {
    // ASYNC STORAGE WORKS FOR DESKTOP AND NATIVE APPS
    const ldsadaset = isEmpty(token);
    if (!ldsadaset )  {
      var decoded : any =  jwt_decode(token);
      var exp = decoded.exp;
      if (Date.now() >= exp * 1000) {
        userIsNotAuthorized()
      }
      else{
        setIsLoggedIn(true)
      }
    }
    return false;
  }

  const handleKeyDown = (e : any) => {
    if(e.nativeEvent.key == "Enter"){
      MealService.searchMeal({searchVal}).then(response=> {
        setMeals(response);
        setFoundItem(response.length)
        setSearchTitle('Searched offers')
      })  
    }
  }

  const searchByCategory = (category : string) => {
    MealService.getMealsByCategory(category).then(response=> {
      setMeals(response);
      setFoundItem(response.length)
      setSearchTitle(`Searched by category: ${category}`)
    })  
  }


  React.useEffect(() => {
    let isSubscribed = 1;

    const fetchData = async ()  => {
      await Async_Storage.getData()
        .then((response) => { 
          const data =  response; 
          setToken(response);
          setLoading(true)
          if(response == undefined){ 
            navigation.navigate('RegisterScreen')
            return;
          }
          var decoded : any =  jwt_decode(token);
          const d = new Date(decoded.exp * 1000);
          checkJwtExpiration()
          if (response === undefined) {
            userIsNotAuthorized();
          }
      })
    }
    

    MealService.getMeals().then(response=> {
      setMeals(response)
    })  
    if (isSubscribed == 1) {
    fetchData()
    .catch(console.error);
      
    }
    // make sure to catch any error

    isSubscribed++;
    

    console.log("USER DATA", user)
  }, [token])




  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'center' }}>
      <Navigation/> 
     

        <ScrollView 
        style={styles.scroll_container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
        <View style={styles.container}>
        
            <CustomHeader value="Search for food" />
            <CustomInput
                setValue={(text : string) => setSearchVal(text)}
                value={searchVal}
                search={true}
                placeholder="What meal do you want to try today?"
                onKeyPress={handleKeyDown}
            />
            
            <View style={{width: '100%'}}>
              <ScrollView   horizontal>
                {food_category_mock_data.map((item, index) => {
                    return <MealCategoryBox
                        key={index++}
                        title={item.title}
                        image={item.image}
                        onPress={() => searchByCategory(item.title)}
                    />
                })}
              </ScrollView>
            </View>

            <CustomHeader value={searchTitle} />
            {searchTitle == "Searched offers" ? <Text>Found items: {foundItems}</Text>  : null } 
            <View>
          </View>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            {meals.map((item : any) => {
                  return <CustomCard
                      orderNowAction={() => navigation.navigate('ConfirmPaymentScreen', {item: item})}
                      title={item.name}
                  />
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
    margin: 'auto'
  },
  scroll_container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },


});

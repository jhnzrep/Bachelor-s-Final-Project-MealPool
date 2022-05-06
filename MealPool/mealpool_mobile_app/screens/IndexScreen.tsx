import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList } from 'react-native';
import { CheckBox } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import Logo from '../components/Logo';
import SubmitButton from '../components/SubmitButton';
import { Text, View } from '../components/Themed';
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

export default function IndexScreen({ navigation }: RootTabScreenProps<'Index'>) {
  const [searchVal, setSearchVal] = React.useState('');
  const [meals, setMeals] = React.useState(Array);
  const [searchTitle, setSearchTitle] = React.useState('Popular offers');
  const [foundItems, setFoundItem] = React.useState(0);

  const handleKeyDown = (e : any) => {
    if(e.nativeEvent.key == "Enter"){
      MealService.searchMeal({searchVal}).then(response=> {
        setMeals(response);
        setFoundItem(response.length)
        setSearchTitle('Searched offers')
      })  
    }
  }

  React.useEffect(() => {
    MealService.getMeals().then(response=> {
      setMeals(response)
    })  }, [])
  const test : object =  MealService.getMeals()

  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
      <Navigation/> 

        <ScrollView style={styles.scroll_container}>
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
                    />
                })}
              </ScrollView>
            </View>

            <CustomHeader value={searchTitle} />
            {searchTitle == "Searched offers" ? <Text>Found items: {foundItems}</Text>  : null } 
            <View>
          </View>
          
            {meals.map((item : any) => {
                return <CustomCard
                     title={item.name}
                   
                />
            })} 

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
    color: Colors.text_color.background
  },
  scroll_container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },


});

/* description={item.description}
cook={item.cookId} */
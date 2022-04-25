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


export default function IndexScreen() {
  const [searchVal, setSearchVal] = React.useState('');
  const DATA = [
    {
        title: "Tasty breakfast with avocado",
    },
    {
        title: "Tasty breakfast with avocado2",
    },
    {
        title: "Tasty breakfast with avocado3",
    }
    ];

    const food_category_mock_data = [
      {
          title: "Indian",
          image: "../assets/images/meal_category_image.svg"
      },
      {
          title: "Vegetarian",
          image: "../assets/images/meal_category_image.svg"
      },
      {
          title: "Fast food",
          image: "../assets/images/meal_category_image.svg"
      },
      {
        title: "Italian",
        image: "../assets/images/meal_category_image.svg"
      },
      {
        title: "Sushi",
        image: "../assets/images/meal_category_image.svg"
      },
      {
        title: "Sushi",
        image: "../assets/images/meal_category_image.svg"
      },
      
      ];
 
  return (
    <View  style={{flex: 1}}>
        <Navigation/>

        <ScrollView style={styles.scroll_container}>
        <View style={styles.container}>
          
            <CustomHeader value="Search for food" />
            <CustomInput
                setValue={(text : string) => setSearchVal(text)}
                value={searchVal}
                placeholder="What meal do you want to try today?"
            />

            <ScrollView  style={styles.meal_category_box_wrapper} horizontal>
              {food_category_mock_data.map((item) => {
                  return <MealCategoryBox
                      title={item.title}
                      image={item.image}
                  />
              })}
            </ScrollView>

            <CustomHeader value="Popular offers" />
            
            {DATA.map((item) => {
                return <CustomCard
                     title={item.title}
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
    paddingRight: '20px',
    paddingLeft: '20px',
    justifyContent: 'center',
    color: Colors.text_color.background
  },
  scroll_container: {
    width: '100%',
  },
  meal_category_box_wrapper: {
    marginBottom: '20px',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    
  }

});

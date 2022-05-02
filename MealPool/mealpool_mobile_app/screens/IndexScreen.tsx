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

export default function IndexScreen({ navigation }: RootTabScreenProps<'Index'>) {
  const [searchVal, setSearchVal] = React.useState('');
  const [users, setUsers] = React.useState('');

  const getUsers = () => {
    axios
    .get('http://localhost:5109/api/User')
    .then(function (response) {
      console.log(response);
    })
  }

  React.useEffect(() => {
    getUsers()
  })
  
 
 
  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
      <Navigation/> 

        <ScrollView style={styles.scroll_container}>
        <View style={styles.container}>
          
            <CustomHeader value="Search for food" />
            <CustomInput
                setValue={(text : string) => setSearchVal(text)}
                value={searchVal}
                placeholder="What meal do you want to try today?"
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
    justifyContent: 'center',
    color: Colors.text_color.background
  },
  scroll_container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },


});

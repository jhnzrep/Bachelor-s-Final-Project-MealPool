import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import CustomInput from '../components/CustomInput';
import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import MealCategoryBox from '../components/MealCategoryBox';
import MealService from '../services/meal_service';
import { useGlobalContext } from '../GlobalContext';
import Async_Storage from '../services/asyncStorage';
import jwt_decode from "jwt-decode";
import Navigation from '../components/Navigation';
import { cooks_list } from '../constants/MockData';
import CookCard from '../components/CookCard';
import UserService from '../services/user_service';


export default function SocialScreen({ navigation }: RootTabScreenProps<'SocialScreen'>) {
  const [searchVal, setSearchVal] = React.useState('');
  const [users, setUsers] = React.useState(Array);

  React.useEffect(() => {
   
    UserService.getUsers().then(response=> {
        setUsers(response)
    })  
}, [])

  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
      <Navigation/> 

        <ScrollView style={styles.scroll_container}>
        <View style={styles.container}>
            <CustomHeader value="Search for cook" />
            <CustomInput
                setValue={(text : string) => setSearchVal(text)}
                value={searchVal}
                search={true}
                placeholder="What meal do you want to try today?"
            />
            
            <CustomHeader value="Cooks on fire!"/>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, justifyContent: 'space-around'}}>
          {users.map((item : any) => {
                return <CookCard
                     firstName={item.firstName}
                     lastName={item.lastName}
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
    color: Colors.text_color.background
  },
  scroll_container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },


});

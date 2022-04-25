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

            <CustomHeader value="Popular offers" />
            
            {DATA.map((item) => {
                return <CustomCard
                    CustomCard title={item.title}
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
    
  }

});

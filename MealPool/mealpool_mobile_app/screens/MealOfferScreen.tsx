import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList } from 'react-native';
import { CheckBox } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import Logo from '../components/Logo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import SearchInput from '../components/SearchInput';
import CustomHeader from '../components/CustomHeader';

import { DATA, food_category_mock_data } from '../constants/MockData';
import CustomInput from '../components/CustomInput';
import Navigation from '../components/Navigation';
import SubmitButton from '../components/SubmitButton';

export default function IndexScreen({ navigation }: RootTabScreenProps<'MealOfferScreen'>) {
    const [name, setName] = React.useState({ value: '', error: ''});
    const [dob, setDob] = React.useState({ value: '', error: ''});
    const [spots, setSpots] = React.useState({ value: '', error: ''});
    const [about, setAbout] = React.useState({ value: '', error: ''});
    const [address, setAddress] = React.useState({ value: '', error: ''});
    const [city, setCity] = React.useState({ value: '', error: ''});
    const [zcode, setZcode] = React.useState({ value: '', error: ''});
    const [calories, setCalories] = React.useState({ value: '', error: ''});
    const [ingredients, setIngredients] = React.useState({ value: '', error: ''});
    const [allergens, setAllergens] = React.useState({ value: '', error: ''});
 
  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
        <Navigation/>

        <ScrollView style={styles.scroll_container}>
            <View style={styles.container}>
            <CustomHeader value="Add meal" />

            <CustomInput 
            setValue={(text : string) => setName({ value: text, error: ''})}
            error={!!name.error}
            required={true}
            errorText="You have to fill name"
            placeholder="Name" 
            value={name.value} />

            <CustomInput
            setValue={(text : string) => setDob({ value: text, error: ''})}
            placeholder="Date" 
            required={true}
            error={!!dob.error}
            errorText="You have fill date"
            value={dob.value}/>

             <CustomInput
            setValue={(text : string) => setSpots({ value: text, error: ''})}
            placeholder="Number of spots" 
            required={true}
            error={!!spots.error}
            errorText="You have to fill number of spots"
            value={spots.value}/>

            <CustomInput
            setValue={(text : string) => setAddress({ value: text, error: ''})}
            placeholder="Address" 
            required={true}
            error={!!address.error}
            errorText="You have to city"
            value={address.value}/>

            <CustomInput
            setValue={(text : string) => setCity({ value: text, error: ''})}
            placeholder="City" 
            required={true}
            error={!!city.error}
            errorText="You have to fill city"
            value={city.value}/>

            <CustomInput
            setValue={(text : string) => setAbout({ value: text, error: ''})}
            placeholder="About"
            type="textArea"
            value={about.value}/>

            <CustomInput
            setValue={(text : string) => setZcode({ value: text, error: ''})}
            placeholder="Zip code" 
            required={true}
            error={!!zcode.error}
            errorText="You have to fill zip code"
            value={zcode.value}/>

            <CustomInput
            setValue={(text : string) => setCalories({ value: text, error: ''})}
            placeholder="Calories" 
            required={true}
            error={!!calories.error}
            errorText="You have to fill calories"
            value={calories.value}/>

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

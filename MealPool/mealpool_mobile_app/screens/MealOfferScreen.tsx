import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList } from 'react-native';
import { CheckBox } from 'react-native-elements'
const moment = require('moment');
import EditScreenInfo from '../components/EditScreenInfo';
import Logo from '../components/Logo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import Modal from "react-native-modal";
import SearchInput from '../components/SearchInput';
import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';
import Navigation from '../components/Navigation';
import SubmitButton from '../components/SubmitButton';
import MealService from '../services/meal_service';
import InfoModal from '../components/InfoModal';
import { useGlobalContext } from '../GlobalContext';

  export default function IndexScreen({ navigation }: RootTabScreenProps<'MealOfferScreen'>) {

    const [name, setName] = React.useState({ value: '', error: ''});
    const [date, setDate] = React.useState({ value: '', error: ''});
    const [spots, setSpots] = React.useState({ value: 0, error: ''});
    const [description, setDescription] = React.useState({ value: '', error: ''});
    const [street, setStreet] = React.useState({ value: '', error: ''});
    const [city, setCity] = React.useState({ value: '', error: ''});
    const [country, setCountry] = React.useState({ value: '', error: ''});
    const [category, setCategory] = React.useState({ value: '', error: ''});
    const [zcode, setZcode] = React.useState({ value: '', error: ''});
    const [price, setPrice] = React.useState({ value: 0, error: ''});
    const [maxPeople, setMaxPeople] = React.useState({ value: 0, error: ''});
    const [date2, setDate2] = React.useState("2016-05-15")
    const [ingredients, setIngredients] = React.useState({ value: '', error: ''});
    const [allergens, setAllergens] = React.useState({ value: '', error: ''});
    const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()


    const currDate = new Date();

    const cookId = user[0].id;
    const nameVal = name.value;
    const spotsVal = spots.value;
    const dateItemVal = new Date();
    const categoryVal = category.value;
    const priceVal = price.value;
    const descriptionVal =  description.value;
    const streetVal = street.value;
    const cityVal = city.value;
    const countryVal = country.value;
    const postalCodeVal = zcode.value; 

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };


  const checkTextInput = (e : any) => {
    e.preventDefault();
    MealService.addMeal({cookId, nameVal, spotsVal, dateItemVal, categoryVal, descriptionVal, streetVal, cityVal, countryVal, postalCodeVal, priceVal});
    setModalVisible(true);
  }


  return (
    <View  style={{flex: 1, width: '100%', justifyContent: 'center'  }}>
        <InfoModal
          onPress={toggleModal}
          content_value="Your meal was successfully added"
          button_value="Hide modal"
          isVisible={isModalVisible}
        />
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
            setValue={(text : string) => setDate({ value: text, error: ''})}
            placeholder="Date" 
            required={true}
            error={!!date.error}
            errorText="You have fill date"
            value={date.value}/>

             <CustomInput
            setValue={(text : number) => setSpots({ value: text, error: ''})}
            placeholder="Number of spots" 
            required={true}
            error={!!spots.error}
            errorText="You have to fill number of spots"
            value={spots.value}/>

            <CustomInput
            setValue={(text : string) => setCategory({ value: text, error: ''})}
            placeholder="Category" 
            required={true}
            error={!!category.error}
            errorText="You have to fill categories"
            value={category.value}/>

            <CustomInput
            setValue={(text : string) => setStreet({ value: text, error: ''})}
            placeholder="Street" 
            required={true}
            error={!!street.error}
            errorText="You have to street"
            value={street.value}/>

            <CustomInput
            setValue={(text : string) => setCity({ value: text, error: ''})}
            placeholder="City" 
            required={true}
            error={!!city.error}
            errorText="You have to fill city"
            value={city.value}/>

            <CustomInput
            setValue={(text : string) => setCountry({ value: text, error: ''})}
            placeholder="Country" 
            required={true}
            error={!!country.error}
            errorText="You have to fill country"
            value={country.value}/>


            <CustomInput
            setValue={(text : string) => setDescription({ value: text, error: ''})}
            placeholder="Description"
            type="textArea"
            value={description.value}/>

            <CustomInput
            setValue={(text : string) => setZcode({ value: text, error: ''})}
            placeholder="Zip code" 
            required={true}
            error={!!zcode.error}
            errorText="You have to fill zip code"
            value={zcode.value}/>

            <CustomInput
            setValue={(text : number) => setPrice({ value: text, error: ''})}
            placeholder="Points for food" 
            required={true}
            error={!!price.error}
            errorText="You have to fill points"
            value={price.value}/>

            <SubmitButton
              text="Create meal" 
              showSeparator={true}
              onPress={checkTextInput} 
              separator_text="Create meal"
            />
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

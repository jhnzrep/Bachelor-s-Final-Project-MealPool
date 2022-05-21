import React from "react";
import Colors from '../constants/Colors';

import { StyleSheet, View, Image, Text, ImageBackground, Pressable } from "react-native";
import CustomHeader from "./CustomHeader";
import { useNavigation } from "@react-navigation/native";
import UserService from "../services/user_service";

export default function CookCard(props: any){
  const [ cook, setCook ] = React.useState(Array);

  const profileScreen =  async () => {
    UserService.getUserById(props.id)
    .then(response=> {
      setCook([{
        id: response.id,
        fnameVal: response.firstName,
        lnameVal: response.lastName,
        emailVal: response.email,
        passwordVal: "",
        dobVal: new Date(),
        streetVal: "",
        cityVal: "",
        countryVal: "",
        postalCodeVal: "",
        phoneVal: "",
        reviewObj: []
      }])
     
    })
  }
  

  const navigation = useNavigation();

   if ( Object.keys(cook).length != 0 ) {
        console.log("it works :)", typeof(cook))

       /*  navigation.navigate('Root'), {
          screen: 'ProfileScreen'        }; */
        navigation.navigate('CookProfileScreen', {params: {cook: cook}})

    }
 
  const id = props.id
  return (
    <View>
      <Pressable
        onPress={profileScreen}>
        <View style={{position: 'relative', marginTop: 20 }}>
            <Image source={require('../assets/images/profile_picture.png')}  style={styles.profile_picture} />
        </View>
        <View style={styles.content_section}>
            <Text style={{fontStyle: 'italic', textAlign: 'center'}}>{props.firstName} {props.lastName}</Text>
        </View>
    </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
      profile_picture: {
        borderRadius: 100,
        height: 100,
        width: 100,
        zIndex: 99,
      },
      content_section: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10
      }
})

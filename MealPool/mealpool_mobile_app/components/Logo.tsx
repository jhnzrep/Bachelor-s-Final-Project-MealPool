import React from "react";
import Colors from '../constants/Colors';

import { StyleSheet, View, Image, Text } from "react-native";


export default function Logo(props: any){
  return (

    <View>
        <Image source={require('../assets/images/company_logo.svg')}  style={[  props.type == "main" ? styles.company_logo_main : styles.company_logo_nav]}/>
        {props.show_title ?
        <Text style={styles.main_title}>MEALPOOL</Text>
        : null }
        
    </View>
  );
}

const styles = StyleSheet.create({
    company_logo_main: {
        width: '282px',
        height: '236px'
    },
    company_logo_nav: {
        width: '113px',
        height: '96px'
    },
    main_title: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        color: Colors.dark_orange.background ,
    },
})

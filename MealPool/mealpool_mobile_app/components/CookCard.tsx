import React from "react";
import Colors from '../constants/Colors';

import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import CustomHeader from "./CustomHeader";

export default function CookCard(props: any){
  return (

    <View>
        <View style={{position: 'relative', marginTop: 20 }}>
            <Image source={require('../assets/images/profile_picture.png')}  style={styles.profile_picture} />
        </View>
        <View style={styles.content_section}>
            <Text style={{fontStyle: 'italic', textAlign: 'center'}}>{props.firstName} {props.lastName}</Text>
        </View>
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

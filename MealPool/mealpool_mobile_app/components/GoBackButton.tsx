import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert } from "react-native";
import Colors from '../constants/Colors'

export default function GoBackButton(props: any){

  return (

    <View style={styles.buttonWrapper}>
      <Pressable
        onPress={props.onPress}
        style={styles.button}
        >
        <Image source={require('../assets/images/go_back.png')}  style={styles.button_image} />
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
    buttonWrapper: {
      display: 'flex',
      position: 'absolute',
      top: 10,
      left: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      color: 'white',
    },
    button:{
        width: '100%',
        height: '100%',
    },
    button_image:{
        height: 20,
        width: 20
    }
})

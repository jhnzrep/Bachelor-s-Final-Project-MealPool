import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert, TextInput } from "react-native";
import Colors from "../constants/Colors";

export default function MealCategoryBox(props: any){
  const propsimage = props.image
  const image : string =  propsimage
  return (
    <View style={{justifyContent: 'center'}}>
      <View style={styles.box_wrapper}>
        <Image source={require(`../assets/images/meal_category_image.svg`)}  style={styles.box_image} />
        <View style={styles.overlay}>
             <Text>{props.title}</Text> 
        </View> 
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  box_wrapper: {
    borderRadius: 25,
    alignItems: 'center',
    width: 75,
    height: 75,
    overflow: 'hidden'
  },

  box_image: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: Colors.light_orange_full_opacity.background

  },

})

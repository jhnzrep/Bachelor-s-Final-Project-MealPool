import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert } from "react-native";
import Colors from '../constants/Colors'
export default function SubmitButton(props: any){

  return (

    <View style={styles.buttonWrapper}>
      <Pressable
        testID="submiButton"
        onPress={props.onPress}
        style={[!props.small_button ? styles.button : styles.small_button]}
        accessibilityLabel="Learn more about this purple button">
        <Text style={[!props.small_button ? styles.button_text : styles.small_button] }>{props.text}</Text>
      </Pressable>
      <View testID="separator" style={[ props.showSeparator ? styles.alternative_login_section : {display: 'none'}]}>
          <View style={styles.separator} />
          <Text style={styles.title}>OR</Text>
          <View style={styles.separator}  />
        </View>
        <Text style={{ color: Colors.dark_orange.background }} onPress={props.navigation}>
          {props.separator_text}
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      color: 'white',
      maxWidth: 300,
    },
    button: {
      backgroundColor: '#EA9B58',
      borderRadius: 25,
      width: '100%',
      height: 45,
      fontSize: 16,
      fontWeight: '600',
      color: '#FFF3DE',
      marginTop:10,
      marginBottom: 10,
      shadowColor: 'rgba(253, 180, 65, 0.3)',
      shadowOffset: { width: 5, height: 12 },
      shadowOpacity: 0.3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    small_button: {
      backgroundColor: '#EA9B58',
      borderRadius: 25,
      width: 97,
      height: 30,
      fontSize: 12,
      fontWeight: '600',
      color: '#FFF3DE',
      shadowColor: 'rgba(253, 180, 65, 0.3)',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button_text: {
      fontWeight: '600',
      fontSize: 16,
      color: '#FFF3DE'
    },
    alternative_login_section: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center'
    },
    title: {
      fontWeight: "600",
      fontSize: 24,
      textAlign: 'center'
    },
    separator: {
      height: 1,
      width: '40%',
      backgroundColor: Colors.dark_orange.background
    },
})

import React from "react";
import Colors from '../constants/Colors';
import { StyleSheet, View, Text } from "react-native";


export default function CustomHeader(props: any){
  return (

    <View>
      <Text style={styles.header}>
          {props.value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        fontWeight: '600',
        fontSize: 24,
        color: Colors.text_color.background,
        textAlign: 'center'
    },
})

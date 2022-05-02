import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert, TextInput } from "react-native";
import Colors from '../constants/Colors'

export default function SearchInput(props: any){
  
  return (
    <View style={styles.seach_wrapper}>
        <TextInput
            style={styles.search_input}
            onChangeText={props.setValue}
            value={props.value}
            placeholder="useless placeholder"
      />
    </View>

  );
}

const styles = StyleSheet.create({
    seach_wrapper: {

   },
   search_input: {
    position: 'relative',
    backgroundColor: Colors.light_orange.background,
    shadowColor: 'rgba(253, 180, 65, 0.3)',
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 2,  
    elevation: 12,
    borderRadius: 25,
    width: '100%',
    height: 45,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: 'rgba(67, 45, 27, 0.4)',
    paddingHorizontal: 22,
   }
})

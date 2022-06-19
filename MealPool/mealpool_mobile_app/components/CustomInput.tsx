import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert, TextInput } from "react-native";
import Colors from "../constants/Colors";

export default function CustomInput(props: any){
    const customWidth : string = props.width
    const [error, setErrorMessage] = React.useState(false)
    const customType : string = props.type
    const checkOnPressOut = () => {
        if (props.value == 0 && props.required) {
            setErrorMessage(true)
            return error;
        }
        return error;
    }
  return (

    <View style={{width: '100%'}}>
        <TextInput
        placeholderTextColor={'rgba(67, 45, 27, 0.4)'} 
        onChangeText={props.setValue}
        onBlur={checkOnPressOut}
        onFocus={() => setErrorMessage(false)}
        style={[ error ? styles.input_error : null , styles.text_input, customWidth == "" ? {width: '100%'} : {width: customWidth}, customType == "textArea" ?  styles.textArea : null ]} 
        blurOnSubmit={true}
        placeholder={props.placeholder}
        onKeyPress={props.onKeyPress}
        secureTextEntry={props.secureTextEntry}
        value={props.value} 
        // For TEXT AREA
        multiline={customType == "textArea" ? true : false }
        numberOfLines={customType == "textArea" ? 4 : 1}
        />
        <Text style={styles.error_text} >
        { error ?  props.errorText : null }
        </Text>
    </View>

  );
}

const styles = StyleSheet.create({
    text_input: {
        position: 'relative',
        backgroundColor: Colors.light_orange.background,
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 3, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 2,  
        elevation: 12,
        borderRadius: 25,
       /*  width: customWidth  , */
        height: 45,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
        color: 'rgba(67, 45, 27, 0.4)',
        paddingHorizontal: 22,
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start",
        paddingTop: 10,
      },
    error_text: {
        height: 19,
        color: Colors.error_text.background
    },
    input_error: {
        borderWidth: 2, 
        borderColor: 'red' 
    }
})

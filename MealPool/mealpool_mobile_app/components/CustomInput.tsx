import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert, TextInput } from "react-native";
import Colors from "../constants/Colors";

export default function CustomInput(props: any){
    const customWidth = props.width
    const [error, setErrorMessage] = React.useState(false)
    const customType :string = props.type

    

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
        style={[error ? styles.input_error : null , styles.text_input, customWidth == "" ? {width: '100%'} : {width: customWidth}, customType == "textfield" ?  {height: '100px' }: { height:'45px'}]} 
        blurOnSubmit={true}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        value={props.value} />
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
/*         height: props.type ==  '45px',
 */        fontSize: 14,
        fontWeight: '600',
        marginTop: '10px',
        color: 'rgba(67, 45, 27, 0.4)',
        paddingHorizontal: 22,
      },
    error_text: {
        height: '19px',
        color: Colors.error_text.background
    },
    input_error: {
        borderWidth: 2, 
        borderColor: 'red' 
    }
})

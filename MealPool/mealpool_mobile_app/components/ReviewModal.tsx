import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert, TextInput } from "react-native";
import Colors from "../constants/Colors";
import { BlurView } from 'expo-blur';
import SubmitButton from "./SubmitButton";
import StarRating from "react-native-star-rating-widget";

export default function ReviewModal(props: any){
    const [error, setErrorMessage] = React.useState(false)
    const [stars, setStars] = React.useState(3)

  return (
    <View style={styles.modal_background}>
        <View style={styles.modal_card}>
            <View style={styles.modal_card_inner}>
                <Pressable
                    onPress={props.modalVisible}
                >
                <Text style={{color: Colors.error_text.background, textAlign: 'right'}}>Close {props.modalVisible}</Text>
                </Pressable>
                <TextInput
                    style={styles.text_input}
                    numberOfLines={4}
                    value={props.value}
                    onChangeText={props.setValue}
                    multiline={true}
                    placeholder="Write here"
                />
                <View style={{marginTop: 10}}>
                    <StarRating

                    starStyle={{width: '12%'}}
                    rating={stars}
                    onChange={setStars}
                    />
                </View>
                <View style={{marginTop: 20, marginBottom: 20}}>
                <SubmitButton
                    onPress={props.onPress} 
                    text="Send"
                    small_button={true}
                />
                </View>
               
            </View>
           
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    modal_background: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_card_inner: {
        marginTop: 24,
        marginLeft: 24,
        marginRight: 24
    },
    text_input: {
        paddingTop: 10,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 25,
        height: 214,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
        color: 'rgba(67, 45, 27, 0.4)',
        paddingHorizontal: 22,
    },
    modal_card: {
        width: '90%',
        height: 'auto',
        borderRadius: 25,
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: Colors.light_orange_full_opacity.background,
        borderColor: Colors.dark_orange.background,
    },
    blurContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },

})

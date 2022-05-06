import React from "react";
import Colors from '../constants/Colors';
import Modal from "react-native-modal";
import { StyleSheet, View, Image, Text, FlatList, Button } from "react-native";
import Logo from "./Logo";

export default function InfoModal(props: any){
  return (
    <Modal 
    animationInTiming={700}
    isVisible={props.isVisible}
    style={styles.modal}
    backdropColor="black">
        <View style={styles.modal_inner}>
            <Text style={styles.content_value}>{props.content_value}</Text>
            <Button title={props.button_value} onPress={props.onPress} />
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_inner: {
        height: 100,
        width: '100%',
        backgroundColor: Colors.dark_orange.background,
        justifyContent: 'space-between',
    },
    profile_picture: {
        borderRadius: 100,
        height: 38,
        width: 38,
    },
    content_value: {
        marginTop: 20,
        textAlign: 'center'
    }
})

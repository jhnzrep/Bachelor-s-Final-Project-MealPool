import React from "react";
import Colors from '../constants/Colors';

import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import Logo from "./Logo";


export default function Navigation(props: any){
  return (

    <View style={styles.navigation_wrapper}>
        <View></View>
        <View>
            <Logo type="nav"  />
        </View>
        <View>
            <Image source={require('../assets/images/profile_picture.svg')}  style={styles.profile_picture} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    navigation_wrapper: {
        width: '100%',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20
    },
    profile_picture: {
        borderRadius: 100,
        height: '38px',
        width: '38px',
        

    }
})
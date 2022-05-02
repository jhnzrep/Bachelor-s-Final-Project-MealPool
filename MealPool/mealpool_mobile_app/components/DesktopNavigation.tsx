import React from "react";
import Colors from '../constants/Colors';

import { StyleSheet, View, Image, Text, FlatList, Linking } from "react-native";
import Logo from "./Logo";


export default function DesktopNavigation(props: any){
  return (

    <View style={styles.navigation_wrapper}>
        <View>
            <Text 
            style={styles.navigation_link}
            onPress={() => Linking.openURL('register')}
            >Meals</Text>
        </View>
        <View>
            <Text 
            style={styles.navigation_link}
            onPress={() => Linking.openURL('register')}
            >Cooks</Text>
        </View>
        <View>

        </View>
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', marginTop: 60}}> 
            <Logo type="nav" show_title={true}  />
        </View>
        <View>
            <Text 
            style={styles.navigation_link}
            onPress={() => Linking.openURL('register')}
            >Share a meal</Text>
        </View><View>
            <Text 
            style={styles.navigation_link}
            onPress={() => Linking.openURL('register')}
            >Sign up</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    navigation_wrapper: {
        width: '100%',
        height: 80,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 100
    },
    navigation_link: {
        fontSize: 20,
        textAlign: 'center'
    }
})

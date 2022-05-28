import React, { useState } from "react";
import Colors from '../constants/Colors';
import Modal from "react-native-modal";
import { StyleSheet, View, Image, Text, FlatList, Button, Pressable } from "react-native";
import Logo from "./Logo";
import UserService from "../services/user_service";

export default function RequestCard(props: any){
  const [fullname, setFullname] = useState('');
  let points = props.points
  let userId = "";
  if (props.type == "requested") {
    userId = props.cookId
  }
  else{
    userId = props.userId
  }

  React.useEffect(() => {
      UserService.getUserById(userId)
      .then(response=> {
        setFullname(response.firstName + " " + response.lastName)
      })
  }, [])



  return (

    <View style={styles.card}>
      {
        props.type == "requests" ? 
        <View >
          <View style={{justifyContent: 'center', alignContent: 'center'}}>
            <Text>User: {fullname}</Text>
            <Text>Points: {props.points}</Text>
            <Text>Status: {props.status}</Text>
          </View>
          
          <View style={styles.request_image_wrapper}>
            <Text style={{fontSize: 14, fontWeight: '700'}}>Do you want to accept request?</Text>
            <View style={styles.request_image_inner_wrapper}>
              <Pressable onPress={ props.acceptRequest}>
                  <Image 
                  source={require('../assets/images/accept.png')}  
                  style={styles.request_image} 
                  />
              </Pressable>
              <Pressable onPress={props.declineRequest}>
                  <Image source={require('../assets/images/decline.png')}  style={styles.request_image} />
              </Pressable>
            </View>
             
          </View> 
        </View>
        :
        <View>
          <Text>Cook: {fullname}</Text>
          <Text>Points: {props.points}</Text>
          <Text>Status: {props.status}</Text>
        </View>
        }

        
    </View>


  );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        backgroundColor: Colors.light_orange_full_opacity.background,
        width: '100%',
        height: 160,
        maxHeight: 190,
        borderRadius: 25,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        flexWrap: 'wrap'
      },
      request_image_wrapper: {
        backgroundColor: Colors.light_orange_full_opacity.background,
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-evenly'
      },
      request_image_inner_wrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-evenly'
      },
      request_image: {
          height: 20,
          width: 20,
          backgroundColor: Colors.light_orange_full_opacity.background,
      }
})

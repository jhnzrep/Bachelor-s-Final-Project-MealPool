import * as React from 'react';
import { StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import {  View, Text } from '../components/Themed';

import { RootTabScreenProps } from '../types';
import { useGlobalContext } from '../GlobalContext';
import Colors from '../constants/Colors';


export default function RequestScreen({ navigation }: RootTabScreenProps<'RequestScreen'>) {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()

  return (
    <View  style={styles.container}>
        <ScrollView style={styles.scroll_container}>
            <View style={styles.card}>
                <Text>User Name</Text>
                <Text style={{fontSize: 14, fontWeight: '700', marginTop: 20}}>Do you want to accept request?</Text>
                <View style={styles.request_image_wrapper}>
                    <Pressable>
                        <Image source={require('../assets/images/accept.png')}  style={styles.request_image} />
                    </Pressable>
                    <Pressable>
                        <Image source={require('../assets/images/decline.png')}  style={styles.request_image} />
                    </Pressable>
                </View>
            </View>
          
        </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    
  },
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
  scroll_container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    maxWidth: 1400,
    margin: 'auto',
  },
  request_image_wrapper: {
    backgroundColor: Colors.light_orange_full_opacity.background,
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-evenly'
  },
  request_image: {
      height: 50,
      width: 50,
      backgroundColor: Colors.light_orange_full_opacity.background,
  }
});

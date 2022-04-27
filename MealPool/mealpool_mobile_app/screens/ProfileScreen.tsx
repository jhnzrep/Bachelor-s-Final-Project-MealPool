import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader';

import EditScreenInfo from '../components/EditScreenInfo';
import Logo from '../components/Logo';
import MealCategoryBox from '../components/MealCategoryBox';
import SubmitButton from '../components/SubmitButton';

import { Text, View } from '../components/Themed';
import { food_category_mock_data } from '../constants/MockData';
import { RootTabScreenProps } from '../types';


export default function IndexScreen({ navigation }: RootTabScreenProps<'ProfileScreen'>) {
  const [searchVal, setSearchVal] = React.useState('');
  return (
    <View  style={styles.container}>
        <ScrollView style={styles.scroll_container}>
            <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop: 50, position: 'relative' }}>
                    <Image source={require('../assets/images/profile_picture.svg')}  style={styles.profile_picture} />
                <ImageBackground style={styles.image_wrapper} source={require('../assets/images/profile_picture_background.svg')}>
                </ImageBackground>
            </View>
        
            <View style={styles.content_section}>
                <CustomHeader value="Matus Kalanin"/>
                <Text style={{fontStyle: 'italic'}}>My profile - Chef</Text>
            </View>
            <View style={styles.content_follower_section}>
                <Text style={styles.bolded_text}>256 Followers</Text>
                <Text style={styles.bolded_text}>15 Following</Text>
            </View>
            <View style={styles.content_user_info_section}>
                <Text style={styles.bolded_text}>Active since:</Text>
                <Text >10.11:2019</Text>
            </View>
            <View style={styles.content_user_info_section}>
                <Text style={styles.bolded_text}>Location:</Text>
                <Text>Roskilde</Text>
            </View>
            <View style={{marginTop: '20px'}}>
                <View style={styles.user_reviews}>
                    <Text> 4,3 </Text>
                    <View style={{width: '50%'}}>
                        <SubmitButton text="See reviews" />
                    </View>
                </View>
                <View style={styles.user_reviews}>
                    <Text style={{width: '50%'}}> 54 reviews given </Text>
                    <View style={{width: '50%'}}>
                        <SubmitButton text="See given reviews" />
                    </View>
                </View>
            </View>

        <View style={styles.user_content_bottom_section}>
            <View style={styles.content_user_info_section}>
                <Text style={styles.bolded_text}>Your meals:</Text>
                <Text>119</Text>
            </View>
            <ScrollView  style={styles.meal_category_box_wrapper} horizontal>
              {food_category_mock_data.map((item) => {
                  return <MealCategoryBox
                      title={item.title}
                      image={item.image}
                  />
              })}
            </ScrollView>
            <View style={styles.edit_profile_wrapper}>
                <View style={{width: '50%'}}>
                    <SubmitButton 
                        text="Edit Profile"
                    />
                </View>
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
  scroll_container: {
    width: '100%',
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  profile_picture: {
    borderRadius: 100,
    height: '168px',
    width: '173px',
    zIndex: 999999999999999,
  },
 image_wrapper: {
    height: '210px',
    position: 'absolute',
    width: '210px',
  },
  content_section: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '50px'
  },
  content_follower_section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px',
    marginBottom: '10px'
  },
  bolded_text: {
    fontSize: 16,
    fontWeight: '700'
  },
  user_content_bottom_section: {
      marginTop: '20px',
      textAlign: 'left',
  },
  content_user_info_section: {
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px'
  },
  edit_profile_wrapper: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px'
  },
  user_reviews: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
  }
});

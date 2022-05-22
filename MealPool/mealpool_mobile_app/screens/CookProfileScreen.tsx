import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList, ImageBackground, Modal } from 'react-native';
import { CheckBox } from 'react-native-elements'
import CustomHeader from '../components/CustomHeader';

import Logo from '../components/Logo';
import MealCategoryBox from '../components/MealCategoryBox';
import ReviewModal from '../components/ReviewModal';
import SubmitButton from '../components/SubmitButton';
import StarRating from "react-native-star-rating-widget";

import { Text, View } from '../components/Themed';
import { food_category_mock_data } from '../constants/MockData';
import MealService from '../services/meal_service';
import ReviewService from '../services/review_service';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import { useGlobalContext } from '../GlobalContext';
import { useRoute } from '@react-navigation/native';
import UserService from '../services/user_service';
import { useMemo } from 'react';


export default function CookProfileScreen({ navigation }: RootStackScreenProps<'CookProfileScreen'>) {
  const route = useRoute();
  const [searchVal, setSearchVal] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [stars, setStars] = React.useState(3)
  const [rendered, isRendered] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false); 
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()
  const authorId = user[0].id;
  const ratedId =  route.params.cook[0].id;

  const postReview = () => {
    ReviewService.postReview({authorId,ratedId, stars, comment});
  }
  const fullname =   route.params.cook[0].fnameVal + " " + route.params.cook[0].lnameVal


  return (
    <View  style={styles.container}>
        <Text>Profile Type</Text>
        <ScrollView style={styles.scroll_container}>
            <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop: 50, position: 'relative' }}>
                    <Image source={require('../assets/images/profile_picture.png')}  style={styles.profile_picture} />
                <ImageBackground style={styles.image_wrapper} source={require('../assets/images/profile_picture_background.png')}>
                </ImageBackground>
            </View>
        
            <View style={styles.content_section}>
                <CustomHeader value={ fullname}/>
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 10}}>My profile - Chef</Text>
                <Text>Is logged in???? {isLoggedIn}</Text>
            </View>
            <View style={[styles.user_reviews, {padding: 10}]}>
                <View style={{width: '50%'}}>
                    <SubmitButton text="Follow" />
                </View>                    
                <View style={{width: '50%'}}>
                    <SubmitButton 
                    text="Write review" 
                    onPress={() => setModalVisible(true)} 
                    />
                </View>
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
            <View style={{marginTop: 20}}>
                <View style={styles.user_reviews}>
                    <View style={{width: '50%'}}>
                    <StarRating
                    starStyle={{width: '12%'}}
                    rating={stars}
                    onChange={() => null}
                    />
                    </View>
               
                    <View style={{width: '50%'}}>
                        <SubmitButton
                        text="See reviews" 
                        onPress={() =>navigation.navigate('ReviewScreen')} 
                        />
                    </View>
                </View>
                <View style={styles.user_reviews}>
                    <Text style={{width: '50%', textDecorationLine: 'underline'}}> 54 reviews given </Text>
                    <View style={{width: '50%'}}>
                        <SubmitButton
                        onPress={() =>navigation.navigate('ReviewScreen')} 
                        text="See given reviews" 
                        />
                    </View>
                </View>
            </View>

        <View style={styles.user_content_bottom_section}>
            <View style={styles.content_user_info_section}>
                <Text style={styles.bolded_text}>Your meals:</Text>
                <Text>119</Text>
            </View>
            <ScrollView   horizontal>
              {food_category_mock_data.map((item) => {
                  return <MealCategoryBox
                      title={item.title}
                      image={item.image}
                  />
              })}
            </ScrollView>
        </View>
        </ScrollView>
        <Modal
        transparent={true}
        visible={modalVisible}>
            <ReviewModal
                setValue={(text : string) => setComment(text)}
                modalVisible={() => setModalVisible(false)}
                onPress={postReview}
                value={comment}
            />
        </Modal>

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
    paddingRight: 20,
    paddingLeft: 20,
  },
  profile_picture: {
    borderRadius: 100,
    height: 168,
    width: 173,
    zIndex: 999999999999999,
  },
 image_wrapper: {
    height: 210,
    position: 'absolute',
    width: 210,
  },
  content_section: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  content_follower_section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10
  },
  bolded_text: {
    fontSize: 16,
    fontWeight: '700'
  },
  user_content_bottom_section: {
      marginTop: 20,
      textAlign: 'left',
  },
  content_user_info_section: {
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
  },
  edit_profile_wrapper: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
  },
  user_reviews: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
  }
});

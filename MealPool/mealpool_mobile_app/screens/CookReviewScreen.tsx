import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList, ImageBackground, Modal } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import CustomHeader from '../components/CustomHeader';
import GoBackButton from '../components/GoBackButton';

import MealCategoryBox from '../components/MealCategoryBox';
import ReviewCard from '../components/ReviewCard';
import ReviewModal from '../components/ReviewModal';
import SubmitButton from '../components/SubmitButton';

import { Text, View } from '../components/Themed';
import { food_category_mock_data } from '../constants/MockData';
import { useGlobalContext } from '../GlobalContext';
import ReviewService from '../services/review_service';
import { RootStackScreenProps, RootTabScreenProps } from '../types';


export default function CookReviewScreen({ navigation: {goBack} }: RootStackScreenProps<'CookReviewScreen'>) {
  const route = useRoute();
  const [reviews, setReviews] = React.useState(Array);
  const [comment, setComment] = React.useState('');
  const [stars, setStars] = React.useState(3)
  const [modalVisible, setModalVisible] = React.useState(false); 
  //const { user, setUser, isLoggedIn, setIsLoggedIn } = useGlobalContext()
  const user = route.params.cookId
  const fullname = user.fnameVal + " " + user.lnameVal

  const getReviews = () => {
    return ReviewService.getReviews(user.id).then((response : any) => {
        setReviews(response)
    })
  }

  React.useEffect(() => {
    console.log('COOKTEST', route.params.cookId)

     getReviews()
  }, [])

  return (
    <View  style={styles.container}>
         <GoBackButton
              style={{zIndex: 999999}} 
              onPress={() => goBack()} 
          />
        <ScrollView style={styles.scroll_container}>
            <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop: 50, position: 'relative' }}>
                <Image source={require('../assets/images/profile_picture.png')}  style={styles.profile_picture} />
                <ImageBackground style={styles.image_wrapper} source={require('../assets/images/profile_picture_background.png')}>
                </ImageBackground>
            </View>
        
            <View style={styles.content_section}>
                <CustomHeader value={fullname}/>
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 10}}>My profile - Chef 2</Text>
            </View>
            <View style={{width: '50%'}}>
                <StarRating
                    starStyle={{width: '8%'}}
                    rating={stars}
                    onChange={() => null}
                />
            </View>
            <View>
            {
            typeof reviews !== 'undefined' && reviews.length > 0 ? 
            reviews.map((item : any) => {
             return <ReviewCard 
                title="Lorem ipsum"
                comment={item.comment}
                stars={item.stars}
                />
            })

            : 
            <Text style={{textAlign: 'center', marginTop: 40, fontSize: 20}}>The user does not have any reviews yet</Text>
            } 
            </View>

        </ScrollView>
        <Modal
        transparent={true}
        visible={modalVisible}>
            <ReviewModal
                setValue={(text : string) => setComment(text)}
                modalVisible={() => setModalVisible(false)}
                onPress={() => console.log()}
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
    maxWidth: 1400,
    margin: 'auto',
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
  }
});

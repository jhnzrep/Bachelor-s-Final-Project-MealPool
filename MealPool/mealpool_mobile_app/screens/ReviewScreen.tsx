import * as React from 'react';
import { StyleSheet, Image, TextInput, Button, Alert, Pressable, Linking, ScrollView, SectionList, ImageBackground, Modal } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import CustomHeader from '../components/CustomHeader';

import MealCategoryBox from '../components/MealCategoryBox';
import ReviewCard from '../components/ReviewCard';
import ReviewModal from '../components/ReviewModal';
import SubmitButton from '../components/SubmitButton';

import { Text, View } from '../components/Themed';
import { food_category_mock_data } from '../constants/MockData';
import ReviewService from '../services/review_service';
import { RootTabScreenProps } from '../types';


export default function ReviewScreen({ navigation }: RootTabScreenProps<'ReviewScreen'>) {
  const [reviews, setReviews] = React.useState(Array);
  const [comment, setComment] = React.useState('');
  const [stars, setStars] = React.useState(3)
  const [modalVisible, setModalVisible] = React.useState(false); 
  const authorId = "62744054a0293dc967bbe5ae";
  const ratedId =  "62729ead203bb0d4d9e4eea9";

  const getReviews = () => {
    return ReviewService.getReviews(authorId).then((response : any) => {
        setReviews(response)
    })
  }

  React.useEffect(() => {
     getReviews()
  }, [])

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
                <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 10}}>My profile - Chef</Text>
            </View>
            <View style={{width: '50%'}}>
                <StarRating
                    starStyle={{width: '8%'}}
                    rating={stars}
                    onChange={() => null}
                />
            </View>
            <View>
            {reviews.map((item : any) => {
             return <ReviewCard 
                title="Lorem ipsum"
                comment={item.comment}
                stars={item.stars}
                />
            })} 
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

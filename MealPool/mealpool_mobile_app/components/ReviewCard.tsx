import React from "react";
import Colors from '../constants/Colors';
import { StyleSheet, View, Text, SectionList, Image, FlatList } from "react-native";
import CustomHeader from "./CustomHeader";
import SubmitButton from "./SubmitButton";
import { Platform } from 'react-native';
import StarRating from "react-native-star-rating-widget";


export default function ReviewCard(props: any){
    const [toggleContent, setToggleContent] = React.useState(false)

    const readMore = () => {
        setToggleContent(!toggleContent)
    }
  return (
    <View style={{width: '100%'}}>
        <View style={styles.card}>
            <View style={styles.card_content}>
                <Text style={styles.title} >{props.title }</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/images/offer_image.svg')}  style={styles.card_picture} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 10}}>
                                3.4.2022
                            </Text>
                            <Text style={{fontSize: 10}}>
                                Caroline Newman
                            </Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'flex-end', width: '90%'}}>
                        <StarRating
                        style={{justifyContent: 'flex-end'}}
                        starStyle={{width: '4%'}}
                        rating={props.stars}
                        onChange={() => null}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight: '700', fontSize: 12}}>
                        Review by Caroline Newman:
                    </Text>
                    <Text style={{fontSize: 12}}>
                        {props.comment}
                    </Text>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        backgroundColor: Colors.light_orange_full_opacity.background,
        width: '100%',
        height: 'auto',
        borderRadius: 25,
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        flexWrap: 'wrap'
    },

    card_content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: Colors.text_color.background
    },
    card_meal_description: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card_picture: {
        height: 40,
        minWidth: 40
    },
    card_right: {
        marginTop: 5,
        flex: 1,
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '600',
    },
    card_content_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    highlighted_text: {
        fontWeight: '700',
        fontSize: 14
    },
    read_more: {
        color: Colors.dark_orange.background,
        fontSize: 12,
        fontWeight: '300',
        textDecorationLine: 'underline',
        marginTop: 10
    },
    card_right_content: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    }
})

import React from "react";
import Colors from '../constants/Colors';
import { StyleSheet, View, Text, SectionList, Image } from "react-native";
import CustomHeader from "./CustomHeader";
import SubmitButton from "./SubmitButton";
import { Platform } from 'react-native';


export default function CustomCard(props: any){
    const [toggleContent, setToggleContent] = React.useState(false)

    const readMore = () => {
        setToggleContent(!toggleContent)
    }
  return (
    <View style={styles.card}>
        <View>
            <Image source={require('../assets/images/offer_image.svg')}  style={styles.card_picture} />
        </View>
        <View style={styles.card_right}>
            <Text style={styles.title} >{props.title }</Text>
            <View style={styles.card_content_wrapper}>
                <View style={styles.card_left_content}>
                    <Text style={{fontWeight: '300', fontSize: 12, }}>Caroline Newman </Text>
                    <Text style={{fontWeight: '300', fontSize: 14}}>8 spots available </Text>
                    <Text style={[styles.highlighted_text, {marginTop: '10px'}]}>2 points </Text>
                    <Text style={styles.read_more}
                    onPress={readMore}
                    >Read more </Text>
                </View>
                <View style={styles.card_right_content}>
                    <Text style={styles.highlighted_text}>350 kcal </Text>
                    <SubmitButton text="Order now"  small_button={true}/>
                </View>
            </View>
        </View>
        <View style={[styles.hidden_content, toggleContent ? {display: 'block'} : {display: 'none'} ]}>
            addddddddddddddasdasdadads
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        marginTop: '15px',
        backgroundColor: Colors.light_orange_full_opacity.background,
        width: '100%',
        height: '161px',
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
        color: Colors.text_color.background,
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
    },
    card_picture: {
        height: '100px',
        minWidth: '100px'
    },
    card_right: {
        marginTop: '5px',
        flex: 1,
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
    card_content_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '2x',
        marginTop: '10px'
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
        marginTop: '10px'
    },
    card_right_content: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    },
    hidden_content: {
        
    }
})

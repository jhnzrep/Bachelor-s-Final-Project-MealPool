import React from "react";
import Colors from '../constants/Colors';
import { StyleSheet, View, Text, SectionList, Image, FlatList } from "react-native";
import CustomHeader from "./CustomHeader";
import SubmitButton from "./SubmitButton";
import { Platform } from 'react-native';


export default function CustomCard(props: any){
    const [toggleContent, setToggleContent] = React.useState(false)

    const readMore = () => {
        setToggleContent(!toggleContent)
    }
  return (
    <View style={{width: '100%'}}>
        {!toggleContent ? 
        <View style={styles.card}>
            <View style={styles.card_content}>
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
            </View>
        </View>
        : 
        <View style={styles.card_opened}>
            <View style={styles.card_opened_content}>
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
                        </View>
                        <View style={styles.card_right_content}>
                            <Text style={[styles.highlighted_text ]}>350 kcal </Text>
                        </View>
                    </View>
                </View>
                
            </View>

            <View style={styles.card_opened_center_wrapper}>
                <View>
                    <Text style={{fontSize: 12}}>
                        About:
                    </Text>
                    <Text style={{fontSize: 12}}>
                        My favourite breakfast - avocado bread with poached egg and spinach on the top. It’s healthy, low in calories and delicious. Try it out with me.
                    </Text>
                </View>
                <View style={styles.card_meal_description}>
                    <View>
                        <Text style={{fontSize: 14, fontWeight: '600'}}>Ingredients: </Text>
                        <FlatList
                            textDecorationStyle='solid'
                            data={[
                            {key: 'Avocado'},
                            {key: 'Spinach'},
                            {key: 'White bread'},
                            {key: 'Egg'},
                            {key: 'Paprika'}
                            ]}
                            renderItem={({item}) => <Text style={{fontSize: 12}} ><Text style={{fontSize: 6}}>{'\u2B24' + ' '} </Text> {item.key}</Text>}
                        />
                    </View>
                    <View >
                        <Text style={{fontSize: 14, fontWeight: '600'}}>Allergens: </Text>
                        <FlatList
                            data={[
                            {key: 'Bread containing gluten'},
                            {key: 'eggs'},
                            {key: 'sulphur dioxide'},
                            {key: 'may contain peanuts'},
                            ]}
                            renderItem={({item}) => <Text style={{fontSize: 12}} ><Text style={{fontSize: 6}}>{'\u2B24' + ' '} </Text> {item.key}</Text>}
                        />
                    </View>
                </View>
                <View>
                    <SubmitButton text="Order now"  small_button={true}/>
                    <Text style={[styles.read_more, {textAlign: 'center'}]}
                    onPress={readMore}
                    >Read less </Text>
                </View>
            </View>
            
        </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        marginTop: '15px',
        backgroundColor: Colors.light_orange_full_opacity.background,
        width: '100%',
        height: 'auto',
        borderRadius: 25,
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        flexWrap: 'wrap'
    },
    card_opened: {
        marginTop: '15px',
        backgroundColor: Colors.light_orange_full_opacity.background,
        width: '100%',
        height: 'auto',
        borderRadius: 25,
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        flexWrap: 'wrap'
    },
    card_opened_content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: Colors.text_color.background
    },
    card_opened_center_wrapper: {
        paddingLeft: '30px',
        paddingRight: '30px'
    },

    card_content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: Colors.text_color.background
    },
    card_meal_description: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
})

import React from "react";
import Colors from '../constants/Colors';
import { StyleSheet, View, Text, SectionList, Image, FlatList, useWindowDimensions } from "react-native";
import CustomHeader from "./CustomHeader";
import SubmitButton from "./SubmitButton";
import { Platform } from 'react-native';


export default function CustomCard(props: any){
    const [toggleContent, setToggleContent] = React.useState(false)
    const window = useWindowDimensions();
    const isDesktopDevice = window.width > 768;
  

    const readMore = () => {
        setToggleContent(!toggleContent)
    }
  return (
    <View style={isDesktopDevice ? [{flexBasis: '50%',  maxWidth: '100%', flex:1}] : [{flexBasis: '100%'}]}>
        {!toggleContent ? 
        <View style={styles.card}>
            <View style={styles.card_content}>
                <View>
                    <Image source={require('../assets/images/offer_image.png')}  style={styles.card_picture} />
                </View>
                <View style={styles.card_right}>
                    <Text style={styles.title} >{props.title }</Text>
                    <View style={styles.card_content_wrapper}>
                        <View>
                            <Text style={{fontWeight: '300', fontSize: 12, }}>Caroline Newman </Text>
                            <Text style={{fontWeight: '300', fontSize: 14}}>8 spots available </Text>
                            <Text style={[styles.highlighted_text, {marginTop: 10}]}>2 points </Text>
                            <Text style={styles.read_more}
                            onPress={readMore}
                            >Read more </Text>
                        </View>
                        <View style={styles.card_right_content}>
                            <Text style={styles.highlighted_text}>350 kcal </Text>
                            {
                                !props.orderBtnHide ? 
                                <SubmitButton 
                                text="Order" 
                                style={{justifyContent: 'center', textALign: 'center'}}
                                small_button={true}
                                onPress={props.orderNowAction}
                                />
                                :
                                null
                            }
                          
                        </View>
                    </View>
                </View>
            </View>
        </View>
        : 
        <View style={styles.card_opened}>
            <View style={styles.card_opened_content}>
                <View>
                    <Image source={require('../assets/images/offer_image.png')}  style={styles.card_picture} />
                </View>
                <View style={styles.card_right}>
                    <Text style={styles.title} >{props.title }</Text>
                    <View style={styles.card_content_wrapper}>
                        <View >
                            <Text style={{fontWeight: '300', fontSize: 12, }}>Caroline Newman </Text>
                            <Text style={{fontWeight: '300', fontSize: 14}}>8 spots available </Text>
                            <Text style={[styles.highlighted_text, {marginTop: 10}]}>2 points </Text>
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
                    {
                        !props.orderBtnHide ? 
                        <SubmitButton 
                        text="Order now"  
                        small_button={true}
                        onPress={props.orderNowAction}
                        />
                        :
                        null
                    }
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
        marginTop: 15,
        backgroundColor: Colors.light_orange_full_opacity.background,
        width: '100%',
        height: 'auto',
        borderRadius: 25,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        flexWrap: 'wrap'
    },
    card_opened: {
        marginTop: 15,
        backgroundColor: Colors.light_orange_full_opacity.background,
        width: '100%',
        height: 'auto',
        borderRadius: 25,
        shadowColor: 'rgba(253, 180, 65, 0.3)',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        flexWrap: 'wrap'
    },
    card_opened_content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: Colors.text_color.background
    },
    card_opened_center_wrapper: {
        paddingLeft: 30,
        paddingRight: 30
    },

    card_content: {
        overflow: 'hidden',
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
        height: 100,
        minWidth: 100
    },
    card_right: {
        marginTop: 5,
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

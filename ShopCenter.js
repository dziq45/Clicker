import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import ShopItem from './ShopItem'

const ShopCenter = (props) => {
    const [shops, setShops] = useState([{ key: 'siema', image: require('./images/shop1.png') }, { key: 'Drugi element', image: require('./images/shop1.png') }, { key: 'siema2', image: require('./images/shop1.png') }, { key: 'siema3', image: require('./images/shop1.png') }])
    return (
        <View>
            <FlatList data={shops} renderItem={({ item }) => (
                <View style={styles.container}>
                    <Image style={styles.image} source={item.image}></Image>
                    <Text>Jakiś super opis.</Text>
                </View>)}>
            </FlatList>
        </View>)
}


const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row'

    },
    image: {
        resizeMode: 'contain',
        height: 100,
        width: 100
    },
    text: {
        fontSize: 20,
        
    }

})
export default ShopCenter
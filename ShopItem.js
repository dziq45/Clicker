import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux'

const ShopItem = (props) => {
    return(
    <View style = {styles.container}>
        <Image style={styles.image}></Image>
        <Text>Jakiś super opis.</Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flexWrap:'wrap',
        alignItems: 'flex-start',
        flexDirection:'row'
        
    },
    image:{
        resizeMode:'contain',
        height: 100,
        width: 100
    }
})
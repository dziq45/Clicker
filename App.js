/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import ViewPager from '@react-native-community/viewpager'
import { increment } from './actions/simpleActions'
import ShopCenter from './ShopCenter'



const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max + min)
}
const App = (props) => {
  const [clicks, setClicks] = useState([])
  const countRef = useRef(clicks)
  countRef.current = clicks

  onRockPress = () => {
    props.dispatch(increment(props.incrementBy))
    setClicks([...clicks, { left: randomNumber(100, 150), top: randomNumber(50, 150) }])

    setTimeout(() => {
      let x, rest;
      [x, ...rest] = countRef.current
      setClicks(rest)
    }, 700)

  }
  return (
    <ViewPager style={styles.ViewPager} initialPage={0}>
      <View key='1' style={styles.container}>

        <TouchableHighlight onPress={() => onRockPress()} underlayColor='transparent'>
          <Image source={require('./images/rock.png')}></Image>
        </TouchableHighlight>
        {clicks.map(elem => (<View style={{ position: "absolute", left: elem.left, top: elem.top }}><Text>{props.incrementBy}</Text></View>))}
        <Text onPress={() => { console.log(props.status) }}>Twoje złoto: {props.gold}</Text>
      </View>

      <ShopCenter></ShopCenter>

    </ViewPager>

  );
}

const styles = StyleSheet.create({
  ViewPager: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
const mapStateToProps = (state) => ({
  gold: state.reducer.gold,
  incrementBy: state.reducer.incrementBy
})
export default connect(mapStateToProps)(App)

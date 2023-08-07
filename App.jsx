/* eslint-disable prettier/prettier */
import { Alert, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { height, width } from './config/dimension';
import LottieView from 'lottie-react-native';
const App = () => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.background}
        source={{
          uri: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
        }}
      />
      <View style={styles.textcontainer} >
        {/* <Image
          style={styles.image}
          source={{
            uri: 'https://raw.githubusercontent.com/prakhardubey2002/PomodoroApp/main/assets/logo.png',
          }}
        /> */}
        <LottieView style={styles.image} source={
          require
          ('./assets/lottie/animation_ll167kxj.json')} autoPlay loop />
        <Text style={styles.texttitle} >Aryavarm</Text>
        <Text style={styles.text}  >
          "Stay Calm, Boost Productivity: Your Stress-Free Companion with
          Pomodoro!"
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Hi")}>
          <Text style={styles.buttonText}>Get started</Text>
          <LottieView style={styles.bimage} source={
          require
          ('./assets/lottie/load.json')} autoPlay loop />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    // display: 'flex',
    backgroundColor: 'red',
    height: height,
    width: width,
    position: 'relative',
  },
  background: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
  },
  textcontainer: {
    position: 'absolute',
    bottom: 50,
    left: 40,
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    backgroundColor: '#9867e1',
    width:width*0.5,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    flexDirection:'row'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  texttitle: {
    fontSize: 42,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color (semi-transparent black)
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset (x, y)
    textShadowRadius: 5,
  },
  image:{
    width:250,
    height:250,
  },
  bimage:{
    height:40,
    width:50,
  },
  text:{
    fontSize:14,
    textAlign:'center'
  }
});

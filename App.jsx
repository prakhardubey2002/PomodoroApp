/* eslint-disable prettier/prettier */
import { Alert, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { height, width } from './config/dimension';

const App = () => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.background}
        source={{
          uri: 'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        }}
      />
      <View style={styles.textcontainer} >
        <Image
          style={styles.background}
          source={{
            uri: 'https://images.unsplash.com/photo-1641025389903-6d06a65a9c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
          }}
        />
        <Text style={styles.texttitle} >AryaVart</Text>
        <Text>
          "Stay Calm, Boost Productivity: Your Stress-Free Companion with
          Pomodoro!"
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Hi")}>
          <Text style={styles.buttonText}>Get started</Text>
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
    left: 40
  },
  button: {
    backgroundColor: '#fe79b1',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
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
  }
});

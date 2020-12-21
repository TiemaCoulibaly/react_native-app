import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

function WelcomeScreen(){
  return(
   
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>

      <View style={styles.logoContainer}>
          <Image  style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text>That is the tagline of my app</Text>
      </View>

        <View style={styles.loginButton}>
            <Text style={styles.login}>Login</Text>
         </View>

        <View style={styles.loginRegister}>
            <Text style={styles.login}>Register</Text>
         </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  }, 
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },

  loginButton: {
      width: '100%',
      height: 60,
      backgroundColor: 'blue',
  },
  login:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

  },
  loginRegister: {
      width: '100%',
      height: 60,
      backgroundColor: 'green',
  }
})
export default WelcomeScreen;
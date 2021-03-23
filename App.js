import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'

import * as firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing.js';
import RegisterScreen from './components/auth/Register.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBSl3he8s7Xl4iy5AySlgE4fw6h4bgiJI",
  authDomain: "instagram-dev-c6bfe.firebaseapp.com",
  projectId: "instagram-dev-c6bfe",
  storageBucket: "instagram-dev-c6bfe.appspot.com",
  messagingSenderId: "1016123619765",
  appId: "1:1016123619765:web:9c16766d3ffe25dda3c1fc",
  measurementId: "G-90048M41ND"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    }
  };

  componentDidMount({})
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headersShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App

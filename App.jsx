import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name ={"Home"} component={HomeScreen}/>
        <Stack.Screen name ={"Login"} component={LoginScreen}/>
       
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
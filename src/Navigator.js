import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Contact from './Contact';
import Splash from './Splash';
import Registration from './Registration';
 
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Contact' component={Contact}/>    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})
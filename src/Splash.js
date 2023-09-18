import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
          navigation.navigate('Registration')
            // checkLogin();
        },500)
    },[])

    const checkLogin = async () => {
        const email = await AsyncStorage.getItem('EMAIL');
        const password = await AsyncStorage.getItem('PASSWORD');
        if (email !== null || email !== '' || email !== undefined) {
            navigation.navigate('Contact')
        } else {
            navigation.navigate('Login')
        }
    }
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:20,color:'blue',fontWeight:'bold'}}>My Contacts App</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
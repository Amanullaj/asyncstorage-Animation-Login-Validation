import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useIsFocused} from '@react-navigation/native'

const Contact = ({navigation}) => {
    const isFocused = useIsFocused();
    const getData = async () => {
        const contactsS = await AsyncStorage.getItem('CONTACT');
        console.log(JSON.parse(contactsS));
    };
    useEffect(()=>{
        getData();
    },[isFocused])
  return (
    <View style={{flex:1}}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('AddContact')}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    btn : {backgroundColor:'black',height:50,width:'50%',bottom:20,right:20,position:'absolute',borderRadius:30,
        alignItems:'center',justifyContent:'center'}
})
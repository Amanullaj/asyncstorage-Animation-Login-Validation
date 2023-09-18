import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native'

const Login = () => {
    const[email,setEmail] = useState();
    const[password, setPassowrd] = useState();
    const navigation = useNavigation();

    const saveEmailPassword = async () => {
        try {
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('PASSWORD', password);
            navigation.navigate('Contact')
          } catch (e) {
            console.log(e)
          }
        
    }
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <TextInput placeholder='Enter Email' style={styles.input}
      value={email} onChangeText={(text)=>setEmail(text)}/>
      <TextInput placeholder='Enter Password' style={styles.input}
      value={password} onChangeText={(text)=>setPassowrd(text)}/>
      <TouchableOpacity style={styles.btn} onPress={()=>saveEmailPassword()}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    input : {width:'80%',height:50,borderWidth:0.5,margin:30,borderRadius:10,padding:10},
    btn : {backgroundColor:'black',width:'80%',height:50,alignItems:'center',justifyContent:'center',margin:30,borderRadius:10}
})
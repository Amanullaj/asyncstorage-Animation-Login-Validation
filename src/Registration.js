import { StyleSheet, Text, View,TextInput, TouchableOpacity, Keyboard,Image } from 'react-native'
import React,{useState} from 'react'
import Input from './Input'
import Animated,{ FadeIn, FadeOut,FadeInUp } from 'react-native-reanimated';


const Registration = ({navigation}) => {
    const[inputs,setInputs] = useState({
        email:'',
        name:'',
        mobile:'',
        password:'',
    })
    const vaildate = () => {
        Keyboard.dismiss()
        if(!inputs.email){

        };
     const onChange = (text,input) => {
        setInputs(prevState => ({...prevState, [input]: text}))
     }   
    }
  return (
    <View style={{marginHorizontal:20}}>
        <View style={{flexDirection:'row'}}>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} source={require('../src/images/lamp.png')} style={{height:100,width:60}}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(2)} source={require('../src/images/lamp.png')} style={{height:150,width:100,marginLeft:200}}/>
        </View>
      <Animated.Text entering={FadeInUp.duration(1000).springify()} style={{fontSize:30,color:'black',fontWeight:'bold',paddingTop:30}}>Registration</Animated.Text>
      <Text style={{fontSize:18}}>Enter your details to Register</Text>
      <View >
      <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()}>
        <Input iconName="email-outline" label='Email' 
        placeholder='Enter your Email Address' 
        onChangeText={(text)=>{onChange(text, 'email')}}/>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(300).duration(1000).springify()}>
         <Input iconName="email-outline" label='Full Name' 
        placeholder='Enter your full name' 
        onChangeText={(text)=>{onChange(text, 'name')}}/>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(400).duration(1000).springify()}>
         <Input iconName="email-outline" label='Contact Number' keyboardType='numeric'
        placeholder='Enter your mobile number' 
        onChangeText={(text)=>{onChange(text, 'mobile')}}/>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(500).duration(1000).springify()}>
         <Input password iconName="lock-outline" label='Password' 
        placeholder='Enter your Password' 
        onChangeText={(text)=>{onChange(text, 'password')}}/>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()}>
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(700).duration(1000).springify()}>
      <TouchableOpacity style={{backgroundColor:'#0059b3',marginTop:30,padding:10,justifyContent:'center',borderRadius:10,alignItems:'center'}}
      onPress={vaildate}>
        <Text style={{fontSize:20,color:'white'}}>Submit</Text>
      </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(800).duration(1000).springify()}>
      <Text style={{marginTop:5,color:'black',fontSize:16,textAlign:'center',fontWeight:'bold'}}>Already have an account ? 
      <Text style={{color:'#0059b3'}} onPress={()=>navigation.navigate('Login')}>Login</Text></Text>
      </Animated.View>
    </View>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})
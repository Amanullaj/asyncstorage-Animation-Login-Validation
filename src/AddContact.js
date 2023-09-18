import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

let contacts = [];
const AddContact = ({navigation}) => {
    const[name,setName] = useState('');
    const[mobile, setMobile] = useState('');

    const saveContact = async () => {
        let tempContact = [];
        let x = JSON.parse(await AsyncStorage.getItem('CONTACT'));
        tempContact = x;
        tempContact.map(item=>{
            contacts.push(item);
        });
        contacts.push({name: name, mobile: mobile});
        await AsyncStorage.setItem('CONTACTS', JSON.stringify(contacts));
        navigation.goBack();
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <TextInput placeholder='Enter Name' style={styles.input}
      value={name} onChangeText={(text)=>setName(text)}/>
      <TextInput placeholder='Enter Mobile Number' style={styles.input}
      value={mobile} onChangeText={(text)=>setMobile(text)} keyboardType='number-pad'/>
      <TouchableOpacity style={styles.btn} onPress={()=>saveContact()}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddContact

const styles = StyleSheet.create({
    input : {width:'80%',height:50,borderWidth:0.5,margin:30,borderRadius:10,padding:10},
    btn : {backgroundColor:'black',width:'80%',height:50,alignItems:'center',justifyContent:'center',margin:30,borderRadius:10}
})
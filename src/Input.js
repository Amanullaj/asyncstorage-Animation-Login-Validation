import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus=()=>{},
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(password)
  return (
    <View style={{marginTop:20}}>
      <Text style={{fontSize:18,color:'black'}}>{label}</Text>
      <View style={styles.input}>
        <Icon name={iconName} style={{fontSize:22,margin:10}}/>
        <TextInput {...props} onFocus={()=>{onFocus();setFocused(true)}}
        secureTextEntry={hidePassword}/>
        {
            password && (
        <View style={{flex:1,alignSelf:'center',marginLeft:100}}>
        <Icon name={hidePassword?'eye-outline':'eye-off-outline'} style={{fontSize:22}}
        onPress={()=>setHidePassword(!hidePassword)}/>
        </View>
            )
        }
       
      </View>
      
      {
        error && (
            <Text style={{color:'red',fontSize:14,marginTop:8}}>{error}</Text>
        )
      }
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input : {backgroundColor:'#e6f2ff',borderRadius:10,borderWidth:1,flexDirection:'row',alignItems:'center',marginTop:8}
})
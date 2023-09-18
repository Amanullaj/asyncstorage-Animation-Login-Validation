import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigator from './src/Navigator'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigator/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})
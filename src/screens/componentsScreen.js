import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComponentsScreen() {
let name = 'Hoàng'
  return (
    <View>
      <Text style={styles.textStyle}>This is the components Screen</Text>
      <Text style={styles.sub}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    sub:{
        fontSize:30
    }
})
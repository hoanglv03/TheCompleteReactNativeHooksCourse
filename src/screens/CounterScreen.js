import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {
    const [counter, setCounter] = useState(0)
  return (
    <View>
    <Button title='Increase Counter' onPress={()=>{
        setCounter(counter+1);
    }}/>
    <Button title='Decrease Counter' onPress={()=>{
        setCounter(counter-1);
    }}/>
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
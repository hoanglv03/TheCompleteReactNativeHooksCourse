import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImageDetail(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image source={props.image}/>
    </View>
  )
}

const styles = StyleSheet.create({})
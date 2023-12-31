import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function ColorScreen() {
  const [colors, setColors] = useState([])
  
  return (
    <View>
      <Button  title='add Color' onPress={()=>{
        setColors([...colors,ramdomRgb()]);
      }}/>
     
      <FlatList 
      keyExtractor={(item)=>item}
        data={colors}
        renderItem={({item})=>{
          return  <View style={{height:100,width:100,backgroundColor:item}}/>
        }}
      />
    </View>
  )
}
const ramdomRgb = () =>{
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({})
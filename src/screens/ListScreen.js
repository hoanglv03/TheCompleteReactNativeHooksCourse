import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListScreen() {
    const friends = [
        {name: 'John ', age : 30},
        {name: 'John Smith' , age :20},
        {name: 'John 2', age :18},
        {name: 'John 3', age :12},
        {name: 'John 4 ', age :22},
        {name: 'John 5', age :31},
        {name: 'John 6', age :11},
        {name: 'John 7', age :22},

    ]
  return (
  
      <FlatList
        keyExtractor={(friend) => friend.name}
       data={friends}
       showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
            return ( <View style={{flexDirection:'row',marginVertical:20}}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
            </View>
            )
        }}
      />
    
  )
}

const styles = StyleSheet.create({})
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems:'center'
    }}>
    
      <TouchableOpacity onPress={() => navigation.navigate("ComponentScreen")}>
        <Text>ComponentScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ListScreen")}>
        <Text>ListScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ImageScreen")}>
        <Text>ImageScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CounterScreen")}>
        <Text>CounterScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ColorScreen")}>
        <Text>ColorScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

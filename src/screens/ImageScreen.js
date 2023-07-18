import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../component/ImageDetail";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail title="Forest" image={require("../../assets/forest.jpg")} />
      <ImageDetail title="Beach" image={require("../../assets/beach.jpg")} />
      <ImageDetail
        title="Mountain"
        image={require("../../assets/mountain.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

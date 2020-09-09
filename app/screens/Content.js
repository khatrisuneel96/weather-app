import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./card/Card";

export default class Content extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card color1="orange" color2="pink" />
        <Card color1="hotpink" color2="purple" />
        <Card color1="lightblue" color2="lightgreen" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

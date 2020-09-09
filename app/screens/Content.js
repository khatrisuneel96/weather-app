import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./card/Card";

export default class Content extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          img={require("../assets/raining.png")}
          bgColor="orange"
          color1="orange"
          color2="pink"
          style={{ borderTopLeftRadius: 70 }}
        />
        <Card
          img={require("../assets/sunny.jpg")}
          color1="hotpink"
          color2="purple"
        />
        <Card
          img={require("../assets/night.png")}
          bgColor="lightgreen"
          color1="lightblue"
          color2="lightgreen"
          style={{ borderBottomRightRadius: 70 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
  },
});

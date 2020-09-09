import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Weather Forecast</Text>
        <Image source={require("../assets/sunny.jpg")} style={styles.image} />
        <Text style={styles.temp}>39.9</Text>
        <Text style={styles.city}>Karachi, Pakistan</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: 45,
    height: 45,
    alignSelf: "center",
    marginVertical: 6,
  },
  temp: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 32,
    textAlign: "center",
  },
  city: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.text}>Weather Forecast</Text>
      <Image source={require("../assets/sunny.jpg")} style={styles.image} />
      <Text style={styles.temp}>39.9</Text>
      <Text style={styles.city}>Karachi, Pakistan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 25,
    textAlign: "center",
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginVertical: 10,
  },
  temp: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 50,
    // fontWeight: "900",
    textAlign: "center",
  },
  city: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 17,
    color: "#666",
    textAlign: "center",
  },
});

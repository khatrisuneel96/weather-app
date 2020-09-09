import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={{ ...styles.bgCard, ...styles.card1 }}>
          <Text style={styles.text}>18:00</Text>
          <Image
            source={require("../../assets/raining.png")}
            style={styles.img}
          />
        </View>
        <View style={{ ...styles.bgCard, ...styles.card2 }}>
          <Text style={styles.text}>12</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "orange",
  },
  bgCard: {
    width: "100%",
    height: 120,
    alignItems: "center",
  },
  img: {
    width: 75,
    height: 75,
    alignSelf: "center",
    marginTop: 10,
    zIndex: 99,
  },
  text: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 35,
    color: "#fff",
    marginVertical: 15,
  },
  card1: {
    backgroundColor: "orange",
    // justifyContent: "flex-start",
  },
  card2: {
    backgroundColor: "pink",
    zIndex: -1,
    borderTopLeftRadius: 80,
    justifyContent: "flex-end",
  },
});

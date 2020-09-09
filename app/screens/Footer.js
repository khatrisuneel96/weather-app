import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Additional Info</Text>
        <View style={styles.divider}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginEnd: 45,
                fontFamily: "Century-Gothic-Bold",
                color: "#555",
              }}
            >
              Wind
            </Text>
            <Text
              style={{ fontFamily: "Century-Gothic-Regular", color: "#bbb" }}
            >
              12 KM/h
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginRight: 40,
                fontFamily: "Century-Gothic-Bold",
                color: "#555",
              }}
            >
              Humidity
            </Text>
            <Text
              style={{
                marginEnd: 20,
                fontFamily: "Century-Gothic-Regular",
                color: "#bbb",
              }}
            >
              85%
            </Text>
          </View>
        </View>
        <View style={styles.divider}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginEnd: 25,
                fontFamily: "Century-Gothic-Bold",
                color: "#555",
              }}
            >
              Visibility
            </Text>
            <Text
              style={{ fontFamily: "Century-Gothic-Regular", color: "#bbb" }}
            >
              25 KM
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginRight: 89,
                fontFamily: "Century-Gothic-Bold",
                color: "#555",
              }}
            >
              UV
            </Text>
            <Text
              style={{
                marginEnd: 30,
                fontFamily: "Century-Gothic-Regular",
                color: "#bbb",
              }}
            >
              1
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 20,
    marginVertical: 15,
  },
  divider: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

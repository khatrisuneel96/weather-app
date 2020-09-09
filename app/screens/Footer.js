import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Additional Info</Text>
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
});

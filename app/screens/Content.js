import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./card/Card";

export default class Content extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          img={require("../assets/raining.png")}
          bgColor="#f18954"
          color1="#f18954"
          color2="#e36e7a"
          style={{ borderTopLeftRadius: 70 }}
          data={this.props.data[1]}
        />
        <Card
          img={require("../assets/sunny.jpg")}
          color1="#b56390"
          color2="#7b5e90"
          data={this.props.data[2]}
        />
        <Card
          img={require("../assets/night.png")}
          bgColor="#48567b"
          color1="#2e4759"
          color2="#48567b"
          style={{ borderBottomRightRadius: 70 }}
          data={this.props.data[3]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
  },
});

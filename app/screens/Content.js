import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Card from "./card/Card";

export default class Content extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          bgColor="#f18954"
          color1="#f18954"
          color2="#e36e7a"
          style={{ borderTopLeftRadius: 50 }}
          data={this.props.data[1]}
        />
        <Card color1="#b56390" color2="#7b5e90" data={this.props.data[2]} />
        <Card
          bgColor="#48567b"
          color1="#2e4759"
          color2="#48567b"
          style={{ borderBottomRightRadius: 50 }}
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

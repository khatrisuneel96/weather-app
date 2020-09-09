import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./card/Card";

export default class Content extends Component {
  render() {
    return (
      <View>
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

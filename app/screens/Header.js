import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

export default function Header() {
  return (
    <Appbar.Header style={{ backgroundColor: "#1C9CF6" }}>
      <Appbar.Content
        titleStyle={{
          fontFamily: "Century-Gothic-Bold",
          fontSize: 25,
          textAlign: "center",
        }}
        subtitleStyle={{
          fontFamily: "Century-Gothic-Regular",
          fontSize: 13,
          textAlign: "center",
        }}
        title="Weather App"
        subtitle="Find you weather info!"
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({});

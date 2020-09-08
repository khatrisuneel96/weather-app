import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function SearchCity() {
  const [city, setCity] = useState("");

  return (
    <TextInput
      mode="outlined"
      style={{ fontFamily: "Century-Gothic-Regular" }}
      label="City Name"
      placeholder="Enter Your City"
      value={city}
      onChangeText={(city) => setCity(city)}
      theme={{
        colors: { background: "#fff", text: "#444", primary: "#1D71F2" },
      }}
    />
  );
}

const styles = StyleSheet.create({
  //   input: {
  //     fontFamily: "Century-Gothic-Regular",
  //     backgroundColor: "#f2f2f2",
  //   },
});

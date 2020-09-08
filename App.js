// import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, Text, View } from "react-native";
import Header from "./app/screens/Header";
import SearchCity from "./app/screens/SearchCity";

export default function App() {
  let [fontLoaded] = useFonts({
    "Century-Gothic-Regular": require("./app/assets/fonts/Century-Gothic-Regular.ttf"),
    "Century-Gothic-Bold": require("./app/assets/fonts/Century-Gothic-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <SearchCity />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

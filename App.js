import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./app/screens/Header";
import Content from "./app/screens/Content";
import Footer from "./app/screens/Footer";

export default function App() {
  let [fontLoaded] = useFonts({
    "Century-Gothic-Regular": require("./app/assets/fonts/Century-Gothic-Regular.ttf"),
    "Century-Gothic-Bold": require("./app/assets/fonts/Century-Gothic-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Content />
        <Footer />

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
});

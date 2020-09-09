import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, SafeAreaView } from "react-native";
import Header from "./app/screens/Header";
import Content from "./app/screens/Content";
import Footer from "./app/screens/Footer";

let customFont = {
  "Century-Gothic-Regular": require("./app/assets/fonts/Century-Gothic-Regular.ttf"),
  "Century-Gothic-Bold": require("./app/assets/fonts/Century-Gothic-Bold.ttf"),
};

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async loadFontAsync() {
    await Font.loadAsync(customFont);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFontAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView style={styles.container}>
          <Header />
          <Content />
          <Footer />

          <StatusBar style="auto" />
        </SafeAreaView>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
});

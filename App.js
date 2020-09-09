import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Header from "./app/screens/Header";
import Content from "./app/screens/Content";
import Footer from "./app/screens/Footer";

let customFont = {
  "Century-Gothic-Regular": require("./app/assets/fonts/Century-Gothic-Regular.ttf"),
  "Century-Gothic-Bold": require("./app/assets/fonts/Century-Gothic-Bold.ttf"),
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      report: {
        list: null,
        detail: null,
      },
    };
    this.getFetchedWeather = this.getFetchedWeather.bind(this);
  }

  async loadFontAsync() {
    await Font.loadAsync(customFont);
    this.setState({ fontsLoaded: true });
  }

  async getFetchedWeather() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Karachi,PK&appid=10263981798ee36f56026db960fcbecc&units=metric"
    );
    const data = await response.json();

    this.setState({
      report: {
        list: [data.list[0], data.list[1], data.list[2], data.list[3]],
        detail: data.city,
      },
    });
  }

  async componentDidMount() {
    this.loadFontAsync();
    await this.getFetchedWeather();
  }

  render() {
    if (this.state.report.list === null || this.state.report.detail === null) {
      return <ActivityIndicator color="red" size="large" style={{ flex: 1 }} />;
    }
    if (this.state.fontsLoaded) {
      return (
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <Header
              data={[this.state.report.list[0], this.state.report.detail]}
            />
            <Content data={this.state.report.list} />
            <Footer data={this.state.report.list[0]} />

            <StatusBar style="auto" />
          </SafeAreaView>
        </ScrollView>
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

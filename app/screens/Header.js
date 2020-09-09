import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Weather Forecast</Text>
        <Image
          source={{
            uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.data[0].weather[0].icon}.png`,
          }}
          style={styles.image}
        />
        <Text style={styles.temp}>
          {Math.ceil(this.props.data[0].main.temp)}
        </Text>
        <Text style={styles.city}>
          {this.props.data[1].name}, {this.props.data[1].country}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    // marginVertical: 1,
  },
  temp: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 32,
    textAlign: "center",
  },
  city: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
});

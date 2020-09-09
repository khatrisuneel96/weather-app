import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Card extends Component {
  render() {
    const time = this.props.data.dt_txt;
    const temp = this.props.data.main.temp;
    const img = `https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`;

    return (
      <View style={{ ...styles.card, backgroundColor: this.props.bgColor }}>
        <View
          style={{
            ...styles.bgCard,
            backgroundColor: this.props.color1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            ...this.props.style,
          }}
        >
          <Text style={styles.text}>18</Text>
          <Image
            source={{
              uri: img,
            }}
            style={styles.img}
          />
        </View>
        <View
          style={{
            ...styles.bgCard,
            justifyContent: "flex-end",
            zIndex: -1,
            elevation: -1,
            backgroundColor: this.props.color2,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            ...this.props.style,
          }}
        >
          <Text style={styles.text}>{Math.ceil(temp)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  bgCard: {
    width: 98,
    height: 100,
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 15,
  },
  text: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 20,
    color: "#fff",
    marginVertical: 15,
  },
});

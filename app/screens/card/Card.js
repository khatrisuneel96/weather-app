import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Card extends Component {
  render() {
    return (
      <View style={{ ...styles.card, backgroundColor: this.props.bgColor }}>
        <View
          style={{
            ...styles.bgCard,
            backgroundColor: this.props.color1,
            borderBottomRightRadius: this.props.radiusRight,
          }}
        >
          <Text style={styles.text}>18:00</Text>
          <Image
            source={require("../../assets/raining.png")}
            style={styles.img}
          />
        </View>
        <View
          style={{
            ...styles.bgCard,
            justifyContent: "flex-end",
            zIndex: -1,
            backgroundColor: this.props.color2,
            borderTopLeftRadius: this.props.radiusLeft,
          }}
        >
          <Text style={styles.text}>12</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 10,
  },
  bgCard: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 15,
    zIndex: 99,
  },
  text: {
    fontFamily: "Century-Gothic-Bold",
    fontSize: 20,
    color: "#fff",
    marginVertical: 15,
  },
  //   card1: {
  //     backgroundColor: "orange",
  //     // justifyContent: "flex-start",
  //   },
  //   card2: {
  //     backgroundColor: "pink",
  //     zIndex: -1,
  //     justifyContent: "flex-end",
  //   },
});

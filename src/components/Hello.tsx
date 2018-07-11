import React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Props {
  message: string;
}

class Hello extends Component<Props> {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

export default Hello;

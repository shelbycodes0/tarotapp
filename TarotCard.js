import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TarotCard = ({ results }) => {
  return (
    <View>
      <Text>{results.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default TarotCard;

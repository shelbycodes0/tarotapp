import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Spacer}></Text>
      <Text style={styles.text}>Daily Tarot</Text>
      <Text style={styles.ball}>
        <MaterialCommunityIcons name="crystal-ball" size={45} color="black" />
      </Text>
      <Text style={styles.header}>What is today's energy?</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Daily")}
        title="Daily Tarot Card"
        style={styles.pressMe}
      >
        <Text style={styles.text}>Pull a Card</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../imgs/suneyes.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede5dc",
  },
  image: {
    width: 380,
    height: 400,
  },
  pressMe: {
    marginTop: 120,
    marginBottom: 48,
    borderColor: "black",
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
  header: {
    fontSize: 22,
  },
  ball: {
    marginTop: 50,
  },
  Spacer: {
    marginTop: 20,
  },
});

export default HomeScreen;

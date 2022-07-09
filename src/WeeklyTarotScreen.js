import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Spacer}></Text>
      <Text style={styles.header}>Today's Energy:</Text>

      <Image
        source={require("../imgs/energy.jpg")}
        style={styles.image}
        resizeMode="contain"
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
    backgroundColor: "#C6DCEE",
  },
  Spacer: {
    marginTop: 20,
  },
  header: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  image: {
    width: 390,
    height: 400,
  },
  card: {
    width: 200,
    height: 400,
  },
});

export default ComponentsScreen;

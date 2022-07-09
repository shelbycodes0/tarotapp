import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TarotCard from "../TarotCard";
import axios from "axios";
const baseUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1";

const DailyTarotScreen = () => {
  let [results, setResults] = useState("");
  async function send() {
    try {
      axios.get(baseUrl).then((response) => {
        setResults(response.data.cards[0]);
      });
    } catch (err) {
      return null;
    }
  }

  useEffect(() => {
    send();
  }, []);

  return (
    <View>
      <TarotCard results={results} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DailyTarotScreen;

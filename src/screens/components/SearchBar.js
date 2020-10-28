import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Directions } from "react-native-gesture-handler";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} color="black" />
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
});
export default SearchBar;

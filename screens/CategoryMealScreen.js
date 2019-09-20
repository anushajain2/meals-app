import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = props => {
  const catKey = props.navigation.getParam("categoryKey");
  const selectedCategory = CATEGORIES.find(catKey);

  return (
    <View style={styles.screen}>
      <Text> The CategoryMealScreen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;

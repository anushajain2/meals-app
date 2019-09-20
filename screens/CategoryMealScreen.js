import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  StyleSheet
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = props => {
  const catKey = props.navigation.getParam("categoryKey");
  const selectedCategory = CATEGORIES.find(cat => catKey === cat.key);

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

CategoryMealScreen.navigationOptions = navigationData => {
  const catKey = navigationData.navigation.getParam("categoryKey");
  const selectedCategory = CATEGORIES.find(cat => catKey === cat.key);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;

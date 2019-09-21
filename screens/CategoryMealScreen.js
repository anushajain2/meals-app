import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  FlatList,
  StyleSheet
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = props => {
  const catKey = props.navigation.getParam("categoryKey");
  const selectedMeals = MEALS.filter(
    meal => meal.categoryKeys.indexOf(catKey) >= 0
  );

  const renderMealItem = itemData => {
    <View>
      <Text> {itemData.item.title}</Text>
    </View>;
  };

  return (
    <View style={styles.screen}>
      <FlatList data={selectedMeals} renderItem={renderMealItem} />

      {/* <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      /> */}
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

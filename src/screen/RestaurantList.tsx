import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../data/data";
import RenderItem from "../components/RenderItem";

const RestaurantList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        <Text style={{ color: "orange" }}>P</Text>opular{" "}
        <Text style={{ color: "orange" }}>R</Text>estaurants
      </Text>
      <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
        {/* First Column datasets */}
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return <RenderItem item={item} index={index} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  text: {
    fontSize: 28,
    margin: 15,
    marginHorizontal: 20,
    color: "#323232",
    fontWeight: "900",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

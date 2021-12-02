import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.icon}>
        <Ionicons
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
});

export default HeaderButton;

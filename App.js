import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducer";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  kits: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

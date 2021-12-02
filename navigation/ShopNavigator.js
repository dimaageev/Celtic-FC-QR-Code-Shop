import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScannerScreen from "../screens/ScannerScreen";
import ScannedProductScreen from "../screens/ScannedProductScreen";
import AllProductsScreen from "../screens/AllProductsScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

const NativeStack = createNativeStackNavigator();

const ScannerNavigator = () => {
  return (
    <NativeStack.Navigator screenOptions={defaultStackNavOptions}>
      <NativeStack.Screen name="Scanner" component={ScannerScreen} />
      <NativeStack.Screen
        name="ScannedProduct"
        component={ScannedProductScreen}
      />
    </NativeStack.Navigator>
  );
};

const defaultDrawerNavOptions = {
  drawerActiveBackgroundColor: Colors.primary,
  drawerActiveTintColor: "white",
  drawerContentStyle: {
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ ...defaultStackNavOptions, ...defaultDrawerNavOptions }}
    >
      <Drawer.Screen
        name="Home"
        component={ScannerNavigator}
        options={{
          headerShown: false,
          drawerIcon: (config) => (
            <Ionicons name="ios-home-sharp" size={25} color={config.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Catalog"
        component={AllProductsScreen}
        options={{
          drawerIcon: (config) => (
            <Ionicons name="ios-qr-code-sharp" size={25} color={config.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;

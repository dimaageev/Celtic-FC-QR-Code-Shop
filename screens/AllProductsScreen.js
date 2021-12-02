import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import QRCode from "react-native-qrcode-svg";
import { useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.codeContainer}>
        <QRCode value={props.id} size={200} />
      </View>
    </View>
  );
};

const AllProductsScreen = (props) => {
  const products = useSelector((state) => state.kits.products);

  useEffect(() => {
    props.navigation.setOptions({
      title: "All products",
      headerLeft: () => (
        <View style={styles.menuButton}>
          <HeaderButton
            iconName="ios-menu"
            iconSize={25}
            iconColor="white"
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        </View>
      ),
    });
  }, [props.navigation]);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem title={itemData.item.title} id={itemData.item.id} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 15,
  },
  product: {
    height: 350,
    justifyContent: "flex-start",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    padding: 10,
    height: 50,
    margin: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  codeContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
});

export default AllProductsScreen;

import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

const ScannedProductScreen = (props) => {
  const scannedValue = props.route.params.scannedValue;
  console.log(scannedValue);

  const scannedProduct = useSelector((state) =>
    state.kits.products.find((prod) => prod.id === scannedValue)
  );

  useEffect(() => {
    props.navigation.setOptions({
      title: "",
    });
  }, [props.navigation]);

  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: scannedProduct?.imageUri,
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{scannedProduct?.title}</Text>
        <Text style={styles.price}>{scannedProduct?.price}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <ScrollView>
          {!scannedProduct && (
            <Text
              style={{ textAlign: "center", fontSize: 30 }}
            >{`Product with value: "${scannedValue}" doesn't exist`}</Text>
          )}
          <Text style={styles.description}>{scannedProduct?.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: "95%",
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: 80,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 2,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: Colors.accent,
  },
  descriptionContainer: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    borderRadius: 10,
    backgroundColor: Colors.primaryOpacity,
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: Colors.accent,
  },
});

export default ScannedProductScreen;

import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from "react-native";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { Camera } from "expo-camera";

const ScannerScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [opennedCamera, setOpennedCamera] = useState(false);

  useEffect(() => {
    props.navigation.setOptions({
      title: "Celtic FC Shop ⚽️",
      headerLeft: () => (
        <View>
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

  useEffect(() => {
    (async () => {
      const result = await Camera.requestCameraPermissionsAsync();
      setHasPermission(result.status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    props.navigation.navigate("ScannedProduct", { scannedValue: data });
    setOpennedCamera(false);
  };

  if (!hasPermission) {
    <ActivityIndicator size="large" color={Colors.primary} />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Open this App in Web, open Drawer and go to Catalog to scan QR Code
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Button
            title={"Tap to Scan QR Code"}
            color={Colors.primary}
            onPress={() => setOpennedCamera(true)}
          />
        </View>
        {!opennedCamera ? (
          <View style={styles.cameraPlaceholder}>
            <Text style={{ fontSize: 20 }}>Camera will open here</Text>
          </View>
        ) : Platform.OS === "web" ? (
          <Text style={{ fontSize: 20 }}>Camera is not supported in web</Text>
        ) : (
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={handleBarCodeScanned}
          ></Camera>
        )}
        {/* {scanned && (
          <View style={styles.container}>
            <Button
              title={"Tap to Scan Again"}
              color={Colors.primary}
              onPress={() => setScanned(false)}
            />
          </View>
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    margin: 15,
  },
  textContainer: {
    width: "95%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 25,
  },
  cameraPlaceholder: {
    width: 300,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  camera: {
    width: 300,
    height: 400,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

export default ScannerScreen;

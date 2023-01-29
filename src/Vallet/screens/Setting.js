import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Setting() {
  const [loaded, setloaded] = useState(false);
  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../../assets/CircularStd.ttf"),
      "CircularStd-Bold": require("../../../assets/CircularStd-Bold.otf"),
      Montserrat: require("../../../assets/Montserrat.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loaded ? <Text style={styles.text1}>Issue</Text> : ""}
      <View style={styles.greyline}></View>
      <TouchableOpacity style={styles.buttoncontainer}>
        <View>
          <AntDesign
            name="bells"
            size={24}
            color="#94A1B2"
            style={{ marginLeft: 20 }}
          />
          {loaded ? <Text style={styles.text2}>Notification</Text> : ""}
          <Ionicons
            name="chevron-forward"
            size={24}
            color="#94A1B2"
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              right: 20,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoncontainer}>
        <View>
          <MaterialCommunityIcons
            name="file-edit-outline"
            size={24}
            color="#94A1B2"
            style={{ marginLeft: 20 }}
          />
          {loaded ? <Text style={styles.text2}>Write To Us</Text> : ""}
          <Ionicons
            name="chevron-forward"
            size={24}
            color="#94A1B2"
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              right: 20,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoncontainer}>
        <View>
          <FontAwesome
            name="file-text-o"
            size={22}
            color="#94A1B2"
            style={{ marginLeft: 20 }}
          />
          {loaded ? <Text style={styles.text2}>Terms & Conditions</Text> : ""}
          <Ionicons
            name="chevron-forward"
            size={24}
            color="#94A1B2"
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              right: 20,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoncontainer}>
        <View>
          <MaterialCommunityIcons
            name="file-lock-outline"
            size={24}
            color="#94A1B2"
            style={{ marginLeft: 20 }}
          />

          {loaded ? <Text style={styles.text2}>Privacy Policy</Text> : ""}
          <Ionicons
            name="chevron-forward"
            size={24}
            color="#94A1B2"
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              right: 20,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoncontainer}>
        <View>
          <AntDesign
            name="exclamationcircleo"
            size={22}
            color="#94A1B2"
            style={{ marginLeft: 20 }}
          />
          {loaded ? <Text style={styles.text2}>About Us</Text> : ""}
          <Ionicons
            name="chevron-forward"
            size={24}
            color="#94A1B2"
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              right: 20,
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.redbutton}>
        <View>
          <Ionicons
            name="power-outline"
            size={22}
            color="red"
            style={{ marginLeft: 20 }}
          />
          {loaded ? <Text style={styles.text2}>Sign Out</Text> : ""}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  text1: {
    fontFamily: "CircularStd",
    fontSize: 16,
    marginTop: 60,
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 20,
  },
  buttoncontainer: {
    width: "90%",
    height: 60,
    display: "flex",
    justifyContent: "center",

    borderRadius: 12,
    backgroundColor: "white",

    elevation: 1,
    marginTop: 30,
  },
  text2: {
    fontFamily: "CircularStd",
    fontSize: 14,
    position: "absolute",
    marginLeft: 60,
  },
  redbutton: {
    width: "90%",
    height: 60,
    display: "flex",
    justifyContent: "center",

    borderRadius: 12,
    backgroundColor: "#FFCCCB",

    marginTop: 30,
  },
});

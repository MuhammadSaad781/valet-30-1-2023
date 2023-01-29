import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import Back from "../../Svgs/Back";
import { AntDesign } from "@expo/vector-icons";

export default function ReportSuccessfull() {
  const navigation = useNavigation();
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
      <View style={styles.parent}>
        <View>
          <ImageBackground
            source={require("../../../assets/Shapes.png")}
            style={styles.dust}
          >
            <View style={styles.nav}>
              <TouchableOpacity>
                <View>
                  <Entypo
                    name="cross"
                    size={25}
                    color="white"
                    style={{
                      left: 20,
                      alignSelf: "center",
                      position: "absolute",
                    }}
                    onPress={() => navigation.navigate("Incident")}
                  />
                </View>
              </TouchableOpacity>
              {loaded ? <Text style={styles.text1}>Incident Report</Text> : ""}
            </View>
            <View style={styles.line}></View>
            <View style={styles.whitebox}>
              <View style={styles.camerabox}>
                <View style={styles.greencircle}>
                  <MaterialIcons
                    name="done"
                    size={24}
                    color="white"
                    style={{ alignSelf: "center" }}
                  />
                </View>
              </View>
              {loaded ? (
                <Text style={styles.text4}>Incident Report Created</Text>
              ) : (
                ""
              )}
              {loaded ? (
                <Text style={styles.text3}>
                  You have successfully created the incident report
                </Text>
              ) : (
                ""
              )}
            </View>
          </ImageBackground>
        </View>
        <View style={styles.viewreport}>
          <View
            style={{
              width: 58,
              height: 58,
              backgroundColor: "rgba(36, 107, 253,0.1)",
              borderRadius: 8,
            }}
          ></View>
          <View>
            <Text></Text>
            <Text></Text>
          </View>
          <View></View>
        </View>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <ImageBackground
            source={require("../../../assets/Shapes.png")}
            style={styles.dust}
          >
            <View style={{ display: "flex" }}>
              <TouchableOpacity
                style={styles.getstarted}
                onPress={() => navigation.navigate("LandingPage")}
              >
                {loaded ? (
                  <Text style={styles.getstartedtext}>Back to Home</Text>
                ) : (
                  ""
                )}
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#246BFD",
  },
  nav: {
    display: "flex",
    marginTop: 60,
  },
  text1: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 16,
    marginRight: 10,
    color: "white",
  },

  dust: {
    width: 420,
    height: 420,
    resizeMode: "contain",
    display: "flex",
    justifyContent: "center",
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 30,
  },
  whitebox: {
    display: "flex",
    height: 300,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  camerabox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 181,
    height: 112,

    backgroundColor: "rgba(39, 174, 96, 0.1)",
    alignSelf: "center",
    borderRadius: 24,

    marginTop: 12,
  },

  text3: {
    fontSize: 14,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 10,
  },

  text4: {
    fontSize: 16,
    fontFamily: "CircularStd-Bold",
    color: "black",
    marginTop: 10,
  },
  greencircle: {
    width: 52,
    height: 52,
    backgroundColor: "#27AE60",
    borderRadius: 52,
    display: "flex",
    justifyContent: "center",
  },
  getstarted: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,

    alignSelf: "center",
  },
  getstartedtext: {
    color: "#246BFD",
    fontFamily: "CircularStd",
    fontSize: 14,
  },
  viewreport: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    height: 80,
    justifyContent: "center",
    marginTop: 30,

    left: 3,
    alignSelf: "center",
  },
});

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import campusLogo from "../assets/campus-logo.png";
import thirdLogo from "../assets/thirdLogo.png";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "#FFFFFF" }}>
          <View style={styles.home}>
            <TouchableOpacity
              style={{
                width: 200,
                marginHorizontal: 40,
                marginTop: 50,
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 20,
                backgroundColor: "#F9F0FF",
              }}
            >
              <Text style={{ color: "#722ED1" }}>
                v1.0 release.
                <Text
                  style={{
                    textDecorationLine: "underline",
                  }}
                >
                  Learn more
                </Text>
              </Text>
            </TouchableOpacity>
            <View style={styles.topHeader}>
              <Text style={styles.tag}>
                Quezon City University {"\n"}
                <Text style={styles.subtag}>
                  {"\n"}
                  Quezon City Tagline or Description place here
                  {"\n"}
                </Text>
                {"\n"}
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={styles.buttonViolet}>
                    <Button title="Enroll Now" color={"#FFFFFF"} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonWhite}>
                    <Button title="Learn More" color={"#000000"} />
                  </TouchableOpacity>
                </View>
              </Text>
              <Image source={campusLogo} style={styles.logo}></Image>
            </View>
          </View>
          <View style={styles.second}>
            <TouchableOpacity style={styles.insight}>
              <Text style={{ color: "#722ED1" }}>Why QCU</Text>
            </TouchableOpacity>
            <View style={{ alignSelf: "center", marginVertical: 15 }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                    top: 15,
                  }}
                >
                  Get actionable insights from {"\n"}
                  <Text style={{ textAlign: "center" }}>
                    Big Data in 3 steps
                  </Text>
                </Text>
              </TouchableOpacity>
              <Text
                style={{ marginHorizontal: 50, textAlign: "center", top: 50 }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt.
              </Text>
            </View>
            <View style={styles.threeRow}>
              <Text style={styles.rowBox}>
                <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                  Data in real-time
                </Text>
                {"\n"}
                {"\n"}
                <Text>
                  Collect data in real-time from multiple channels and move it
                  into a data lake, in its original format.
                </Text>
              </Text>
              <Text style={styles.rowBox}>
                <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                  {" "}
                  Secured Data
                </Text>
                {"\n"}
                {"\n"}
                <Text>
                  With the help of powerful algorithms, quality rules &
                  techniques, obtain simplified & enriched data.
                </Text>
              </Text>
              <Text style={styles.rowBox}>
                <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                  {" "}
                  Data Analytics
                </Text>
                {"\n"}
                {"\n"}
                <Text>
                  Collect processed & cleansed data that is ready to be analyzed
                  to gather valuable business insights.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.third}>
            <View style={styles.twoRows}>
             
             
            </View>
          </View>
          <View style={styles.fourth}></View>
          <View style={styles.last}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    height: 350,
    width: "100%",
    backgroundColor: "#E2F1FF",
  },
  tag: {
    fontSize: "30",
    fontWeight: "bold",
    marginHorizontal: 40,
    marginVertical: 30,
    width: 180,
  },
  subtag: {
    fontSize: 10,
  },
  topHeader: {
    flexDirection: "row",
  },
  logo: {
    right: 25,
    width: 150,
    height: 150,
  },
  buttonViolet: {
    backgroundColor: "#722ED1",
    borderRadius: "24",
    paddingHorizontal: 10,
  },
  buttonWhite: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24",
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  second: {
    height: 350,
    width: "100%",
    marginVertical: 20,
    textAlign: "center",
  },
  insight: {
    width: 105,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignSelf: "center",
    backgroundColor: "#F9F0FF",
  },
  threeRow: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  rowBox: {
    fontSize: 12,
    width: "32.5%",
    textAlign: "center",
    top: 80,
  },
  third: {
    height: 350,
    width: "100%",
    backgroundColor: "#E2F1FF",
  },
  fourth: {
    height: 350,
    width: "100%",
  },
  last: {
    height: 350,
    width: "100%",
    backgroundColor: "#E2F1FF",
  },
  twoRows: {
    flexDirection: "row",
    marginHorizontal: 10,
    width: "50%",
    textAlign: "center",
  },
});

export default Home;

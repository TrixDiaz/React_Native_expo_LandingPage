import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import campusLogo from '../assets/campus-logo.png';


const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
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
            <Text style={styles.tag}>Quezon City University</Text>
            <Image source={campusLogo} style={styles.logo}></Image>
          </View>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    height: 500,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#E2F1FF",
  },
  tag: {
    fontSize: "30",
    fontWeight: "bold",
    marginHorizontal: 40,
    marginVertical: 30,
    width: 180,
  },
  topHeader: {
    flexDirection: "row",
  },
  logo: {
    right: 25,
    width: 150,
    height: 150,
  },
});

export default Home;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";


const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.home}>
          <TouchableOpacity
            style={{
              width: 200,
              marginHorizontal: 20,
              marginTop: 50,
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
    backgroundColor: "linear-gradient(to bottom, #00c6fb, #005bea)",
  },
});

export default Home;

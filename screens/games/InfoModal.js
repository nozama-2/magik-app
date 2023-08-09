import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { t } from "react-native-tailwindcss";
import { COLORS } from "../../constants";
import BackButton from "./components/BackButton";
import Spacer from "./components/Spacer";

function InfoModal({ route, navigation }) {
  const { name, info } = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
    >
      <View style={styles.modalContainer}>
        <View
          style={[
            t.flex,
            t.flexRow,
            t.justifyBetween,
            t.mT8,
            t.mL6,
            t.z10,
            { alignItems: "center" },
          ]}
        >
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={[t.textGray800, styles.header]}>{name} Info</Text>
          <Spacer />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.infoParagraph}>{info}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingBottom: 150,
  },
  header: {
    fontFamily: "Poppins-Bold",
    fontWeight: 800,
    fontSize: 26,
  },
  infoParagraph: {
    fontFamily: "Poppins-Regular",
    margin: 25,
    fontSize: 16,
  },
});

export default InfoModal;

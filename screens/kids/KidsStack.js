import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Animated,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import KidsScreen from "./KidsScreen";
import AddKidScreen from "./components/AddKidModal";

import { useDispatch } from "react-redux";

const Kids = createStackNavigator();

const KidsStack = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Add kid") {
      dispatch({ type: "disableBottomTabs" });
    } else {
      dispatch({ type: "enableBottomTabs" });
    }
  }, [route, navigation]);

  return (
    <Kids.Navigator screenOptions={{ headerShown: false }}>
      <Kids.Group>
        <Kids.Screen name="Kids" component={KidsScreen} />
      </Kids.Group>
      <Kids.Group
        screenOptions={{
          presentation: "modal",
          gestureResponseDistance: 1000, // default is 135
          cardStyle: {
            backgroundColor: "white",
            opacity: 0.99,
          },
        }}
      >
        <Kids.Screen name="Add kid" component={AddKidScreen} />
      </Kids.Group>
    </Kids.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default KidsStack;

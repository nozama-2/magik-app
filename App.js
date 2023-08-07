import React, { useState, useEffect } from 'react';
import { LogBox } from "react-native";

import * as Font from "expo-font";

import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { NativeBaseProvider } from 'native-base';
import { useColorScheme } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';

import { connect, Provider, useStore } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  const [isLoaded, setIsLoaded] = useState(false);
  
    const loadFonts = async () => {
        await Font.loadAsync({
            "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
            "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
            "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        });
        setIsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, [])

  if (!(isLoadingComplete)) {
    return null;
  } else {
    return (
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      // </SafeAreaProvider>

        <NativeBaseProvider>
            <NavigationContainer>
                <Provider store={store}>
                    <RootStack />
                </Provider>
            </NavigationContainer>
        </NativeBaseProvider>
    );
  }
}

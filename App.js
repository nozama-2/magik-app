import React, { useState, useEffect, useCallback } from "react";
import { LogBox, View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { NativeBaseProvider } from "native-base";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";

import { connect, Provider, useStore } from "react-redux";
import { store } from "./redux/store";

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

const LinearGradient = require("expo-linear-gradient").LinearGradient;

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
          "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
          "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
          Collegiate: require("./assets/fonts/Collegiate.ttf"),
        });
        await Font.loadAsync(Ionicons.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        // if (isLoadingComplete) {
        setAppIsReady(true);
        // }
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Provider store={store}>
          {/* <Text>hi</Text> */}
          <RootStack onLayoutRootView={onLayoutRootView} />
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>

    // <View
    // style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    //   onLayout={onLayoutRootView}
    // >
    //   <Text>SplashScreen Demo! 👋</Text>
    // </View>
  );
}

// import React, { useState, useEffect, useCallback } from "react";
// import { LogBox, View, Text } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";

// import "react-native-gesture-handler";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { useLoadedAssets } from "./hooks/useLoadedAssets";
// import { NativeBaseProvider } from "native-base";
// import { useColorScheme } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import RootStack from "./screens/RootStack";

// import { connect, Provider, useStore } from "react-redux";
// import { store } from "./redux/store";

// LogBox.ignoreAllLogs();
// SplashScreen.preventAutoHideAsync();

// const LinearGradient = require("expo-linear-gradient").LinearGradient;

// const config = {
//   dependencies: {
//     "linear-gradient": LinearGradient,
//   },
// };

// export default function App() {
// const isLoadingComplete = useLoadedAssets();
//   const colorScheme = useColorScheme();

//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync({
//           "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
//           "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
//           "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
//           "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
//           Collegiate: require("./assets/fonts/Collegiate.ttf"),
//         });
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         console.log("render");
//         setIsLoaded(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (isLoaded) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       console.log(isLoaded, isLoadingComplete);
//       await SplashScreen.hideAsync();
//     }
//   }, [isLoaded]);

//   if (!isLoaded) {
//     return null;
//   }

//   return (
//     // <SafeAreaProvider>
//     //   <Navigation colorScheme={colorScheme} />
//     // </SafeAreaProvider>

//     <View
//       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//       onLayout={onLayoutRootView}
//     >
//       <Text>SplashScreen Demo! 👋</Text>
//       {/* <Entypo name="rocket" size={30} /> */}
//     </View>

// <NativeBaseProvider config={config} onLayout={onLayoutRootView}>
//   <NavigationContainer>
//     <Provider store={store}>
//       <RootStack />
//     </Provider>
//   </NavigationContainer>
// </NativeBaseProvider>
//   );
// }

import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabStack from "./tab/TabStack";

const Root = createStackNavigator();

const RootStack = () => {

    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
                <Root.Screen style={{zIndex: 999}} name="Tab" component={TabStack} />
        </Root.Navigator>
    )
}

export default RootStack;

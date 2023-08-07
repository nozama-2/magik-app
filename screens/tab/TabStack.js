import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import HomeStack from '../home/HomeStack';
import GamesStack from '../games/GamesStack';
import KidsStack from '../kids/KidsStack';
import ProfileStack from '../profile/ProfileStack';

import Tab from './components/Tab'
import { icons } from '../../constants';
import { shallowEqual, connect, useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator();


const TabStack = () => {
  let bottomTabsActive = useSelector((state) => state.bottomTabsActive, shallowEqual)

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: bottomTabsActive ? 'flex' : 'none',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 100,
          height: 70,
          ...styles.shadow
        }
    }}
    >
        <BottomTab.Screen name="Home" component={HomeStack} options={{
            tabBarIcon: ({focused}) => <Tab focused={focused} size={25} unfocused_icon={icons.homeIconUnfilled} focused_icon={icons.homeIconFilled} />
          }}
        />
        <BottomTab.Screen name="Games" component={GamesStack} options={{
            tabBarIcon: ({focused}) => <Tab focused={focused} size={25} unfocused_icon={icons.gamesIconUnfilled} focused_icon={icons.gamesIconFilled} />
          }}
        />
        <BottomTab.Screen name="Kids" component={KidsStack} options={{
            tabBarIcon: ({focused}) => <Tab focused={focused} size={35} unfocused_icon={icons.kidsIconUnfilled} focused_icon={icons.kidsIconFilled} />
          }}
        />
        <BottomTab.Screen name="Profile" component={ProfileStack}
        options={{
            tabBarIcon: ({focused}) => <Tab focused={focused} size={20} unfocused_icon={icons.profileIconUnfilled} focused_icon={icons.profileIconFilled} />
          }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  tabIcon: {
    display: 'flex',
    justifyContent: "center"
  }
})

const mapStateToProps = (state) => {
  let { bottomTabActive } = state;
  return {
    bottomTabActive,
  };
};

export default connect(mapStateToProps)(TabStack);
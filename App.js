import React from "react";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import { StyleSheet, Image } from "react-native";
import configureStore from "./src/redux/createStore";
import {
  HomeScreen,
  DiscoverScreen,
  UserScreen,
  ConsultationScreen,
} from "./src/screens";




const HomeIcon = require("./assets/home.png");
const DiscoverIcon = require("./assets/discover.png");
const UserIcon = require("./assets/user.png");
const ConsoleIcon = require("./assets/consultation.png");
// const ReadIcon = require("./assets/read.png");


const styles = StyleSheet.create({
  homeIcon: {
    width: 24, height: 24,
  },
  DiscoverIcon: { width: 24, height: 24 },
  ConsoleIcon: { width: 24, height: 24 },
  UserIcon: { width: 24, height: 24 },
});

const HomeStack = createStackNavigator({ HomeScreen });
HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: () => (
    <Image
      source={HomeIcon}
      style={styles.homeIcon}
    />
  ),
};

const DiscoverStack = createStackNavigator({ DiscoverScreen });
DiscoverStack.navigationOptions = {
  tabBarLabel: "Discover",
  tabBarIcon: () => (
    <Image
      source={DiscoverIcon}
      style={styles.DiscoverIcon}
    />
  ),
};

const ConsoleStack = createStackNavigator({ ConsultationScreen });
ConsoleStack.navigationOptions = {
  tabBarLabel: "Console",
  tabBarIcon: () => (
    <Image
      source={ConsoleIcon}
      style={styles.ConsoleIcon}
    />
  ),
};

const UserStack = createStackNavigator({ UserScreen });
UserStack.navigationOptions = {
  tabBarLabel: "Me",
  tabBarIcon: () => (
    <Image
      source={UserIcon}
      style={styles.UserIcon}
    />
  ),
};


const MainTabNavigator = createBottomTabNavigator({
  HomeScreen: HomeStack,
  DiscoverScreen: DiscoverStack,
  Consoletation: ConsoleStack,
  User: UserStack,

});

MainTabNavigator.navigationOptions = {
  header: null,
};

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainTabNavigator />
      </Provider>
    );
  }
}

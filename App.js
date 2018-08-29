import React from "react";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import * as firebase from 'firebase'; 

import { StyleSheet, Image } from "react-native";
import configureStore from "./src/redux/createStore";
import {
  HomeScreen,
  DiscoverScreen,
  UserScreen,
  ConsultationScreen,
} from "./src/screens";


var config = {
  apiKey: "AIzaSyC7q-HFlm8htUGUxzfzp-klFVjdWx4ZiSA",
  authDomain: "lightway-71163.firebaseapp.com",
  databaseURL: "https://lightway-71163.firebaseio.com",
  projectId: "lightway-71163",
  storageBucket: "lightway-71163.appspot.com",
  messagingSenderId: "847060893270"
};
firebase.initializeApp(config);


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
  User: UserStack,
  DiscoverScreen: DiscoverStack,
  HomeScreen: HomeStack,
  Consoletation: ConsoleStack,

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

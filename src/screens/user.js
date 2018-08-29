import React from "react";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";
import UserAccount from "../components/profile/profile"; 
import UserDataContainer from "../components/user-data/container"; 

import { StyleSheet, View } from "react-native";

class UserScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      height: 5,
    },
  };
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userAccount}>
          <UserAccount />
        </View>
        <UserDataContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    
  },
  userAccount: {
    height: 77,
  }
});


export default UserScreen; 
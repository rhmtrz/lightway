import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import {
  StyleSheet, View,
} from "react-native";


const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  userAccount: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 3,
  },
  name: {
    marginLeft: 10,
  },
  qrCode: {
    marginLeft: "auto",
  },
  qrCodeImg: {
    width: 40,
    height: 33,
  },
});

class LikedComponent extends React.Component {
  render() {
    return (
      <View style={styles.userAccount}>
        this is login page
      </View>
    );
  }
}

export default LikedComponent;

import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import {
  StyleSheet, View, Text
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
});

class LikedComponent extends React.Component {
  render() {
    return (
      <View style={styles.userAccount}>
        <Text>this is like page</Text>
      </View>
    );
  }
}

export default LikedComponent;

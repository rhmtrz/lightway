import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

import {
  StyleSheet, Text, View, Image,
} from "react-native";

const UserIcon = require("../../../assets/user.png");


const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  container: {
    flex: 1,
  },
  userAccount: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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

class BookmarkedComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is the Bookmarked page ...
        </Text>
        <View style={styles.userAccount}>
          <View>
            <Image
              source={UserIcon}
              style={styles.photo}
            />
          </View>
          <View style={styles.name}>
            <Text>
              My name is ...
            </Text>
            <Text>
              My ID is ...
            </Text>
          </View>
          <View style={styles.qrCode}>
            <Image
              source={UserIcon}
              style={styles.qrCodeImg}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default BookmarkedComponent;

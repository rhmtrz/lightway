import React from "react";
import { connect } from "react-redux";
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
  userAccount: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",

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

class UserAccount extends React.Component {
  render() {
    return (
      <View style={styles.userAccount}>
        <View>
          <Image
            source={photoURL}
            style={styles.photo}
          />
        </View>
        <View style={styles.name}>
          <Text>{displayName}</Text>
          <Text>
            ID is ...
          </Text>
        </View>
        <View style={styles.qrCode}>
          <Text>QR Code</Text>
          <Image
            source={UserIcon}
            style={styles.qrCodeImg}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {  displayName, photoURL } = state.pageData;
  return {
    displayName,
    photoURL,
  };
};

export default connect(mapStateToProps, null)(UserAccount);

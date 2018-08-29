import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Expo from "expo"; 
import firebase from 'firebase'; 

import {
  StyleSheet, View,  Button, Text, Image,
} from "react-native";


const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  userAccount: {
    flex: 1,
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

const UserIcon = require("../../../assets/user.png");

class LoginByFacebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture: UserIcon,
    };
  }

  async logInFB() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync("1120426761438088", {
      permissions: ["public_profile", 'email', 'user_friends'],
    });
    if (type === "success") {
      const { picture, name } = await response.json();
      console.log("Nammmmm...", name);
      
      this.setState({
        picture, name
      });
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,picture.type(large)`,
      );
      alert(
        "Logged in!",
        `Hi ${(await response.json()).name}!`,
      );

      try {
        await firebase.auth().signInWithCredential(token)
      } catch(error) {
        console.log(error);
      }
    } else {
      alert(
        type
      );
    }
  }

  render() {
    const { picture, name } = this.state; 
    return (
      <View style={styles.userAccount}>
        <Text>
          {name}
        </Text>
        <Image
          source={picture}
          style={styles.qrCodeImg}
        />
        <Button
          onPress={this.logInFB.bind(this)}
          title="Login By Facebook"
        />
      </View>
    );
  }
}

export default LoginByFacebook;

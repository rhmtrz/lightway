import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Expo from "expo"; 
import * as firebase from 'firebase'; 

import {
  StyleSheet, View,  Button, Text, Image, Label, TextInput,
} from "react-native";

import { LoginManager, AccessToken } from 'react-native-fbsdk'; 

const FBSDK = require('react-native-fbsdk');
const { GraphRequest, GraphRequestManager } = FBSDK; 


const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  userAccount: {
    flex: 1,
    flexDirection: "column",
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


class LoginByFacebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.signUpUser = (email, password) => {
      try {
        if (this.state.password.length < 6) {
          alert("Please enter atleast 6 characters")
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
      }
      catch (error) {
        alert(error.toString())
      }
    }

    this.loginUser = (email, password) => {
      try {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        })
      }
      catch (error) {
        alert(error.toString())
      }
    }
  }

  async loginWithFB() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync("1120426761438088", {
      permissions: ["public_profile", 'email', 'user_friends'],
    });
    if (type === "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token) 

      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        console.log(error)
      })
    } else {
      alert(
        type
      );
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) =>{
      if (user != null) {
        console.log(user);        
      }
    })
  }

  render() {
    const { email, password } = this.state; 
    return (
      <View style={styles.userAccount}>
        <Text>Email</Text>
          <TextInput
            textContentType = "emailAddress"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
        />
        <Text>Password</Text>
          <TextInput
            textContentType = "password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
        />
        <Button
          onPress={() => this.loginUser(email, password)}
          title="login"
        />
        <Button
          onPress={() => this.signUpUser(email,password)}
          title="login"
        />
        <Button
          onPress={this.loginWithFB.bind(this)}
          title="Login By Facebook"
        />
      </View>
    );
  }
}

export default LoginByFacebook;

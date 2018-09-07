import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Expo from "expo";
import * as firebase from 'firebase';

import {
  StyleSheet, View,  Button, Text, Image, Label, TextInput,
} from "react-native";

import {
  initializeFirebase as _initializeFirebase,
  fbLogin as _fbLogin,
} from '../../redux/reducer/pageDataReducer';

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
});


class LoginByFacebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

  }


  componentDidMount = () => {
    const { initializeFirebase } = this.props;
    initializeFirebase();
    console.log('this is initial ',initializeFirebase);
  }


  render() {
    const { email, password } = this.state;
    const { fbLogin } = this.props;
    return (
      <View style={styles.userAccount}>
        <Button
          onPress={fbLogin}
          title="Login By Facebook"/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initializeFirebase: () => dispatch(_initializeFirebase()),
    fbLogin: () => dispatch(_fbLogin())
  }
};

export default connect(null, mapDispatchToProps)(LoginByFacebook);

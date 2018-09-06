import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  StyleSheet, View,  Button, Text, Image, Label, TextInput,
  TouchableOpacity
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
  }

  render() {
    const { email, password } = this.state;
    const { fbLogin, loading, displayName, isUserLoggedIn, photoURL } = this.props;
    return (
      <View style={styles.userAccount}>
        <TouchableOpacity
          style={styles.facebookLogin}
          onPress={fbLogin}>
          <Text>Login By Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading } = state.pageData;
  return {
    loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeFirebase: () => dispatch(_initializeFirebase()),
    fbLogin: () => dispatch(_fbLogin())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginByFacebook);

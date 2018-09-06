import React from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
import UserAccount from "../components/profile/profile";
import UserDataContainer from "../components/user-data/container";
import LoginByFacebook from "../components/login/login-fb";
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
    const { isUserLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.userAccount}>
          {isUserLoggedIn ?
            <UserAccount /> : <LoginByFacebook />}
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

const mapStateToProps = (state) => {
  const { isUserLoggedIn } = state.pageData;
  return {
    isUserLoggedIn,
  };
};

export default connect(mapStateToProps, null)(UserScreen);

import React from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
import UserAccount from "../components/profile/profile";
import UserDataContainer from "../components/user-data/container";
import Login from '../components/login/login';
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

  },
  userAccount: {
    height: 77,
  }
});

class UserScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      height: 5,
    },
  };
  constructor(props) {
    super(props);
  }
  //
  // componentDidMount = () => {
  //   const { initializeFirebase } = this.props;
  //   initializeFirebase();
  // }

  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        {/* <View style={styles.userAccount}>
          {isUserLoggedIn ?
            <Login /> : <UserAccount />}
        </View>
        <UserDataContainer /> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { isUserLoggedIn } = state.pageData;
  return {
    isUserLoggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeFirebase: () => dispatch(_initializeFirebase()),
  }
};

export default UserScreen;
//export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

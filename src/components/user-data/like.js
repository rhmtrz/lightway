import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import {
  StyleSheet, View, Text, Button
} from "react-native";

import {
  fbLogout as _fbLogout,
} from '../../redux/reducer/pageDataReducer';


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
    const { fbLogout } = this.props;
    return (
      <View style={styles.userAccount}>
        <Button
          onPress={fbLogout}
          title="Logout" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fbLogout: () => dispatch(_fbLogout())
  }
};

export default connect(null, mapDispatchToProps)(LikedComponent);

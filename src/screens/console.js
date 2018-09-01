import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  StyleSheet, Text, View, Button,
} from "react-native";
import ChatRoomComponent from '../components/console/chat'; 


class ConsultationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, countUp, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>hello fucking console</Text>
        <ChatRoomComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  const { count } = state.pageData;
  return {
    count,
  };
};

const mapDispatchToProps = dispatch => ({
  countUp: () => dispatch(countUp()),
});


ConsultationScreen.propTypes = {
  count: PropTypes.number.isRequired,
  countUp: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ConsultationScreen);

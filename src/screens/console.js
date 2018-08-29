import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  StyleSheet, Text, View, Button,
} from "react-native";
import { countUp } from "../redux/reducer/pageDataReducer";

class ConsultationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, countUp, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>this is consultation screen</Text>
        <Button
          title="Count Up"
          onPress={countUp}
        />
        <Text>{count}</Text>
        <Button
          title="Go to chat room"
          onPress={() => navigation.navigate("ChatRoom")}
        />
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

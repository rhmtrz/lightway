import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

import {
  StyleSheet, Text, View,
} from "react-native";
import LikedComponent from "./like";
import BookmarkedComponent from "./bookemark";
import StoriesComponent from "./story";


const styles = StyleSheet.create({
  photo: {
    width: 65,
    height: 55,
  },
  userAccount: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabList: {

  },
  tabItem: {
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
  },
  tabHightLighted: {
    borderBottomWidth: 3,
    borderBottomColor: "black",
  },
  pages: {
    height: "100%",
    backgroundColor: "#fff9c6",
  },
});

class UserDataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTab: "liked",
    };

    this.onTabClicked = (tabMode) => {
      this.setState({
        toggleTab: tabMode,
      });
    };
  }

  render() {
    const { toggleTab } = this.state;
    return (
      <View>
        <View style={styles.userAccount}>
          <View
            style={[toggleTab === "liked" ? styles.tabHightLighted : null]}
          >
            <Text
              style={styles.tabItem}
              onPress={() => this.onTabClicked("liked")}
            >
Liked
            </Text>
          </View>
          <View
            style={[toggleTab === "bookmarked" ? styles.tabHightLighted : null]}
          >
            <Text
              style={styles.tabItem}
              onPress={() => this.onTabClicked("bookmarked")}
            >
Bookmarked
            </Text>
          </View>
          <View
            style={[toggleTab === "stories" ? styles.tabHightLighted : null]}
          >
            <Text
              style={styles.tabItem}
              onPress={() => this.onTabClicked("stories")}
            >
Stories
            </Text>
          </View>
        </View>
        <View style={styles.pages}>
          {toggleTab === "liked"
            ? <LikedComponent /> : null }
          {toggleTab === "bookmarked"
            ? <BookmarkedComponent /> : null }
          {toggleTab === "stories"
            ? <StoriesComponent /> : null }
        </View>
      </View>
    );
  }
}

export default UserDataContainer;

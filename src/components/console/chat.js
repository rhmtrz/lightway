import React, { Component } from 'react';
import * as firebase from 'firebase'; 
require("firebase/firestore")
import {
  StyleSheet, Text, View, Button
} from 'react-native';
import { connect } from "react-redux";
import { onSaveDataToDB } from "../redux/reducer/pageDataReducer"; 


const settings = {timestampsInSnapshots: true};

firebase.initializeApp(ApiKeys.config)
firebase.firestore().settings(settings)

const db = firebase.firestore();

class ChatRoomComponent extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      message: '', 
      data: []
    }

 

    this.onClick = (n) => {
      db.collection("users").add({
        first: "rah",
        last: "hoge",
        born: n
      }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }
  }

  render() {
    const arr = [1, 10, 100, 1000];
    return (
      <View>
        <View>
          <Text onPress={(e) => this.onClick(e)}>Submit</Text>
        </View>
      </View>
    );
  }
}  


const mapStateToProps = state => {
  const { message } = state.chatData;
  return {
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveDataToDB: () => dispatch(onSaveDataToDB())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomComponent);
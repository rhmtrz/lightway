import React from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import {
  View, Text, TextInput, Button, Alert, Image,
} from 'react-native';

import * as firebase from 'firebase';

class ChatRoomComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      data: [],
    };

    this.onSubmitButtonPressed = () => {
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      const collection = db.collection('messages');
      const { msg } = this.state;
      collection.add({
        message: msg,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
        .then((resolve) => {
          Alert.alert('Success to add collection!');
          // eslint-disable-next-line no-console
          console.log(resolve);
        });
    };

    this.getData = () => {
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      const collection = db.collection('messages');
      collection.get()
        .then((resolve) => {
          this.setState({ data: resolve.docs });
        });
    };

    this.getFewData = () => {
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      const collection = db.collection('posts');
      collection.where('pinLng', '>', 120).where('pinLng', '<', 130).get()
        .then((resolve) => {
          this.setState({ data: resolve.docs });
        })
        .catch((error) => {
          Alert.alert(error);
        });
    };

    this.onClearButtonPressed = () => {
      this.setState({ data: [] });
    };
  }

  render() {
    const { msg, data } = this.state;
    return (
      <View>
        <Text>
          simple chat feature comming soon!
        </Text>
        <TextInput
          value={msg}
          onChangeText={text => this.setState({ msg: text })}
          style={{ backgroundColor: 'white', width: 300 }}
        />
        <Button
          title="Submit"
          onPress={this.onSubmitButtonPressed}
        />
        <Button
          title="Clear"
          onPress={this.onClearButtonPressed}
        />
        <Button
          title="get posts data!"
          onPress={this.getData}
        />
        <Button
          title="get a few data"
          onPress={this.getFewData}
        />
        {data.map(d => (
          <View key={d.id}>
            <Text>
              {/* {d.data().uid} */}
            </Text>
            <Image
              source={{ uri: d.data().photoUrl }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        ))}
      </View>
    );
  }
}

// const mapStateTpProps = (state) => {
//   const { uid } = state.pageData;
//   return {
//     ...state, uid,
//   };
// };

ChatRoomComponent.propTypes = {
  //uid: PropTypes.string.isRequired,
};

export default ChatRoomComponent;


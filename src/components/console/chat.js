import React from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import {
  View, Text, TextInput, Button, Alert, Image,
} from 'react-native';

class ChatRoomComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      data: [],
    };

  }

  render() {
    const { msg, data } = this.state;
    return (
      <View>
        <Text>
          simple chat feature comming soon!
        </Text>
      </View>
    );
  }
}


export default ChatRoomComponent;

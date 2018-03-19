import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Setup extends Component {
  render() {
    return (
      <View>
        <Text>Setup</Text>
        <Button
          onPress={this.onPress.bind(this, 'guided')}
          title="Begin Guided Exam" />

        <Button
          onPress={this.onPress.bind(this, 'manual')}
          title="Begin Manual Exam" />
      </View>
    );
  }

  onPress = (type, e) => {
    e.preventDefault();
    this.props.setExamType(type);
  }
}

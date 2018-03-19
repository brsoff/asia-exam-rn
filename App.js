import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Setup from './Setup.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSetup: true,
      examType: 'manual'
    }
  }

  render() {
    const showSetup = this.state.showSetup;

    if (showSetup) {
      return <Setup setExamType={this.setExamType} />;
    }

    return (
      <View style={styles.container}>
        <Text>ASIA Exam ({this.state.examType})</Text>
      </View>
    );
  }

  setExamType = (type) => {
    let state = {
      examType: type,
      showSetup: false
    }

    if (type === 'guided') {
      state.selectedId = 'C2';
    }

    this.setState(state);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

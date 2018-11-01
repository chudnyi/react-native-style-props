import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {myAwesomeFunction} from 'react-native-style-props';

export default class App extends React.Component<{}> {
  render() {

    myAwesomeFunction();

    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

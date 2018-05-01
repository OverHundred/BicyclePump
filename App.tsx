import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ODPALIŁEM </Text>
        <Text>REACT NATIVE OK 2</Text>
        <View style={styles.sliderContainer}>
          <Slider
            maximumValue={100}
            minimumValue={0}
            step={1}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    width: '100%'
  }
});

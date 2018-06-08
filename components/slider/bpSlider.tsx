// Create a component named MessageComponent
import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

const BPSlider = props => {
  const handleValueChanged = value => {
    if ( props.onValueChange ) {
      props.onValueChange(value)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer} >
        <Text style={styles.label}>{ props.title }</Text>
        <View style={styles.valueContainer}> 
          <Text style={styles.value}>{props.value}</Text>
          <Text style={styles.units}> {props.subtitle}</Text>
        </View>
      </View>
        <Slider
          style={styles.slider}
          maximumValue={props.max}
          minimumValue={props.min}
          step={1}
          value={props.initValue}
          onValueChange={ handleValueChanged }
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '20%',
      padding: 0,
    },
    slider: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 0,
      height: 30,
    },
    labelContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 20,
      paddingLeft: 20,
    },
    label: {
      color: "white",
      fontSize: 24,
    },
    units : {
      color: "#434343",
      alignSelf: 'center',
      fontSize: 16,
      paddingLeft: 5,
    },
    valueContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    value: {
      fontSize: 24,
      color: "white"
    }
  });

export default BPSlider;
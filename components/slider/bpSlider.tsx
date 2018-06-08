// Create a component named MessageComponent
import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export class BPSlider extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            value: props.value,
        }
    }
    
    handleValueChanged = (newValue) => {
        this.setState({ value: newValue })

        if (this.props.onValueChange)
            this.props.onValueChange(newValue)

    }

    render(): any {
        return (
            <View style={styles.container}>
                <Text >{this.state.value}</Text>
                <View style={styles.sliderContainer}>
                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        step={1}
                        value={this.state.value}
                        onValueChange={ this.handleValueChanged }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
      
    },
    sliderContainer: {
      width: '100%'
    }
  });
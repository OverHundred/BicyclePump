import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';
import { BPSlider } from './components/slider/bpSlider'
import { calculatePreassure } from './pressureCalculatingAlgorithm/calculator'
export default class App extends React.Component {
  constructor(props) {
    super(props)

    let initData = {
        tireWidth: 25,
        riderWeight: 70,
        minPreassure: 40,
        maxPreassure: 65,
    }

    let resultData = calculatePreassure(initData)

    this.state = {
        ...initData,

        resultFront: resultData.front,
        resultBack: resultData.back
    }
  }  

  updateCalculatedValue = () => {
    let data = this.state as any
    let resultData = calculatePreassure(data)

    this.setState({
        resultFront: resultData.front,
        resultBack: resultData.back
    })
  }

  render() {
    return (
        <View style={styles.container}>
            <Text>Front: {this.state.resultFront}</Text>
            <Text>Back: {this.state.resultBack}</Text>
            <Text>Rider weight</Text>
            <BPSlider title={"Rider weight"}  subtitle={"kg"} min={0} max={150} value={this.state.riderWeight} onValueChange={val => {
                    this.setState({riderWeight: val})
                    this.updateCalculatedValue()
                }
            } />
            <Text>Tire width</Text>
            <BPSlider title="Tire width"  subtitle="mm" min={10} max={80} value={this.state.tireWidth} onValueChange={val => {
                    this.setState({tireWidth: val})
                    this.updateCalculatedValue()
                }
            }/>
            <Text>Min preassure</Text>
            <BPSlider title="Min preassure"  subtitle="psi" min={0} max={200} value={this.state.minPreassure} onValueChange={val => {
                    this.setState({minPreassure: val})
                    this.updateCalculatedValue()
                }
            }/>
            <Text>Max preassure</Text>
            <BPSlider title="Max preassure"  subtitle="psi" min={0} max={200} value={this.state.maxPreassure} onValueChange={val => {
                    this.setState({maxPreassure: val})
                    this.updateCalculatedValue()
                }}/>
        </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
    },
    sliderContainer: {
      width: '100%'
    }
  });
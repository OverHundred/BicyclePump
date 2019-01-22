import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';
import BPSlider from './components/slider/bpSlider'
import { calculatePreassure } from './pressureCalculatingAlgorithm/calculator'


const initData = {
  tireWidth: 25,
  riderWeight: 70,
  minPreassure: 40,
  maxPreassure: 65,
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...initData }
  }

  calculatePressure = () => {
    let data = this.state as any
    let resultData = calculatePreassure(data)
    return {
      frontTire: resultData.front.toFixed(0),
      rearTire: resultData.back.toFixed(0),
    }
  }

  render() {
    const { frontTire, rearTire } = this.calculatePressure();
    return (
      <View style={styles.container}>
        <View style={styles.results}>
          <View style={styles.tyre} >
            <Text style={styles.resultHeader}>REAR</Text>
            <Text style={styles.result}>{rearTire} </Text>
            <Text style={styles.resultUnits}>PSI</Text>
          </View>
          <View style={styles.tyre} >
            <Text style={styles.resultHeader}>FRONT</Text>
            <Text style={styles.result}>{frontTire} </Text>
            <Text style={styles.resultUnits}>PSI</Text>
          </View>
        </View>

        <View style={styles.sliders}>
          <BPSlider
            subtitle={`Rider weight`}
            title={`${this.state.riderWeight} kg`}
            min={20}
            max={150}
            initValue={initData.riderWeight}
            onValueChange={(riderWeight: number) => this.setState({ riderWeight })}
          />

          <BPSlider
            subtitle={`Tire width`}
            title={`${this.state.tireWidth} mm`}
            min={10}
            max={80}
            initValue={initData.tireWidth}
            onValueChange={(tireWidth: number) => this.setState({ tireWidth })}
          />

          <BPSlider
            subtitle={`Min tire preassure`}
            title={`${this.state.minPreassure} PSI`}
            min={20}
            max={100}
            initValue={initData.minPreassure}
            onValueChange={(minPreassure: number) => this.setState({ minPreassure })}
          />

          <BPSlider
            subtitle={`Max tire preassure`}
            title={`${this.state.maxPreassure} PSI`}
            min={20}
            max={100}
            initValue={initData.maxPreassure}
            onValueChange={(maxPreassure: number) => this.setState({ maxPreassure })}
          />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#060606',
    flexDirection: 'column',
    paddingTop: 40,
    alignItems: 'stretch',
  },
  sliders: {
    paddingTop: 40,
  },
  results: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  result: {
    color: '#00FF9D',
    fontSize: 60,
    paddingLeft: 10,
    paddingBottom: 7,
  },
  resultHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: -12,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  resultUnits: {
    color: '#434343',
    fontSize: 16,
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tyre: {
    borderWidth: 4,
    borderColor: '#232323',
    width: 130,
    height: 130,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 65,
  }
});
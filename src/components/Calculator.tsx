import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bmiType, bmiTextReturn } from '../types/types';
import SliderValue from './SliderValue';
import { Button } from '@ant-design/react-native';
import ResultCard from './ResultCard';

interface CalculatorProps {}

const Calculator: React.FC<CalculatorProps> = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<null | bmiType>(null);

  const bmiText = (bmiValue: number): bmiTextReturn => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue < 25) return 'Normal';
    if (bmiValue < 30) return 'Overweight';
    return 'Obese';
  };

  const bmiCalculator = (weight: number, height: number): void => {
    const halfHeight = height / 100;
    const bmiCalculatedValue = weight / (halfHeight * halfHeight);
    setBmi({
      bmi: JSON.stringify(Math.round(bmiCalculatedValue)),
      result: bmiText(bmiCalculatedValue),
    });
  };

  const onPressCalc = (): void => {
    if (weight !== 0 && height !== 0) {
      bmiCalculator(weight, height);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>
      <View style={styles.inner}>
        <SliderValue title="Weight" unit="kg" value={weight} setValue={setWeight} />
        <SliderValue title="Height" unit="cm" value={height} setValue={setHeight} />
        <Button style={styles.button} type="primary" size="large" onPress={onPressCalc}>
          Calculate
        </Button>
      </View>
      {bmi && <ResultCard bmi={bmi} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    paddingTop: 70,
  },
  titleText: {
    fontSize: 38,
    fontWeight: '900',
  },
  button: {
    marginTop: 40,
    width: '100%',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Calculator;

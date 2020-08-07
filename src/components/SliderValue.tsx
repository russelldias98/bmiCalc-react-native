import React from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View } from 'react-native';

interface SliderValueProps {
  title: string;
  unit: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
export const SliderValue: React.FC<SliderValueProps> = ({ value, setValue, title, unit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${title} (${unit})`}</Text>
      <Slider
        value={value}
        style={styles.slider}
        minimumValue={0}
        maximumValue={250}
        onValueChange={(el) => setValue(Math.round(el))}
      />
      <Text style={styles.textBold}>
        {value} <Text style={styles.textRegular}>{unit}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 40,
  },
  title: {
    alignSelf: 'flex-start',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  textBold: {
    fontSize: 18,
    fontWeight: '900',
    alignSelf: 'flex-start',
  },
  textRegular: {
    fontSize: 18,
    fontWeight: 'normal',
    alignSelf: 'flex-start',
  },
});

export default SliderValue;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bmiType } from '../types/types';

interface ResultCardProps {
  bmi: bmiType;
}
export const ResultCard: React.FC<ResultCardProps> = ({ bmi: { bmi, result } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.header}>{bmi}</Text>
        <Text style={styles.body}>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 1,
    borderColor: 'white',
    backgroundColor: '#A5D6A7',
    padding: 25,
    borderRadius: 6,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: '900',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 5,
  },
  body: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E7D32',
    textAlign: 'center',
  },
});

export default ResultCard;

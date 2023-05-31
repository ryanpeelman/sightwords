import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styles.css';

type ByCountPageProps = {
  setCurrentCount: (count: number) => void;
};

export default function ByCountPage(props: ByCountPageProps): JSX.Element {
  const counts = [0, 5, 10, 20, 50];

  return (
    <View style={styles.selectionPage}>
      {counts.map(number => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.setCurrentCount(number)}
          key={number}>
          <Text style={styles.buttonText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

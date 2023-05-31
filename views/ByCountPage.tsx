import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styles.css';

export default function ByCountPage(): JSX.Element {
  const [count, setCount] = useState<number>();

  const counts = [5, 10, 20, 50];

  return (
    <View style={styles.selectionPage}>
      {counts.map(number => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(number)}
          key={number}>
          <Text style={styles.buttonText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

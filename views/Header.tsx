import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styles.css';

export default function Header(): JSX.Element {
  const handle = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handle}>
        <Text style={styles.buttonText}>All Words</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handle}>
        <Text style={styles.buttonText}>By Letter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handle}>
        <Text style={styles.buttonText}>By Count</Text>
      </TouchableOpacity>
    </View>
  );
}

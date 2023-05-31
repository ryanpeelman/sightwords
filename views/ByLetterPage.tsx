import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styles.css';

export default function ByLetterPage(): JSX.Element {
  const [letter, setLetter] = useState<string>();

  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map(x => String.fromCharCode(x));

  return (
    <View style={styles.selectionPage}>
      {alphabet.map(letter => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setLetter(letter)}
          key={letter}>
          <Text style={styles.buttonText}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

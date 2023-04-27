import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles/styles.css';
import useWords from './hooks/useWords';

export default function App(): JSX.Element {
  const [wordIndex, setWordIndex] = useState<number>(0);
  const words = useWords();

  const handleNextWord = () => {
    const nextIndex = wordIndex + 1;
    if (nextIndex < words.length) {
      setWordIndex(nextIndex);
    }
    // else {
    //   setWordIndex(0);
    // }
  };

  const handlePrevWord = () => {
    const prevIndex = wordIndex - 1;
    if (prevIndex >= 0) {
      setWordIndex(prevIndex);
    }
    // else {
    //   setWordIndex(words.length - 1);
    // }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePrevWord}>
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      <Text style={styles.word}>{words[wordIndex] ?? ''}</Text>
      <TouchableOpacity style={styles.button} onPress={handleNextWord}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

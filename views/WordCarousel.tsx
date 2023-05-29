import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/styles.css';

type WordCarouselProps = {
  words: string[];
};

export default function WordCarousel(props: WordCarouselProps): JSX.Element {
  const {words} = props;

  const [wordIndex, setWordIndex] = useState<number>(0);

  const handleNextWord = () => {
    const nextIndex = wordIndex + 1;
    if (nextIndex < words.length) {
      setWordIndex(nextIndex);
    } else {
      setWordIndex(0);
    }
  };

  const handlePrevWord = () => {
    const prevIndex = wordIndex - 1;
    if (prevIndex >= 0) {
      setWordIndex(prevIndex);
    } else {
      setWordIndex(words.length - 1);
    }
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

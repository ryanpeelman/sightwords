import React from 'react';
import {View} from 'react-native';
import useWords from './hooks/useWords';
import Header from './views/Header';
import WordCarousel from './views/WordCarousel';
import styles from './styles/styles.css';

export default function App(): JSX.Element {
  const words = useWords();

  return (
    <View style={styles.container}>
      <Header />
      <WordCarousel words={words} />
    </View>
  );
}

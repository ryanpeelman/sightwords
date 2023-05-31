import React, {useState} from 'react';
import {View} from 'react-native';
import useWords from './hooks/useWords';
import Header from './views/Header';
import WordCarousel from './views/WordCarousel';
import styles from './styles/styles.css';
import ByLetterPage from './views/ByLetterPage';
import ByCountPage from './views/ByCountPage';
import {Pages} from './enums';

export default function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Words);
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [currentCount, setCurrentCount] = useState<number>(0);

  const words = useWords(currentLetter, currentCount);

  return (
    <View style={styles.container}>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === Pages.Letter && (
        <ByLetterPage setCurrentLetter={setCurrentLetter} />
      )}
      {currentPage === Pages.Count && (
        <ByCountPage setCurrentCount={setCurrentCount} />
      )}
      {currentPage === Pages.Words && <WordCarousel words={words} />}
    </View>
  );
}

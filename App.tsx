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

  const words = useWords();

  return (
    <View style={styles.container}>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === Pages.Letter && <ByLetterPage />}
      {currentPage === Pages.Count && <ByCountPage />}
      {currentPage === Pages.Words && <WordCarousel words={words} />}
    </View>
  );
}

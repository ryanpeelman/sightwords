import React, {useState} from 'react';
import {View} from 'react-native';
import {Pages} from './enums';
import useWords from './hooks/useWords';
import styles from './styles/styles.css';
import ByCountPage from './views/ByCountPage';
import ByLetterPage from './views/ByLetterPage';
import Header from './views/Header';
import WordCarousel from './views/WordCarousel';

export default function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Words);
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [currentCount, setCurrentCount] = useState<number>(0);

  const words = useWords(currentLetter, currentCount);

  return (
    <View style={styles.container}>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === Pages.Letter && (
        <ByLetterPage
          setCurrentLetter={(letter: string) => {
            setCurrentLetter(letter);
            setCurrentPage(Pages.Words);
          }}
        />
      )}
      {currentPage === Pages.Count && (
        <ByCountPage
          setCurrentCount={(count: number) => {
            setCurrentCount(count);
            setCurrentPage(Pages.Words);
          }}
        />
      )}
      {currentPage === Pages.Words && <WordCarousel words={words} />}
    </View>
  );
}

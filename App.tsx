import React from 'react';
import useWords from './hooks/useWords';
import Header from './views/Header';
import WordCarousel from './views/WordCarousel';

export default function App(): JSX.Element {
  const words = useWords();

  return (
    <div>
      <Header />
      <WordCarousel words={words} />
    </div>
  );
}

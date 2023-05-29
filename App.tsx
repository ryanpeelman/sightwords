import React from 'react';
import useWords from './hooks/useWords';
import WordCarousel from './views/WordCarousel';

export default function App(): JSX.Element {
  const words = useWords();

  return <WordCarousel words={words} />;
}

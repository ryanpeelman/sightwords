import {useEffect, useState} from 'react';

function useWords(): string[] {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    async function fetchWords() {
      try {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWords();
  }, []);

  return words;
}

export default useWords;

import {useEffect, useState} from 'react';

function useWords(currentLetter: string, currentCount: number): string[] {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    async function fetchWords() {
      try {
        const count = currentCount ?? 0;
        const letter = currentLetter ?? '';
        const response = await fetch(
          `http://localhost:3000/words?letter=${letter}&count=${count}`,
        );
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWords();
  }, [currentLetter, currentCount]);

  return words;
}

export default useWords;

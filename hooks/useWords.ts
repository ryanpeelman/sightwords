import {useEffect, useState} from 'react';

function useWords(currentLetter: string, currentCount: number): string[] {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    async function fetchWords() {
      try {
        const url = new URL('http://localhost:3000/words');

        if (currentCount && currentCount > 0) {
          url.searchParams.append('count', currentCount.toString());
        }

        if (currentLetter) {
          url.searchParams.append('letter', currentLetter);
        }

        const response = await fetch(url.href);
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

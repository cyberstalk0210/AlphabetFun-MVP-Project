import { useEffect, useState } from 'react';
import AlphabetGrid from '../components/AlphabetGrid';
import { mockFetchLetters } from '../services/apiService';

const Home = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    mockFetchLetters().then((data) => setLetters(data));
  }, []);

  return (
    <div>
      <h1>Alphabet Learning</h1>
      <AlphabetGrid letters={letters} />
    </div>
  );
};
export default Home;
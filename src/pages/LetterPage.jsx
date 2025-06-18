import { useParams, useNavigate } from 'react-router-dom';
import { Howl } from 'howler';
import { useState, useEffect } from 'react';

const LetterPage = () => {
  const { letter } = useParams();
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [words, setWords] = useState([]);
  const [correctWord, setCorrectWord] = useState('');
  const [score, setScore] = useState(0);
  const [usedWords, setUsedWords] = useState([]); // Track used words for the current letter

  const letterData = [
    { letter: 'A', words: ['Apple', 'Ant', 'Arrow', 'Airplane', 'Avocado'], icon: '🍎' },
    { letter: 'B', words: ['Bus', 'Ball', 'Bear', 'Banana', 'Boat'], icon: '🚍' },
    { letter: 'C', words: ['Crown', 'Cat', 'Car', 'Cake', 'Cloud'], icon: '👑' },
    { letter: 'D', words: ['Dinosaur', 'Dog', 'Duck', 'Door', 'Drum'], icon: '🦖' },
    { letter: 'E', words: ['Egg', 'Elephant', 'Eagle', 'Ear', 'Earth'], icon: '🥚' },
    { letter: 'F', words: ['Frog', 'Fish', 'Flower', 'Flag', 'Fox'], icon: '🐸' },
    { letter: 'G', words: ['Goblin', 'Goat', 'Grape', 'Giraffe', 'Glove'], icon: '👺' },
    { letter: 'H', words: ['Helicopter', 'Horse', 'Hat', 'House', 'Heart'], icon: '🚁' },
    { letter: 'I', words: ['Iguana', 'Ice', 'Island', 'Ink', 'Iron'], icon: '🦎' },
    { letter: 'J', words: ['Jam', 'Jelly', 'Jaguar', 'Jacket', 'Jar'], icon: '🍓' },
    { letter: 'K', words: ['King', 'Kite', 'Kangaroo', 'Key', 'Koala'], icon: '👑' },
    { letter: 'L', words: ['Lollipop', 'Lion', 'Leaf', 'Lamp', 'Lemon'], icon: '🍭' },
    { letter: 'M', words: ['Mushroom', 'Monkey', 'Moon', 'Milk', 'Mountain'], icon: '🍄' },
    { letter: 'N', words: ['Nut', 'Nest', 'Nose', 'Nail', 'Night'], icon: '🥜' },
    { letter: 'O', words: ['Octopus', 'Orange', 'Owl', 'Ocean', 'Onion'], icon: '🐙' },
    { letter: 'P', words: ['Pig', 'Penguin', 'Pizza', 'Pencil', 'Parrot'], icon: '🐷' },
    { letter: 'Q', words: ['Queen', 'Quail', 'Quilt', 'Quiz', 'Quartz'], icon: '👸' },
    { letter: 'R', words: ['Rainbow', 'Rabbit', 'Rose', 'Rocket', 'Ring'], icon: '🌈' },
    { letter: 'S', words: ['Sun', 'Snake', 'Star', 'Spoon', 'Ship'], icon: '☀️' },
    { letter: 'T', words: ['Truck', 'Tiger', 'Tree', 'Table', 'Turtle'], icon: '🚛' },
    { letter: 'U', words: ['Unicorn', 'Umbrella', 'Uniform', 'Ukulele', 'Urn'], icon: '🦄' },
    { letter: 'V', words: ['Volcano', 'Violin', 'Vase', 'Van', 'Vest'], icon: '🌋' },
    { letter: 'W', words: ['Watermelon', 'Wolf', 'Window', 'Worm', 'Watch'], icon: '🍉' },
    { letter: 'X', words: ['Xylophone', 'X-ray', 'Xenon', 'Xerus', 'Xmas'], icon: '🎶' },
    { letter: 'Y', words: ['Yarn', 'Yak', 'Yogurt', 'Yacht', 'Yolk'], icon: '🧶' },
    { letter: 'Z', words: ['Zebra', 'Zoo', 'Zipper', 'Zucchini', 'Zero'], icon: '🦓' },
  ];

  const generateGameWords = (currentLetterData) => {
    const availableWords = currentLetterData.words.filter((word) => !usedWords.includes(word));
    if (availableWords.length === 0) {
      setFeedback('No more words left! Returning to home...');
      setTimeout(() => navigate('/'), 1500);
      return;
    }
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    setCorrectWord(correct);
    const otherWords = letterData
      .filter((item) => item.letter !== currentLetterData.letter)
      .flatMap((item) => item.words)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const gameWords = [correct, ...otherWords].sort(() => Math.random() - 0.5);
    setWords(gameWords);
  };

  useEffect(() => {
    const currentLetterData = letterData.find((item) => item.letter.toLowerCase() === letter.toLowerCase());
    if (currentLetterData) {
      setUsedWords([]);
      generateGameWords(currentLetterData);
    }
  }, [letter]);

  const playSound = (soundFile) => {
    const filePath = `/assets/sounds/${soundFile}.mp3`;
    try {
      console.log(`Attempting to load: ${filePath}`);
      const sound = new Howl({
        src: [filePath],
        format: ['mp3'],
        onload: () => {
          console.log(`Successfully loaded: ${filePath}`);
          sound.play(); // Ensure it plays after loading
        },
        onloaderror: (id, error) => {
          console.error(`Load error for ${filePath}:`, error);
          setFeedback(`Error loading ${soundFile} sound. The file may be corrupted or incompatible.`);
        },
        onplayerror: (id, error) => {
          console.error(`Play error for ${filePath}:`, error);
          setFeedback(`Error playing ${soundFile} sound. Please try again.`);
        },
      });
    } catch (error) {
      console.error(`General error for ${filePath}:`, error);
      setFeedback(`Error playing ${soundFile} sound. Please try again.`);
    }
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word);
    if (word === correctWord) {
      playSound('correct'); // Play correct sound
      setScore((prevScore) => prevScore + 1);
      setFeedback('Correct! Great job!');
      setUsedWords((prev) => [...prev, word]);
      setTimeout(() => {
        setSelectedWord(null);
        setFeedback('');
        const currentLetterData = letterData.find((item) => item.letter.toLowerCase() === letter.toLowerCase());
        if (currentLetterData) generateGameWords(currentLetterData);
      }, 1500);
    } else {
      playSound('incorrect'); // Play incorrect sound
      setFeedback('Try again!');
    }
  };

  const resetGame = () => {
    setSelectedWord(null);
    setFeedback('');
    const currentLetterData = letterData.find((item) => item.letter.toLowerCase() === letter.toLowerCase());
    if (currentLetterData) generateGameWords(currentLetterData);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Letter {letter}</h1>
      <div className="flex flex-col items-center mb-6">
        <p className="text-2xl font-semibold text-gray-800 mb-2">Score: {score}</p>
        <button
          onClick={() => playSound(letter.toLowerCase())}
          className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
        >
          Play Sound
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Match the Word for Letter {letter}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {words.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleWordSelect(word)}
              disabled={selectedWord !== null}
              className={`py-2 px-4 rounded-lg text-lg font-medium transition duration-300 ${
                selectedWord === word
                  ? word === correctWord
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } ${selectedWord && 'cursor-not-allowed'}`}
            >
              {word}
            </button>
          ))}
        </div>
        {feedback && (
          <div className="mt-4 text-center">
            <p
              className={`text-lg font-semibold ${
                feedback.includes('Correct') || feedback.includes('No more words')
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {feedback}
            </p>
            {!feedback.includes('Correct') && !feedback.includes('No more words') && (
              <button
                onClick={resetGame}
                className="mt-2 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Try Again
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterPage;
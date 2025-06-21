import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';

const MatchGame = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(60); // 60-second timer
  const [mistakes, setMistakes] = useState(0); // Track mistakes
  const [selectedWord, setSelectedWord] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [words, setWords] = useState([]);
  const [images, setImages] = useState([]);
  const [correctMatches, setCorrectMatches] = useState({});

  // Game data: word-image pairs
  const gameData = [
    { word: 'Video game', image: 'videogame.jpg' },
    { word: 'Bike', image: 'bike.jpg' },
    { word: 'Hula hoop', image: 'hulahoop.jpg' },
    { word: 'Board game', image: 'boardgame.jpg' },
    { word: 'Pinwheel', image: 'pinwheel.jpg' },
    { word: 'Hopscotch', image: 'hopscotch.jpg' },
    { word: 'Telephone', image: 'telephone.jpg' },
    { word: 'Jigsaw puzzle', image: 'jigsawpuzzle.jpg' },
    { word: 'Tic tac toe', image: 'tictactoe.jpg' },
    { word: 'Hide and seek', image: 'hideandseek.jpg' },
    { word: 'Tag', image: 'tag.jpg' },
  ];

  // Initialize game
  useEffect(() => {
    const shuffledWords = [...gameData].sort(() => Math.random() - 0.5).map(item => item.word);
    const shuffledImages = [...gameData].sort(() => Math.random() - 0.5).map(item => item.image);
    setWords(shuffledWords);
    setImages(shuffledImages);

    // Timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          setFeedback('Time is up! Game Over!');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const playSound = (soundFile) => {
    const filePath = `../assets/data/sound/${soundFile}.mp3`;
    try {
      console.log(`Attempting to load: ${filePath}`);
      const sound = new Howl({
        src: [filePath],
        format: ['mp3'],
        onload: () => {
          console.log(`Successfully loaded: ${filePath}`);
          sound.play();
          console.log(`Playing: ${filePath}`);
        },
        onloaderror: (id, error) => console.error(`Load error for ${filePath}:`, error),
        onplayerror: (id, error) => console.error(`Play error for ${filePath}:`, error),
      });
    } catch (error) {
      console.error(`General error for ${filePath}:`, error);
    }
  };

  const handleMatch = (wordIndex, imageIndex) => {
    if (gameOver || selectedWord !== null) return;

    const word = words[wordIndex];
    const image = images[imageIndex];
    const correctPair = gameData.find(item => item.word === word && item.image === image);

    if (correctPair) {
      playSound('correct');
      setCorrectMatches((prev) => ({
        ...prev,
        [word]: image,
      }));
      setFeedback('Correct! Great match!');
      setTimeout(() => setFeedback(''), 1000);

      // Check if all matches are complete
      if (Object.keys(correctMatches).length + 1 === gameData.length) {
        setGameOver(true);
        setFeedback('Congratulations! You won!');
      }
    } else {
      playSound('incorrect');
      setMistakes((prev) => {
        const newMistakes = prev + 1;
        if (newMistakes >= 3) {
          setGameOver(true);
          setFeedback('Too many mistakes! Game Over!');
        } else {
          setFeedback('Try again!');
          setTimeout(() => setFeedback(''), 1000);
        }
        return newMistakes;
      });
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Match the Game</h1>
      <div className="flex flex-col items-center mb-6">
        <p className="text-2xl font-semibold text-gray-800 mb-2">Time Left: {timeLeft}s | Mistakes: {mistakes}/3</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Words</h2>
          <div className="grid grid-cols-3 gap-4">
            {words.map((word, index) => (
              <button
                key={index}
                onClick={() => setSelectedWord({ word, index })}
                disabled={gameOver || correctMatches[word]}
                className={`py-2 px-4 rounded-lg text-lg font-medium transition duration-300 ${
                  correctMatches[word] ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
                } ${gameOver && 'cursor-not-allowed'} `}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Images</h2>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => selectedWord && handleMatch(selectedWord.index, index)}
                className={`border-2 border-gray-300 rounded-lg overflow-hidden cursor-pointer ${
                  gameOver || (selectedWord && selectedWord.index !== words.indexOf(gameData.find(item => item.image === image)?.word)) ? 'opacity-50' : ''
                }`}
              >
                <img
                  src={`/assets/images/${image}`}
                  alt={image}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {feedback && (
        <div className="mt-4 text-center">
          <p className={`text-lg font-semibold ${feedback.includes('Correct') || feedback.includes('Congratulations') ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
          </p>
        </div>
      )}
      {gameOver && (
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Return to Home
        </button>
      )}
    </div>
  );
};

export default MatchGame;
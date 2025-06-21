import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';

const MatchGame = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(60);
  const [mistakes, setMistakes] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [words, setWords] = useState([]);
  const [images, setImages] = useState([]);
  const [correctMatches, setCorrectMatches] = useState({});

  // Original game data with IDs
const gameData = [
  { id: 1, word: 'Video o‘yin', image: 'videogame.png' },
  { id: 2, word: 'Velosiped', image: 'bike.png' },
  { id: 3, word: 'Hula halqa', image: 'hulahoop.png' },
  { id: 4, word: 'Stol o‘yini', image: 'boardgame.png' },
  { id: 5, word: 'Shamol g‘ildiragi', image: 'pinwheel.png' },
  { id: 6, word: 'Kvadratga sakrash', image: 'hopscotch.png' },
  { id: 7, word: 'Telefon', image: 'telephone.png' },
  { id: 8, word: 'Puzzle (topishmoq)', image: 'jigsawpuzzle.png' },
  { id: 9, word: 'X va 0 o‘yini', image: 'tictactoe.png' },
  { id: 10, word: 'Bekinmachoq', image: 'hideandseek.png' },
  { id: 11, word: 'Quvlashmachoq', image: 'tag.png' },
];


  useEffect(() => {
    const shuffledWords = [...gameData].sort(() => Math.random() - 0.5).map(({ id, word }) => ({ id, word }));
    const shuffledImages = [...gameData].sort(() => Math.random() - 0.5).map(({ id, image }) => ({ id, image }));

    setWords(shuffledWords);
    setImages(shuffledImages);

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
    const filePath = `sounds/${soundFile}.mp3`;
    const sound = new Howl({
      src: [filePath],
      format: ['mp3'],
      onload: () => sound.play(),
      onloaderror: (id, error) => console.error(`Load error for ${filePath}:`, error),
      onplayerror: (id, error) => console.error(`Play error for ${filePath}:`, error),
    });
  };

  const handleMatch = (wordObj, imageObj) => {
    if (gameOver) return;

    if (wordObj.id === imageObj.id) {
      playSound('correct');
      setCorrectMatches((prev) => ({
        ...prev,
        [wordObj.word]: true,
      }));
      setFeedback('Correct! Great match!');
      setTimeout(() => setFeedback(''), 1000);

      if (Object.keys(correctMatches).length + 1 === gameData.length) {
        setGameOver(true);
        setFeedback('Congratulations! You won!');
      }
    } else {
      playSound('error');
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

    setSelectedWord(null);
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Match the Game</h1>
      <div className="flex flex-col items-center mb-6">
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Time Left: {timeLeft}s | Mistakes: {mistakes}/3
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl grid grid-cols-2 gap-4">
        {/* Words List */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Words</h2>
          <div className="grid grid-cols-3 gap-4">
            {words.map((wordObj, index) => (
              <button
  key={index}
  onClick={() => setSelectedWord(wordObj)}
  disabled={gameOver || correctMatches[wordObj.word]}
  className={`py-2 px-4 rounded-lg text-lg font-medium transition duration-300
    ${correctMatches[wordObj.word] ? 'bg-green-500 text-white' : 
      selectedWord?.word === wordObj.word ? 'bg-yellow-400 text-black' : 'bg-blue-500 text-white hover:bg-blue-600'}
    ${gameOver && 'cursor-not-allowed'}`}
>
  {wordObj.word}
</button>

            ))}
          </div>
        </div>

        {/* Images List */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Images</h2>
          <div className="grid grid-cols-3 gap-4">
            {images.map((imageObj, index) => (
              <div
                key={index}
                onClick={() => selectedWord && handleMatch(selectedWord, imageObj)}
                className={`border-2 border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-green-500 ${
                  gameOver ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <img
                  src={`/assets/${imageObj.image}`}
                  alt={imageObj.image}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <div className="mt-4 text-center">
          <p
            className={`text-lg font-semibold ${
              feedback.includes('Correct') || feedback.includes('Congratulations')
                ? 'text-green-600'
                : 'text-red-600'
            }`}
          >
            {feedback}
          </p>
        </div>
      )}

      {/* Game Over Button */}
      {gameOver && (
        <button
          onClick={() => navigate('/match')}
          className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Return to Home
        </button>
      )}
    </div>
  );
};

export default MatchGame;

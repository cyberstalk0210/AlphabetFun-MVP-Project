import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';

const QuizGame = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(60); // 60-second timer
  const [mistakes, setMistakes] = useState(0); // Track mistakes
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Game data: image-word pairs
const gameData = [
  { image: 'hopscotch.png', options: ['Skuter', 'Kvadrat o‘yin', 'Stol o‘yini', 'Puzzle'], correct: 'Kvadrat o‘yin' },
  { image: 'scooter.png', options: ['Skuter', 'Kvadrat o‘yin', 'Stol o‘yini', 'Puzzle'], correct: 'Skuter' },
  { image: 'boardgame.png', options: ['Skuter', 'Kvadrat o‘yin', 'Stol o‘yini', 'Puzzle'], correct: 'Stol o‘yini' },
  { image: 'jigsawpuzzle.png', options: ['Skuter', 'Kvadrat o‘yin', 'Stol o‘yini', 'Puzzle'], correct: 'Puzzle' },
  { image: 'videogame.png', options: ['Video o‘yin', 'Motosikl', 'Hula halqa', 'Shamol tegirmoni'], correct: 'Video o‘yin' },
  { image: 'bike.png', options: ['Video o‘yin', 'Motosikl', 'Hula halqa', 'Shamol tegirmoni'], correct: 'Motosikl' },
  { image: 'hulahoop.png', options: ['Video o‘yin', 'Motosikl', 'Hula halqa', 'Shamol tegirmoni'], correct: 'Hula halqa' },
  { image: 'pinwheel.png', options: ['Video o‘yin', 'Motosikl', 'Hula halqa', 'Shamol tegirmoni'], correct: 'Shamol tegirmoni' },
  { image: 'telephone.png', options: ['Telefon', 'Puzzle', 'X va O o‘yini', 'Bekinmachoq'], correct: 'Telefon' },
  { image: 'tictactoe.png', options: ['Telefon', 'Puzzle', 'X va O o‘yini', 'Bekinmachoq'], correct: 'X va O o‘yini' },
  { image: 'hideandseek.png', options: ['Telefon', 'Puzzle', 'X va O o‘yini', 'Bekinmachoq'], correct: 'Bekinmachoq' },
  { image: 'tag.png', options: ['Quvlashmachoq', 'Puzzle', 'X va O o‘yini', 'Bekinmachoq'], correct: 'Quvlashmachoq' },
];


  // Initialize timer
  useEffect(() => {
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
    const filePath = `/sounds/${soundFile}.mp3`;
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

  const handleAnswer = (answer) => {
    if (gameOver || selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    const current = gameData[currentQuestion];
    if (answer === current.correct) {
      playSound('correct');
      setFeedback('Correct! Great job!');
      setTimeout(() => {
        setSelectedAnswer(null);
        setFeedback('');
        if (currentQuestion + 1 < gameData.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setGameOver(true);
          setFeedback('Congratulations! You completed the quiz!');
        }
      }, 1000);
    } else {
      playSound('error');
      setMistakes((prev) => {
        const newMistakes = prev + 1;
        if (newMistakes >= 3) {
          setGameOver(true);
          setFeedback('Too many mistakes! Game Over!');
        } else {
          setFeedback('Wrong answer! Try again.');
          setTimeout(() => {
            setSelectedAnswer(null);
            setFeedback('');
          }, 1000);
        }
        return newMistakes;
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Kids' Quiz Game</h1>
      <div className="flex flex-col items-center mb-6">
        <p className="text-2xl font-semibold text-gray-800 mb-2">Time Left: {timeLeft}s | Mistakes: {mistakes}/3 | Question {currentQuestion + 1} of {gameData.length}</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl flex flex-col items-center">
        <div className="mb-4">
          <img
            src={`/assets/${gameData[currentQuestion].image}`}
            alt={gameData[currentQuestion].image}
            className="w-64 h-64 object-cover border-2 border-gray-300 rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Match the Image</h2>
        <div className="grid grid-cols-2 gap-4">
          {gameData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={gameOver || selectedAnswer !== null}
              className={`py-2 px-4 rounded-lg text-lg font-medium transition duration-300 ${
                selectedAnswer === option
                  ? option === gameData[currentQuestion].correct
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              } ${gameOver && 'cursor-not-allowed'}`}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && (
          <div className="mt-4 text-center">
            <p className={`text-lg font-semibold ${feedback.includes('Correct') || feedback.includes('Congratulations') ? 'text-green-600' : 'text-red-600'}`}>
              {feedback}
            </p>
          </div>
        )}
      </div>
      {gameOver && (
        <button
          onClick={() => navigate('/quiz')}
          className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          Return to Home
        </button>
      )}
    </div>
  );
};

export default QuizGame;
import { useParams, useNavigate } from "react-router-dom";
import { Howl } from "howler";
import { useState, useEffect } from "react";  
const LetterPage = () => {
  const { letter } = useParams();
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [words, setWords] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [score, setScore] = useState(0);
  const [usedWords, setUsedWords] = useState([]);

  const letterData = [
    {
      letter: "A",
      words: ["Olma", "Ayiq", "Archa", "Aylana", "Avtobus"],
      icon: "🍎",
    },
    {
      letter: "B",
      words: ["Bolta", "Baliq", "Bolalar", "Bog‘", "Burun"],
      icon: "🔨",
    },
    {
      letter: "C",
      words: ["Charm", "Choy", "Chiroq", "Chumchuq", "Chizg‘ich"],
      icon: "☕",
    },
    {
      letter: "D",
      words: ["Do‘st", "Daraxt", "Dengiz", "Dumba", "Dasturxon"],
      icon: "🌳",
    },
    {
      letter: "E",
      words: ["Eshik", "Eshak", "Elon", "Ertak"],
      icon: "🚪",
    },
    {
      letter: "F",
      words: ["Fayz", "Futbol", "Fon", "Fayl", "Fanda"],
      icon: "⚽",
    },
    {
      letter: "G",
      words: ["G‘oz", "Gul", "G‘isht", "Gumbaz", "G‘ildirak"],
      icon: "🌸",
    },
    {
      letter: "H",
      words: ["Hayvon", "Hammom", "Havorang", "Harf", "Hunar"],
      icon: "🐾",
    },
    {
      letter: "I",
      words: ["Ilon", "Ipak", "Ishq", "Ipakqurt", "Issiqlik"],
      icon: "🐍",
    },
    {
      letter: "J",
      words: ["Jo‘ja", "Jimjitlik", "Jom", "Jiyda", "Jim"],
      icon: "🐥",
    },
    {
      letter: "K",
      words: ["Kitob", "Ko‘z", "Kapalak", "Kosa", "Ko‘prik"],
      icon: "📘",
    },
    {
      letter: "L",
      words: ["Lola", "Lampochka", "Limon", "Laylak", "List"],
      icon: "💡",
    },
    {
      letter: "M",
      words: ["Meva", "Mashina", "Mushuk", "Maktab", "Mo‘yna"],
      icon: "🚗",
    },
    {
      letter: "N",
      words: ["Non", "Nay", "Nega", "Nishon", "Niqob"],
      icon: "🍞",
    },
    {
      letter: "O",
      words: ["Ona", "Olma", "Ovqat", "Oy", "O‘rmon"],
      icon: "🌕",
    },
    {
      letter: "P",
      words: ["Pichoq", "Pomidor", "Pilla", "Poyezd", "Palov"],
      icon: "🍅",
    },
    {
      letter: "Q",
      words: ["Qo‘zi", "Qush", "Qalam", "Qoplon", "Qor"],
      icon: "🐑",
    },
    {
      letter: "R",
      words: ["Rang", "Rasm", "Ruxsat", "Raketa", "Ro‘mol"],
      icon: "🎨",
    },
    {
      letter: "S",
      words: ["Suv", "Sariq", "Sigir", "Sumka", "Soat"],
      icon: "💧",
    },
    {
      letter: "T",
      words: ["Tog‘", "Tosh", "To‘tiqush", "Tandir", "Telefon"],
      icon: "📞",
    },
    {
      letter: "U",
      words: ["Uchuvchi", "Uy", "Uchburchak", "Ustoz", "Uzum"],
      icon: "🏠",
    },
    {
      letter: "V",
      words: ["Velosiped", "Vazn", "Varrak", "Vazifa", "Vagon"],
      icon: "🚲",
    },
    {
      letter: "X",
      words: ["Xarita", "Xat", "Xurmo", "Xavfsizlik", "Xayol"],
      icon: "📜",
    },
    {
      letter: "Y",
      words: ["Yilqi", "Yulduz", "Yumaloq", "Yaproq", "Yog‘"],
      icon: "⭐",
    },
    {
      letter: "Z",
      words: ["Zebrak", "Zang", "Zulfin", "Zar", "Ziyorat"],
      icon: "🦓",
    },
  ];

  const generateGameWords = (currentLetterData) => {
    const availableWords = currentLetterData.words.filter(
      (word) => !usedWords.includes(word)
    );
    if (availableWords.length === 0) {
      setFeedback("No more words left! Returning to home...");
      setTimeout(() => navigate("/"), 1500);
      return;
    }
    const correct =
      availableWords[Math.floor(Math.random() * availableWords.length)];
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
    const currentLetterData = letterData.find(
      (item) => item.letter.toLowerCase() === letter.toLowerCase()
    );
    if (currentLetterData) {
      setUsedWords([]);
      generateGameWords(currentLetterData);
    }
  }, [letter]);

  const playSound = (soundFile) => {
    const filePath = `/sounds/${soundFile}.mp3`; // ✅ to‘g‘ri yo‘l
    console.log(soundFile);
    console.log(`${soundFile}`);
    
    
    try {
      console.log(`Attempting to load: ${filePath}`);
      const sound = new Howl({
        src: [filePath],
        format: ["mp3"],
        onload: () => {
          console.log(`Successfully loaded: ${filePath}`);
          sound.play();
        },
        onloaderror: (id, error) => {
          console.error(`Load error for ${filePath}:`, error);
          setFeedback(`Error loading ${soundFile} sound.`);
        },
        onplayerror: (id, error) => {
          console.error(`Play error for ${filePath}:`, error);
          setFeedback(`Error playing ${soundFile} sound.`);
        },
      });
    } catch (error) {
      console.error(`General error for ${filePath}:`, error);
      setFeedback(`Error playing ${soundFile} sound.`);
    }
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word);
    if (word === correctWord) {
      playSound("correct"); // Play correct sound
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct! Great job!");
      setUsedWords((prev) => [...prev, word]);
      setTimeout(() => {
        setSelectedWord(null);
        setFeedback("");
        const currentLetterData = letterData.find(
          (item) => item.letter.toLowerCase() === letter.toLowerCase()
        );
        if (currentLetterData) generateGameWords(currentLetterData);
      }, 1500);
    } else {
      playSound("error"); // Play incorrect sound
      setFeedback("Try again!");
    }
  };

  const resetGame = () => {
    setSelectedWord(null);
    setFeedback("");
    const currentLetterData = letterData.find(
      (item) => item.letter.toLowerCase() === letter.toLowerCase()
    );
    if (currentLetterData) generateGameWords(currentLetterData);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Letter {letter}</h1>
      <div className="flex flex-col items-center mb-6">
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Score: {score}
        </p>
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
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              } ${selectedWord && "cursor-not-allowed"}`}
            >
              {word}
            </button>
          ))}
        </div>
        {feedback && (
          <div className="mt-4 text-center">
            <p
              className={`text-lg font-semibold ${
                feedback.includes("Correct") ||
                feedback.includes("No more words")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {feedback}
            </p>
            {!feedback.includes("Correct") &&
              !feedback.includes("No more words") && (
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

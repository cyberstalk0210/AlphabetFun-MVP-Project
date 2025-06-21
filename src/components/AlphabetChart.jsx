import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  width: 120,
  height: 150,
  fontSize: 28,
  color: 'white ',
  fontFamily: '"Comic Neue", cursive',
  borderRadius: 12,
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
}));

const AlphabetChart = () => {
  const [letters, setLetters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
const data = [
  { letter: 'A', word: 'Ayıq', icon: '🐻' },
  { letter: 'B', word: 'Baliq', icon: '🐟' },
  { letter: 'D', word: 'Dinozavr', icon: '🦖' },
  { letter: 'E', word: 'Eshik', icon: '🚪' },
  { letter: 'F', word: 'Fayz', icon: '✨' },
  { letter: 'G', word: 'Gul', icon: '🌸' },
  { letter: 'Gʻ', word: 'Gʻoz', icon: '🪿' },
  { letter: 'H', word: 'Hammom', icon: '🛁' },
  { letter: 'I', word: 'Ilon', icon: '🐍' },
  { letter: 'J', word: 'Joʻja', icon: '🐥' },
  { letter: 'K', word: 'Kitob', icon: '📘' },
  { letter: 'L', word: 'Limon', icon: '🍋' },
  { letter: 'M', word: 'Mushuk', icon: '🐱' },
  { letter: 'N', word: 'Non', icon: '🍞' },
  { letter: 'O', word: 'Olma', icon: '🍎' },
  { letter: 'Oʻ', word: 'Oʻrdak', icon: '🦆' },
  { letter: 'P', word: 'Pista', icon: '🥜' },
  { letter: 'Q', word: 'Qoʻy', icon: '🐑' },
  { letter: 'R', word: 'Rang', icon: '🎨' },
  { letter: 'S', word: 'Sigir', icon: '🐄' },
  { letter: 'T', word: 'Togʻ', icon: '⛰️' },
  { letter: 'U', word: 'Uzum', icon: '🍇' },
  { letter: 'V', word: 'Velosiped', icon: '🚲' },
  { letter: 'X', word: 'Xarita', icon: '🗺️' },
  { letter: 'Y', word: 'Yulduz', icon: '⭐' },
  { letter: 'Z', word: 'Zebra', icon: '🦓' },
  { letter: 'Ch', word: 'Choy', icon: '🍵' },
  { letter: 'Sh', word: 'Shirinlik', icon: '🍬' },
  { letter: 'Ng', word: 'Angin', icon: '📣' }
];


    // 30ta element bo'lishi uchun 4ta bo'sh joy qo‘shamiz
    while (data.length < 30) {
      data.push(null);
    }

    setLetters(data);
  }, []);

  const getColor = (index) => {
    const colors = ['#fb6b6b', '#4ecdc4', '#45b7d1', '#f3eead', '#d4a5a5', '#9b59b6'];
    return colors[index % colors.length];
  };

  const wobbleVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <div style={{ display: 'grid',backgroundColor: 'brown', gridTemplateColumns: 'repeat(5, 0fr)', gap: '25px', justifyContent: 'center', padding: 32 }}>
      {letters.map((item, idx) =>
        item ? (
          <motion.div
            key={idx}
            variants={wobbleVariants}
            whileHover="hover"
            whileTap="tap"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <StyledButton
              variant="contained"
              style={{ backgroundColor: getColor(idx) }}
              onClick={() => navigate(`/letter/${item.letter}`)}
            >
              <div style={{ fontWeight: 'bold' }}>{item.letter}</div>
              <div style={{ fontSize: 32 }}>{item.icon}</div>
              <div style={{ fontSize: 26, fontWeight:'bold' }}>{item.word}</div>
            </StyledButton>
          </motion.div>
        ) : (
          <div key={idx} style={{ width: 150, height: 150 }} /> // bo‘sh joy
        )
      )}
    </div>
  );
};

export default AlphabetChart;

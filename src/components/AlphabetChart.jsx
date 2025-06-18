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
      { letter: 'A', word: 'Apple', icon: '🍎' },
      { letter: 'B', word: 'Bus', icon: '🚍' },
      { letter: 'C', word: 'Crown', icon: '👑' },
      { letter: 'D', word: 'Dinosaur', icon: '🦖' },
      { letter: 'E', word: 'Egg', icon: '🥚' },
      { letter: 'F', word: 'Frog', icon: '🐸' },
      { letter: 'G', word: 'Goblin', icon: '👺' },
      { letter: 'H', word: 'Helicopter', icon: '🚁' },
      { letter: 'I', word: 'Iguana', icon: '🦎' },
      { letter: 'J', word: 'Jam', icon: '🍓' },
      { letter: 'K', word: 'King', icon: '👑' },
      { letter: 'L', word: 'Lollipop', icon: '🍭' },
      { letter: 'M', word: 'Mushroom', icon: '🍄' },
      { letter: 'N', word: 'Nut', icon: '🥜' },
      { letter: 'O', word: 'Octopus', icon: '🐙' },
      { letter: 'P', word: 'Pig', icon: '🐷' },
      { letter: 'Q', word: 'Queen', icon: '👸' },
      { letter: 'R', word: 'Rainbow', icon: '🌈' },
      { letter: 'S', word: 'Sun', icon: '☀️' },
      { letter: 'T', word: 'Truck', icon: '🚛' },
      { letter: 'U', word: 'Unicorn', icon: '🦄' },
      { letter: 'V', word: 'Volcano', icon: '🌋' },
      { letter: 'W', word: 'Watermelon', icon: '🍉' },
      { letter: 'X', word: 'Xylophone', icon: '🎶' },
      { letter: 'Y', word: 'Yarn', icon: '🧶' },
      { letter: 'Z', word: 'Zebra', icon: '🦓' },
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

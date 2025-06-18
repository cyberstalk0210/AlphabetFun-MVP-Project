import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AlphabetGrid = ({ letters }) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} justifyContent="center">
      {letters.map((item) => (
        <Grid item key={item.id}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#ffca28', color: '#fff', minWidth: 60, minHeight: 60, fontSize: 24 }}
              onClick={() => navigate(`/letter/${item.letter}`)}
            >
              {item.letter}
            </Button>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default AlphabetGrid;
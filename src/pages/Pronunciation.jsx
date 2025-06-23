import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import '../index.css';

const syllables = [
  {
    color: 'bg-pink-200',
    items: ['ba', 'be', 'bi', 'bo', 'bu'],
    extras: ['baba', 'bek', 'bilak', 'bola', 'buloq'],
  },
  {
    color: 'bg-green-200',
    items: ['da', 'de', 'di', 'do', 'du'],
    extras: ['daraxt', 'devor', 'dil', 'dov', 'dunyo'],
  },
  {
    color: 'bg-yellow-100',
    items: ['ka', 'ko', 'ku', 'ki', 'ke'],
    extras: ['kitob', 'ko‘z', 'kun', 'kish', 'kel'],
  }
];


function Pronunciation() {
  const playSound = (syllable) => {
    console.log(`Playing sound for: ${syllable}`);
    // Optionally add Howler.js or HTML5 Audio
    new Audio(`/sounds/${syllable}.mp3`).play();
  };

  return (
    <Container maxWidth="md" className="py-8">
      <Typography variant="h4" gutterBottom className="text-center font-bold text-yellow-600">
        Fun Syllable Adventure
      </Typography>

      <div className="space-y-6">
        {syllables.map((set, index) => (
          <div
            key={index}
            className={`flex items-center p-4 rounded-2xl shadow-md ${set.color}`}
          >
            {/* Arrow on the left */}
            <div className="mr-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Syllables */}
            <div className="flex flex-wrap gap-3">
              {set.items.map((syllable) => (
                <Button
                  key={syllable}
                  onClick={() => playSound(syllable)}
                  className="bg-green-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full transition duration-200 transform hover:scale-110"
                >
                  {syllable}
                </Button>
              ))}
            </div>

            {/* Second line (if exists) */}
            {set.extras && (
              <div className="ml-6 flex flex-wrap gap-3">
                {set.extras.map((syllable) => (
                  <Button
                    key={syllable}
                    onClick={() => playSound(syllable)}
                    className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full transition duration-200 transform hover:scale-110"
                  >
                    {syllable}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Pronunciation;

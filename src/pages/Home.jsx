import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AlphabetGrid from "../components/AlphabetGrid";
import { Button } from "@mui/material";
import Card from "../components/card";
import Image1 from "../assets/Group 2812.png"; // Bolakay rasmi
import Image2 from "../assets/Group 2811.png"; // Belgilar rasmi
import Image3 from "../assets/Group 2809.png"
const Home = () => {
  const [letters, setLetters] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   setLetters([
  //     { id: 1, letter: 'A' },
  //     { id: 2, letter: 'B' },
  //     { id: 3, letter: 'C' },
  //     { id: 4, letter: 'D' },
  //     { id: 5, letter: 'E' },
  //   ]);
  // }, []);

  const cardData = {
    title: "Professional Curriculum",
    tagline: "Helps Parents Rest Easy",
    items: [
      "Systematic curriculum for kids ages 3-8",
      "Interactive AI content fosters and maintains kids' interest in learning",
      "Immersive classes with interactive learning experiences",
    ],
    icon: <span className="text-green-600 font-bold">🎓</span>, // Custom icon
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* HEADER + IMAGE */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* CHAP TOMON: Matn va tugmalar */}
        <div>
          <div className="flex items-center mb-4">
            <img src={Image2} alt="Icon" className="w-16 h-16 mr-4" />
            <h1 className="text-green-600 text-3xl font-bold">
              Bolalarga Alifbeni o'rgating
            </h1>
          </div>
          <p className="text-gray-600 mb-4">
            Interaktiv va qiziqarli mashg'ulotlar orqali harf tanlashni
            osonlashtiring!
          </p>
          <Button
            variant="contained"
            color="success"
            size="large"
            style={{ textTransform: "none" }}
            onClick={() => navigate('/chart')}
          >
            Darsni boshlash
          </Button>
        </div>

        {/* O‘NG TOMON: Rasm */}
        <div className="flex justify-center">
          <img src={Image1} alt="Kid Learning" className="max-w-md w-full" />
        </div>
      </div>

      {/* Harflar grid */}
      <div className="mt-10">
        <AlphabetGrid letters={letters} />
        <h3 className="text-black-600 font-bold text-4xl text-center mt-16">
          Adaptive Learning Path + Best Teachers = Alphabet Mastery
        </h3>
      </div>
      <div className="flex items-center gap-5 justify-center mt-20 mb-20  ">
        <Card {...cardData} />
        <Card {...cardData} />
        <Card {...cardData} />
      </div>
    </div>
  );
};

export default Home;

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

const cardData1 = {
  title: "Boshlang‘ich Alifbo Kursi",
  tagline: "Farzandingiz uchun eng yaxshi start",
  items: [
    "3 yoshdan 8 yoshgacha bolalar uchun moslashtirilgan darslar",
    "Interaktiv ovozli harflar, so‘z va rasm o‘xshatish o‘yinlari",
    "Bolani o‘yin orqali o‘rganishga jalb qiluvchi platforma",
  ],
  icon: <span className="text-yellow-500 font-bold">🔤</span>,
};


const cardData2 = {
  title: "Harfma-Harf Rivojlanish",
  tagline: "O‘yin orqali savodxonlikni o‘rgating",
  items: [
    "Har bir harf uchun maxsus ovoz, so‘z va o‘yinlar",
    "Sun’iy intellekt yordamida individual yondashuv",
    "Interaktiv mashqlar orqali tez va samarali o‘rganish",
  ],
  icon: <span className="text-pink-500 font-bold">📚</span>,
};

const cardData3 = {
  title: "Alifbo Akademiyasi",
  tagline: "Farzandingizning birinchi bilim makoni",
  items: [
    "Harflarni tanish, eshitish va so‘z bilan bog‘lash imkoniyati",
    "Rangli rasmlar va quvnoq ovozlar bilan esda qoladigan tajriba",
    "Bosqichma-bosqich savodxonlikni shakllantiruvchi dastur",
  ],
  icon: <span className="text-blue-600 font-bold">🧠</span>,
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
        O‘yin orqali o‘rganish + Ustozlar yordami = Harflarni mukammal egallash
        </h3>
      </div>
      <div className="flex items-center gap-5 justify-center mt-20 mb-20  ">
        <Card {...cardData1} />
        <Card {...cardData2} />
        <Card {...cardData3} />

        
      </div>
    </div>
  );
};

export default Home;

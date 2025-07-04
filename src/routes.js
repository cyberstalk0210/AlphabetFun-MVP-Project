import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LetterPage from './pages/LetterPage';
import ParentDashboard from './pages/ParentDashboard';
import AlphabetChart from './components/AlphabetChart';
import MatchGame from './pages/MatchGame';
import QuizGame from './pages/QuizGame';
import Pronunciation from './pages/Pronunciation';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/letter/:letter" element={<LetterPage />} />
    <Route path="/dashboard" element={<ParentDashboard />} />
    <Route path="/chart" element={<AlphabetChart />} />
    <Route path="/quiz" element={<QuizGame />} />
    <Route path="/match" element={<MatchGame/>} />
    <Route path="*" element={<Home />} />
    <Route path="/pronunciation" element={<Pronunciation/>} />
  </Routes>
);

export default RoutesComponent;
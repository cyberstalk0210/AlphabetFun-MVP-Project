import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LetterPage from './pages/LetterPage';
import ParentDashboard from './pages/ParentDashboard';
import AlphabetChart from './components/AlphabetChart';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/letter/:letter" element={<LetterPage />} />
    <Route path="/dashboard" element={<ParentDashboard />} />
    <Route path="/chart" element={<AlphabetChart />} />
  </Routes>
);

export default RoutesComponent;
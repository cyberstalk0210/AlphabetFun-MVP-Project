import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesComponent from './routes';

function App() {
  return (
    <Router>
      <Header />
      <RoutesComponent />
      <Footer />
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Routes from './routes';

const NavigateSetter = () => {
  History.navigate = useNavigate();
  return null;
};

function App() {
  return (
    <Router>
      <NavigateSetter />
      <Routes />
    </Router>
  );
}

export default App;

import './App.scss';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

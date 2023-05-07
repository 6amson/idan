import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Mainbody from './components/Mainbody'


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path='/' element={< Main/>}></Route>
        </Routes>
        <Routes>
          <Route exact path='/main' element={< Mainbody/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';



function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path='/' element={< Main/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

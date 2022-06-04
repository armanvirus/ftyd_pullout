import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
     <Route element={<Login/>} path="login"/>
     <Route element={<Register/>} path="register"/>
     <Route element={<Quiz/>} path="/"/>
     <Route element={<Courses/>} path="courses"/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;

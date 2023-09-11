import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <hr className='hr'/>
          <Routes >
            <Route exact path="/" element={<TodoList />} />
            {/* <Route exact path="/todo/*" element={<Todo />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

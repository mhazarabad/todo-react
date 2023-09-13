import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';
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
            <Route path="/todo/:todo_id/" element={<TodoDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

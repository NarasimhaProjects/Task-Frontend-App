import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App () {
  return (
    <Router>
      <div className='container'>
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
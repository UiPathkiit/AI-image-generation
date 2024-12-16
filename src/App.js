import './App.css';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <HomePage/>
       <Login/>
    </div>
  );
}

export default App;
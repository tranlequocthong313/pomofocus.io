import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import style from './App.module.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <div className={style.app}>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

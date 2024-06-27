import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route,Router, Routes} from 'react-router-dom';
import Missionlist from './Missionlist';
import Missiondetails from './Missiondetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Missionlist/>}></Route>
        <Route path='/missiondetails' element={<Missiondetails/>}></Route>
      </Routes>
    </>
  );
}

export default App;

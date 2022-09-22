
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Contatos } from './Componentes/Contatos/index';
import { Servicos } from "./Componentes/Servicos/index";
import { Home } from "./Pages/Home";

function App() {
  return (

    <>
 <BrowserRouter>     
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Contatos' element={<Contatos/>}/>
       <Route path='/Servicos' element={<Servicos/>}/>
    </Routes>
  </BrowserRouter>
     

    </>
  );
}

export default App;


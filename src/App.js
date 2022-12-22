import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './navbar e footer/Navbar';
import Footer from './navbar e footer/Footer'
import Home from './pages/Home';
import Lancamento from './pages/Lancamento';
import MontarPc from './pages/MontarPc';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produtos from './pages/Produtos';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='lancamento' element={<Lancamento/>}/>
        <Route path='montarpc' element={<MontarPc/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='produto' element={<Produtos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

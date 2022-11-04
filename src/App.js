import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./components/Inicio";
import Carrito from "./components/Carrito";
import Ofertas from "./components/Ofertas";
import Contactenos from "./components/Contactenos";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/producto" element={<Main />}></Route>
            <Route path="/ofertas" element={<Ofertas />}></Route>
            <Route path="/contactenos" element={<Contactenos />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route path="/Carrito" exact element={<Carrito />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

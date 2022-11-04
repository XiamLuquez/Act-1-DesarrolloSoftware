import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./components/Inicio";
import Carrito from "./components/Carrito";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            
            <Route path="producto" element={<Main />}>
              {" "}
            </Route>
            <Route path="/Carrito" exact element={<Carrito />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

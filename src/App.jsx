import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import IngridientsPage from "./pages/IngridientsPage";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/country" Component={CountryPage} />
        <Route path="/ingridient" Component={IngridientsPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

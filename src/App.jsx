import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodPage from "./pages/FoodPage";
import FoodDetailPage from "./pages/FoodDetailPage";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/food" Component={FoodPage} />
        <Route path="/food/:id" Component={FoodDetailPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { useState } from "react";
import { AppContext } from "./helpers/ContextApi/AppContext";
import { displayData } from "./helpers/data/data";
import Cursor from "./components/Cursor/Cursor";

function App() {
  const [value, setValue] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const dataLength = displayData.length - 1;
  const nextSlide = () => {
    if (value !== dataLength) {
      setValue(value + 1);
    } else {
      setValue(dataLength);
    }

    console.log(value);
  };

  const prevSlide = () => {
    if (value !== 0) {
      setValue(value - 1);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <Cursor />
      <AppContext.Provider
        value={{ value, setValue, nextSlide, prevSlide, menuOpen, toggleMenu }}
      >
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

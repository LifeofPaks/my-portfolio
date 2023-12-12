import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { useState } from "react";
import { AppContext } from "./helpers/ContextApi/AppContext";
import { displayData } from "./helpers/data/data";


function App() {
  const [value, setValue] = useState(0);

  const dataLength = displayData.length -1
  const nextSlide = () => {
    if(value !== dataLength){
      setValue(value + 1)
    } else{
      setValue(dataLength)
    }

    console.log(value)
  };

  const prevSlide = () => {
    if(value !== 0){
      setValue(value - 1 )
    } else{
return
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ value, setValue, nextSlide, prevSlide }}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;


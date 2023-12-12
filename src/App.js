import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

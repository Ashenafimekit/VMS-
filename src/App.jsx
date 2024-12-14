import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



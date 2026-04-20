import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invitation from "./pages/Invitation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invitation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
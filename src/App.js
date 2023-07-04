import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CardPage from "pages/CardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllProjectsCollection from "./components/AllProjectsCollection";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/all-projects" element={<AllProjectsCollection />} />
    </Routes>
  );
};

export default App;

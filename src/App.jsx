import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Syllabus from "./pages/Syllabus.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
    </Router>
  );
}

export default App;

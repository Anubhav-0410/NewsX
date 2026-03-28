import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "bg-dark text-light min-vh-100" : "min-vh-100"}>
        <Navbar 
          onSearch={setQuery} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        <Routes>
          <Route path="/" element={<News category="business" query={query} />} />
          <Route path="/business" element={<News category="business" query={query} />} />
          <Route path="/sports" element={<News category="sports" query={query} />} />
          <Route path="/technology" element={<News category="technology" query={query} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
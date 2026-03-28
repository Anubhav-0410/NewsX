import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch, darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      
      <Link className="navbar-brand" to="/">NewsX</Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/business">Business</Link>
        <Link className="nav-link" to="/sports">Sports</Link>
        <Link className="nav-link" to="/technology">Technology</Link>
      </div>
      <form className="d-flex ms-auto" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary ms-2">Search</button>
      </form>

      <button
        className="btn btn-secondary ms-3"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode " : "Dark Mode "}
      </button>

    </nav>
  );
};

export default Navbar;
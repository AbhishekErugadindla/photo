import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token")); // Load token from local storage

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  // Function to handle logout
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Clear token in state
    setToken(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar token={token} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={token ? <Grid photos={photos} /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route
            path="/login"
            element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

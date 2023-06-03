import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Recipes from "./pages/Recipes";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/recipes"
            element={<Recipes input={input} setInput={setInput} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

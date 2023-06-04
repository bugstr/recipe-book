import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Recipes from "./pages/Recipes";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");

  function searchRecipes(event) {
    setInput(event);
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                input={input}
                setInput={setInput}
                recipes={recipes}
                setRecipes={setRecipes}
              />
            }
          />
          <Route
            path="/recipes"
            element={
              <Recipes
                input={input}
                setInput={setInput}
                recipes={recipes}
                setRecipes={setRecipes}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

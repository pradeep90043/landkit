import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Landings from "./Components/Landings";
import Account from "./Components/Account";
import Documentation from "./Components/Documentation";
import Pages from "./Components/Pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/landings" element={<Landings />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/documentation" element={<Documentation />} />
        <Route exact path="/pages" element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;

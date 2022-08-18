import "./App.css";
import { Navbar } from "./components";
import { Home, Rent } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxW="80vw" ml="auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rent" element={<Rent />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

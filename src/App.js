import "./App.css";
import { Navbar } from "./components";
import { Rent } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxW="80vw">
        <Routes>
          <Route path="rent" element={<Rent />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

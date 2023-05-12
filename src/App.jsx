import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

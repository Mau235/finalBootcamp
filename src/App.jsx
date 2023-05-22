import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { toast, Toaster } from 'sonner'

function App() {
  document.title = 'Recetas'

  return (
    <>
      <Toaster richColors />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

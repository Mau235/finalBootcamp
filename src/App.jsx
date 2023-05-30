import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { Toaster } from 'sonner'
import Wall from "./page/Wall";
import img from './assets/mainBack.jpg'
import { MIN_SCREEN } from "./constant/myConstant";
import OneRecipe from "./page/OneRecipe";

function App() {
  document.title = 'Recetas'

  return (
    <>
      <Toaster richColors />
      <Header />
      <div
        style={{
          backgroundImage: `url(${img})`,
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          transition:'backgroundPosition .2s .5s',
          minHeight: MIN_SCREEN
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wall" element={<Wall />} />
          <Route path="/wall/receta/:id" element={<OneRecipe />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

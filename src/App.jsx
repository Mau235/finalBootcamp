import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { Toaster } from 'sonner'
import Wall from "./page/Wall";
import img from './assets/mainBack.jpg'
import { MIN_SCREEN } from "./constant/myConstant";

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
          minHeight: MIN_SCREEN
        }}
      >
        <Routes>
          <Route path="/" element={<Wall />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

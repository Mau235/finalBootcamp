import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import { Toaster } from 'sonner';
import Wall from './page/Wall';
import img from './assets/mainBack.jpg';
import { MIN_SCREEN } from './constant/myConstant';
import OneRecipe from './page/OneRecipe';
import CreateAndEdit from './page/CreateAndEdit';
import { useEffect } from 'react';
import { useGlobalContext } from './context/GlobalContext';

function App() {
  document.title = 'Recetas';
  const { setUserData } = useGlobalContext();

  useEffect(() => {
    return () => {
      setUserData({});
    };
  }, []);
  return (
    <>
      <Toaster richColors position="top-left" />
      <Header />
      <div
        style={{
          backgroundImage: `url(${img})`,
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          minHeight: MIN_SCREEN,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wall" element={<Wall />} />
          <Route path="/wall/receta/:id" element={<OneRecipe />} />
          <Route path="/wall/crear" element={<CreateAndEdit />} />
          <Route path="/wall/crear/:id" element={<CreateAndEdit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

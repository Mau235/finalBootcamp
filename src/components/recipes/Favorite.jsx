import { useEffect, useState } from 'react';
import { start, startOn } from '../icons';
import { LOCAL_FAVORITE } from '../../constant/myConstant';

const Icon = { start, startOn };

export default function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlerClick = () => {
    if (!isFavorite) {
      if (localStorage.getItem(LOCAL_FAVORITE)) {
        const local = JSON.parse(localStorage.getItem(LOCAL_FAVORITE));
        const obj = [...local, id];
        localStorage.setItem(LOCAL_FAVORITE, JSON.stringify(obj));
        setIsFavorite(true);
      } else {
        localStorage.setItem(LOCAL_FAVORITE, JSON.stringify([id]));
        setIsFavorite(true);
      }
    } else {
      const local = JSON.parse(localStorage.getItem(LOCAL_FAVORITE));
      const obj = local.filter((favorite) => favorite !== id);
      localStorage.setItem(LOCAL_FAVORITE, JSON.stringify(obj));
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(LOCAL_FAVORITE)) {
      const local = JSON.parse(localStorage.getItem(LOCAL_FAVORITE));
      setIsFavorite(local.find(id));
    }
  }, []);

  return (
    <div
      className="absolute right-2 top-2 scale-110 cursor-pointer"
      onClick={handlerClick}
    >
      {isFavorite ? <Icon.startOn /> : <Icon.start />}
    </div>
  );
}

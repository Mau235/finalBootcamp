import { useEffect, useState } from 'react';
import { BODY_CONTAINER, BORDER_BLACK } from '../constant/myConstant';
import { useGlobalContext } from '../context/GlobalContext';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { showArrBuy } from '../helpers/tools';

export default function FavoritePage() {
  const [data, setData] = useState([]);
  const { buyProduct } = useGlobalContext();

  useEffect(() => {
    setData(showArrBuy(buyProduct));
  }, []);

  return (
    <>
      <div className={BODY_CONTAINER}>
        <div className={`${BORDER_BLACK} p-6 mb-6`}>
          <h1 className="text-3xl font-semibold text-center">
            Carrito de compras
          </h1>
        </div>
        {data.length > 0 && (
          <Card className="bg-white rounded-lg border-2 border-black">
            <Table className="mt-5">
              <TableHead>
                <TableRow className="font-bold text-base text-black">
                  <TableHeaderCell>Receta</TableHeaderCell>
                  <TableHeaderCell>Ingredientes</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Badge>
                        <span className="text-lg">{item.ingredients}</span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </div>
    </>
  );
}

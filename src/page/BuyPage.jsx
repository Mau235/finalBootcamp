import { useEffect, useState } from "react";
import { BODY_CONTAINER, BORDER_BLACK } from "../constant/myConstant";
import { useGlobalContext } from "../context/GlobalContext";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";

export default function FavoritePage() {
  const [data, setData] = useState([])
  const { buyProduct } = useGlobalContext()

  useEffect(() => {
    setData(buyProduct)
    console.log(data, ' ----data')
  }, [])  

  return (
    <>
      <div className={BODY_CONTAINER}>
        <div className={`${BORDER_BLACK} p-6 mb-6`}>
          <h1 className="text-3xl font-semibold text-center">Carrito de compras</h1>
        </div>
        {data.length > 0 ?? (
          <Card>
            <Title>Lista de compras</Title>
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Ingredientes</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.name}</TableCell>
                    {item.ingredients.map((ing) => (
                      <TableCell key={ing._id}>{ing.name}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </div>
    </>
  )
}

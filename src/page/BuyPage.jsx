import { useEffect, useState } from "react";
import { BODY_CONTAINER, BORDER_BLACK } from "../constant/myConstant";
import { useGlobalContext } from "../context/GlobalContext";
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react";
import { showArrBuy } from "../helpers/tools";

export default function FavoritePage() {
  const [data, setData] = useState([])
  const { buyProduct } = useGlobalContext()

  useEffect(() => {
    setData(showArrBuy(buyProduct))
  }, [])

  console.log(buyProduct, ' ----data')

  return (
    <>
      <div className={BODY_CONTAINER}>
        <div className={`${BORDER_BLACK} p-6 mb-6`}>
          <h1 className="text-3xl font-semibold text-center">Carrito de compras</h1>
        </div>
        {data.length > 0 && (
          <Card>
            <Title>List of Swiss Federal Councillours</Title>
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Position</TableHeaderCell>
                  <TableHeaderCell>Department</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>'{item.name}'</TableCell>
                    {/*  <TableCell>
                      <Text>{item.ingredients[i]}</Text>
                    </TableCell> */}
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

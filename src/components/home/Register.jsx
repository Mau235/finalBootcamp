import { Button, Metric, TextInput } from "@tremor/react";
import Transitions from "../transitions/Transitions";
import { useState } from "react";
import { useRegister } from "../../hooks/useLogIn";

export default function Register({ stateWatch }) {
  const [form, setForm] = useState({})

  const handlerRegister = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
    console.log(form)
  }

  const handlerSubmit = () => {
    useRegister(form)
      .then(data => {
        console.log(data, '----dataReg')
      })
  }

  return (
    <Transitions direction='left'>
      <div className="p-8 bg-white rounded-lg border-2 border-black" >
        <Metric className="text-center mb-8">Registrarse</Metric>
        <div className="grid gap-4">
          <TextInput placeholder='Nombre completo' />
          <TextInput placeholder='Email' onChange={handlerRegister} name='email' />
          <TextInput placeholder='Password' onChange={handlerRegister} name='password' />
          <Button onClick={handlerSubmit}>
            Registrarse
          </Button>
          <Button variant="light" onClick={() => stateWatch(true)}>
            Ya tengo cuenta
          </Button>
        </div>
      </div>
    </Transitions>
  )
}

import { Button, Metric, TextInput } from "@tremor/react";
import Transitions from "../transitions/Transitions";
import { useState } from "react";
import { useRegister } from "../../hooks/useLogIn";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function Register({ stateWatch }) {
  const [form, setForm] = useState({})
  const go = useNavigate()

  const handlerRegister = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handlerSubmit = async () => {
    try {
      const res = await useRegister(form)
      if (res.errors) {
        toast.error('Hubo un error al reguistrarse')
      } else {
        toast.success('Registro correcto !!!');
        go('/wall')
      }
      console.log(res, '--res')
    } catch (error) {
      console.log(error, '--error')
    }
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

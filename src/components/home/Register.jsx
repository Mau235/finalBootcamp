import { useState } from "react";
import { Button, Metric, TextInput } from "@tremor/react";
import Transitions from "../transitions/Transitions";
import { register } from "../../fetch/fetchLogIn";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../context/GlobalContext";

export default function Register({ stateWatch }) {
  const [form, setForm] = useState({})
  const go = useNavigate()
  const { setUserData } = useGlobalContext()

  const handlerRegister = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handlerSubmit = async () => {
    toast.promise(register(form), {
      loading: 'Registrando...',
      success: (data) => {
        setUserData(data)
        go('/wall')
        return `${data.email} registro correctamente`
      },
      error: (err) => {
        return `Hubo un error al crear un usuario (${err}`
      }
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

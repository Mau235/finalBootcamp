import { useState } from "react";
import { Button, Metric, TextInput } from "@tremor/react";
import Transitions from "../transitions/Transitions";
import { register } from "../../fetch/fetchLogIn";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../context/GlobalContext";
import { BORDER_BLACK } from "../../constant/myConstant";
import { useForm } from "../../hooks/useForm";

export default function Register({ stateWatch }) {
  const go = useNavigate()
  const { setUserData } = useGlobalContext()
  const { form, buildForm } = useForm()  

  const handlerSubmit = async () => {
    toast.promise(register(form), {
      loading: 'Registrando...',
      success: (data) => {
        setUserData(data)
        console.log(data,'---data')
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
      <div className={`p-8 ${BORDER_BLACK}`} >
        <Metric className="text-center mb-8">Registrarse</Metric>
        <div className="grid gap-4">
          <TextInput placeholder='Nombre completo' />
          <TextInput placeholder='Email' onChange={buildForm} name='email' />
          <TextInput placeholder='Password' onChange={buildForm} name='password' />
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

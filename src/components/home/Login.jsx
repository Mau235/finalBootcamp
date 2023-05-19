import { Button, Metric, TextInput } from "@tremor/react";
import { useState } from "react";
import Transitions from "../transitions/Transitions";
import { useLogin } from "../../hooks/useLogIn";

export default function Login({ stateWatch }) {
  const [form, setForm] = useState({})

  const handlerForm = (event) => {
    const { value, name } = event.target
    setForm({
      ...form,
      [name]: value
    })
    console.log(form,'--form')
  }

  const handlerSubmit = async () => {
    useLogin(form)
      .then(res => {
        console.log(res, '---res')
      })
      .catch(err => {
        console.log(err, '---err');
      })
  }

  return (
    <Transitions direction='right'>
      <div
        className="p-8 bg-white rounded-lg border-2 border-black"

      >
        <Metric className="text-center mb-8">Ingrese</Metric>
        <div className="grid gap-4">
          <TextInput type="email" placeholder='Email' name='email' onChange={handlerForm} />
          <TextInput type='password' placeholder='Password' name='password' onChange={handlerForm} />
          <Button onClick={handlerSubmit}>
            Ingsar
          </Button>
          <Button variant="light" onClick={() => stateWatch(false)}>
            Registrarse
          </Button>

        </div>
      </div>
    </Transitions>
  )
}

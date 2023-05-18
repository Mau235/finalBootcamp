import { Button, Metric, TextInput } from "@tremor/react";
import { useState } from "react";
import { motion } from "framer-motion";
import Transitions from "../transitions/Transitions";

export default function Login({ stateWatch }) {
  const [form, setForm] = useState({})

  const handlerForm = (event) => {
    const { value, name } = event.target
  }


  return (
    <Transitions direction='right'>
      <div
        className="p-8 bg-white rounded-lg border-2 border-black"

      >
        <Metric className="text-center mb-8">Ingrese</Metric>
        <div className="grid gap-4">
          <TextInput type="email" placeholder='Email' name='email' onClick={handlerForm} />
          <TextInput type='password' placeholder='Password' name='password' onClick={handlerForm} />
          <Button>
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

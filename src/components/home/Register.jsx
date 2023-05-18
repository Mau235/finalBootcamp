import { Button, Metric, TextInput } from "@tremor/react";
import { motion } from "framer-motion";
import Transitions from "../transitions/Transitions";

export default function Register({ stateWatch }) {
  return (
    <Transitions direction='left'>
      <div
        
        className="p-8  bg-white rounded-lg border-2 border-black"
        >
        <Metric className="text-center mb-8">Registrarse</Metric>
        <div className="grid gap-4">
          <TextInput placeholder='Nombre completo' />
          <TextInput placeholder='Email' />
          <TextInput placeholder='Password' />
          <Button>
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

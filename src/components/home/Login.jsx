import { Button, Metric, TextInput } from "@tremor/react";

export default function Login({ stateWatch }) {
  return (
    <>
      <div className="p-8 bg-white rounded-lg border-2 border-black">
        <Metric className="text-center mb-8">Ingrese</Metric>
        <div className="grid gap-4">
          <TextInput type="email" placeholder='Email' />
          <TextInput type='password' placeholder='Password' />
          <Button>
            Ingsar
          </Button>
          <Button variant="light" onClick={() => stateWatch(false)}>
            Registrarse
          </Button>

        </div>
      </div>
    </>
  )
}

import { Button, Metric, TextInput } from "@tremor/react";

export default function Login() {
  return (
    <>
      <div className="p-8 grid gap-4 bg-white rounded-lg border border-2 border-black">
        <Metric className="text-center ">Log in</Metric>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Password' />
        <Button>
          Ingsar
        </Button>
        
      </div>
    </>
  )
}

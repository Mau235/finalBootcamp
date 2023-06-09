import { Button, Metric, TextInput } from '@tremor/react';
import { useState } from 'react';
import Transitions from '../transitions/Transitions';
import { login } from '../../fetch/fetchLogIn';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import { BORDER_BLACK } from '../../constant/myConstant';
export default function Login({ stateWatch }) {
  const [form, setForm] = useState({});
  const { setUserData } = useGlobalContext()
  const go = useNavigate()

  const handlerForm = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlerSubmit = async () => {
    toast.promise(login(form), {
      loading: 'Ingresando...',
      success: (data) => {
        setUserData(data)
        go('/wall')
        return `${data.email} ingreso correctamente`
      },
      error: 'Hubo un error en el usuario o la contraseña',
    })
  };

  return (
    <Transitions direction="right">
      <div className={`p-8 ${BORDER_BLACK}`}>
        <Metric className="text-center mb-8">Ingresar</Metric>
        <div className="grid gap-4">
          <TextInput
            type="email"
            placeholder="Email"
            name="email"
            onChange={handlerForm}
          />
          <TextInput
            placeholder="Password"
            name="password"
            onChange={handlerForm}
          />
          <Button onClick={handlerSubmit}>Ingesar</Button>
          <Button variant="light" onClick={() => stateWatch(false)}>
            Registrarse
          </Button>
        </div>
      </div>
    </Transitions>
  );
}

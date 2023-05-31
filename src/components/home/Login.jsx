import { Button, Metric, TextInput } from '@tremor/react';
import { useState } from 'react';
import Transitions from '../transitions/Transitions';
import { useLogin } from '../../hooks/useLogIn';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';

export default function Login({ stateWatch }) {
  const [form, setForm] = useState({});
  const { logIn, setUserData, userData } = useGlobalContext()
  const go = useNavigate()

  const handlerForm = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlerSubmit = async () => {
    /*  try {
       const res = await useLogin(form);
        console.log(res, '--res Login');
        if (res.errors) {
          toast.error('Hubo un error en el usuario o la contraseña');
        } else {
          toast.success('Ingreso correcto');
          go('/wall')
        }*/

    toast.promise(useLogin(form), {
      loading: 'Ingresando...',
      success: (data) => {
        logIn(data)
        go('/wall')
        return `Ingreso correcto de ${data.email}`
      },
      error: 'Hubo un error en el usuario o la contraseña',
    })



    /*  toast.promise(promise, {
        loading: 'Loading...',
        success: (data) => {
          return `${data.name} has been added!`;
        },
        error: 'Error',
      });











  } catch (error) {
    console.log(error);
    toast.error('No hay conección');
  }
*/
  };

  return (
    <Transitions direction="right">
      <div className="p-8 bg-white rounded-lg border-2 border-black">
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

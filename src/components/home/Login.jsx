import { Button, Metric, TextInput } from '@tremor/react';
import Transitions from '../transitions/Transitions';
import { login } from '../../fetch/fetchLogIn';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import { BORDER_BLACK } from '../../constant/myConstant';
import { useForm } from '../../hooks/useForm';

export default function Login({ stateWatch }) {
  const { setUserData } = useGlobalContext();
  const go = useNavigate();
  const { form, buildForm } = useForm()

  const handlerSubmit = async () => {
    toast.promise(login(form), {
      loading: 'Ingresando...',
      success: (data) => {
        setUserData(data);
        go('/wall');
        return `${data.email} ingreso correctamente`;
      },
      error: 'Hubo un error en el usuario o la contraseña',
    });
  };

  return (
    <Transitions direction="right">
      <div className={`p-8 ${BORDER_BLACK}`}>
        <Metric className="text-center mb-8">
          <span>Ingresar</span>
        </Metric>
        <div className="grid gap-4">
          <TextInput
            type="email"
            placeholder="Email"
            name="email"
            onChange={buildForm}
          />
          <TextInput
            placeholder="Password"
            name="password"
            onChange={buildForm}
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

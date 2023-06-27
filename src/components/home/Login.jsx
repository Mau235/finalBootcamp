import { useState } from 'react';
import { Button, Metric, TextInput } from '@tremor/react';
import Transitions from '../transitions/Transitions';
import { login } from '../../fetch/fetchLogIn';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import { BORDER_BLACK } from '../../constant/myConstant';
import { useForm } from '../../hooks/useForm';
import { logInVaid } from '../../helpers/validators';

export default function Login({ stateWatch }) {
  const [disa, setDisa] = useState(false);
  const { setUserData } = useGlobalContext();
  const go = useNavigate();
  const { form, buildForm } = useForm();
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const handlerSubmit = async () => {
    setDisa(true);

    toast.promise(login(form), {
      loading: 'Ingresando...',
      success: (data) => {
        setUserData(data);
        go('/wall');
        return `${data.email} ingreso correctamente`;
      },
      error: (err) => {
        const { msg } = getErrorMsg()
        return msg
      },
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
            error={error.email}
          />
          <TextInput
            placeholder="Contraseña"
            name="password"
            onChange={buildForm}
            error={error.password}
          />
          <Button onClick={handlerSubmit} disabled={disa}>
            Ingesar
          </Button>
          <Button
            variant="light"
            disabled={disa}
            onClick={() => stateWatch(false)}
          >
            Registrarse
          </Button>
        </div>
      </div>
    </Transitions>
  );
}

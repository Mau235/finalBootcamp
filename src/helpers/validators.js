let msg = '';

export const getErrorMsg = () => {
  return msg;
};

export const setErrorMsgLog = (res) => {
  if (res.errors) {
    msg = 'Hubo un error en el usuario o la contraseña';
  }
  if (res.error.message) {
    msg = 'El usuario o la contraseña no son validos';
  }
};

export const logInVaid = (form) => {
  let resp = '';
  const objError = {
    email: false,
    password: false,
  };
  if (form.email === '') {
    resp.email= 'ingrese'
  }
  return {
    resp,
    objError,
  };
};

export const logInVaid = (errors) => { 
  const res = ''
  errors.map(error => {
    if(error.param === 'email'){
      res= 'Escriba un mail'
    }
    if(error.param === 'password'){
      res= 'Escriba un password'
    }
  })

  
 
};
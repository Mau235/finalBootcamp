let msg = "";

export const getErrorMsg = () => {
  return msg;
};

export const setErrorMsgLog = (res) => {
  if (res.errors) {
    msg = "Hubo un error en el usuario o la contraseña";
  }
  if (res.error.message) {
    msg = "El usuario o la contraseña no son validos";
  }
};


export const setErrorMsgRegister = (res) => {
  if(res.errors[0].param === "email" || res.errors[1].param === "email") {
    msg = "El email no es valido"
  }
  if( res.errors[0].param === "password" ){
    msg = "La contraseña tiene que tener mas de 6 digitos"
  }
  if(res.noLogIn){
    msg = "Hubo un error al ingresar. Intenta nuevamente"
  }
}


export const setErrorMsgCreatAndEdit = (res) => {
  if( res.errors[0].param === "name"){
    msg = "El nombre de es requerido"
  }
  if( res.errors[0].param === "description"){
    msg = "La descripcion es requerido"
  }
  if( res.errors[0].param === "imagePath"){
    msg = "Ingrese una URL de la imagen"
  }
  if(res.server){
    msg = res.server
  }
}
export const validRecip = (form) => {
  const arrErr = [];
  const errBool = {}

  if (form.name === '') {
    arrErr.push({ msg: 'Ingrese un nombre' });
    errBool.name =
  }
  if (form.description === '') {
    arrErr.push({ msg: 'Ingrese una descripcion' });
  }
  if (form.imagePath === '') {
    arrErr.push({ msg: 'Ingrese un URL para la imagen' });
  }
  if (form.ingredients.length === 0) {
    arrErr.push({ msg: 'Ingrese al menos un ingrediente' });
  }

  if (arrErr.length === 0) {
    return false;
  } else {
    return arrErr;
  }
};

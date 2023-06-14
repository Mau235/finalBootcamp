
// Primera letra en mayuscula
export const capitalize = (wo) => {
    const word = wo.trim()
    const res = word.charAt(0).toUpperCase() + word.slice(1)
    return res
};


// crea un id unico 
export const createId = () => new Date().getTime();

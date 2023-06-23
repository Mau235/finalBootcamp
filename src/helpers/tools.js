// Primera letra en mayuscula
export const capitalize = (wo) => {
    const word = wo.trim()
    const res = word.charAt(0).toUpperCase() + word.slice(1)
    return res
};

// crea un id unico 
export const createId = () => new Date().getTime();


export const showArrBuy = (arr) => {
    let obj = []
    for (const Arr1 of arr) {
        for (const Arr2 of arr.ingredients) {
            obj.push({ name:Arr1.name , ingredient:Arr2.name})
        }
    }
    console.log(obj,'-------------obj')
    return obj
}
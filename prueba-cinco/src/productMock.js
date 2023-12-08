const products = [
    {id: "1", name: "margaritas", description: "arreglo de margaritas", stock: 20},
    {id: "2", name: "rosas", description: "arreglo de rosas", stock: 15},
    {id: "3", name: "helechos", description: "arreglo de helechos", stock: 6},
    {id: "4", name: "cactáceas", description: "arreglo de cactáceas", stock: 8},
];

export const getProducts = () => {
    return new Promise ( (resolve, reject) => {
        if ( products.length > 0) {
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        } else {
            reject("No hay productos")
        }
    })
}
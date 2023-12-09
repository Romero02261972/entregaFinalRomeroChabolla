const items = [
    {id: "1", name: "margaritas", description: "arreglo de margaritas", stock: 20,},
    {id: "2", name: "rosas", description: "arreglo de rosas", stock: 15, imageURL: "/istockphoto-1166042531-1024x1024.jpg"},
    {id: "3", name: "helechos", description: "arreglo de helechos", stock: 6},
    {id: "4", name: "cactáceas", description: "arreglo de cactáceas", stock: 8},
];

export const getItems = () => {
    return new Promise ( (resolve, reject) => {
        if ( items.length > 0) {
            setTimeout(()=>{
                resolve(items)
            }, 2000)
        } else {
            reject("No hay productos")
        }
    })
}
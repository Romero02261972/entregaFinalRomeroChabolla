import { useEffect, useState } from "react";
import { getProducts } from "../../productMock";
import { ItemList } from "../ItemList/ItemList";

export const ItemDetailContainer = () => {

const [items, setProducts] = useState([]);
const [isLoading, setIsLoading]= useState(true);
useEffect(()=> {
    getProducts()
    .then(resp => {{
    console.log(resp)
    setProducts(resp)
setIsLoading(!isLoading)
  }})
    .catch(error => console.log(error))
}, [])
  return (
    <div>
{
  isLoading ? <h3>Cargando productos...</h3>:

  items.map(item => <ItemList key ={item.id} name ={item.name} description={item.description} stock={item.stock}/>
  )
} 
</div>
  )
}

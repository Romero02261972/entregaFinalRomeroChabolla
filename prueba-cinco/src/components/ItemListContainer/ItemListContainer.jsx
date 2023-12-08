import { useEffect, useState } from "react";
import { getItems } from "../../itemMock";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

const [items, setItems] = useState([]);
const [isLoading, setIsLoading]= useState(true);
useEffect(()=> {
    getItems()
    .then(resp => {{
    console.log(resp)
    setItems(resp)
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

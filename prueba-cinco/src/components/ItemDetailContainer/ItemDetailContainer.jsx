import { useEffect, useState } from "react"
import {getItems} from "../../itemMock";
import {ItemDetail} from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const getItem = async (id) => {
    try{
      const itemsData = await getItems();
      const selectedItem = itemsData.find((item) => item.id === id);

    if (selectedItem) {
      setItem(selectedItem);
      console.log(selectedItem);
    } else {
      console.error("Item not found");
    }
  } catch (error) {
    console.error("Error fetching items:", error);
  }
   };

  useEffect(() =>{
    getItem("2");
  }, []);

  return (
  <div className="container d-flex-justify-content-center mt-5">
    {item && <ItemDetail {...item}/>}
  </div>
    );

};


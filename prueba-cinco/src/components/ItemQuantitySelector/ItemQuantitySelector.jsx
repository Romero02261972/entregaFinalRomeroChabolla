import { useState } from "react";
import { Button } from "../Button/Button";

export const Count = ({initial=1,max}) => {
const [ItemCount,setCount]= useState(initial);
const increment = ()=> {
    if((ItemCount ===max)) {
        return setCount(ItemCount)
    }
    setCount(ItemCount +1);
}
const decrement = ()=> {
    if(ItemCount === 0){
        return setCount(0);
    }
    setCount(ItemCount - 1)
}

  return (
    <>
  <Button text="+" functionClick={increment}/>
<strong>{ItemCount}</strong>
<Button text="-" functionClick={decrement}/>
    </>
  )
}

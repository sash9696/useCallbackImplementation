import React, { useEffect, useState } from 'react';

function List({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log("Fetching items");
        setItems(getItems());
    }, [getItems]);//CREATES A NEW FUNCTION DUE TO CHANGE IN DEPENDECNY
    //SOLUTION IS TO USE USE CALL BACK TO MEMOIZE THE GETITEMS
  return (
    <div>
        {items.map((item)=> <div key={item} >{item}</div>)}
    </div>
  )
}

export default List
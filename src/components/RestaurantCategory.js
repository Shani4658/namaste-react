import ItemList from "./ItemList";
import { useState, useEffect } from "react";
const RestaurantCategory = ({data,showItems,setShowItems}) => {
    console.log(data);
    // const[showItems,setShowItems] = useState(false);
    const handleClick = () =>{
        // setShowItems(!showItems);
        setShowItems();
    }
     
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer"  onClick={handleClick}>
                {/* Accordian Header */}
                <span className="font-bold text-lg">
                    {data.title}
                    ({data.itemCards.length})
                </span>
                <span>
                    🔽
                </span>
            </div>
            {/* Accordian Body */}
            <div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}


export default RestaurantCategory;
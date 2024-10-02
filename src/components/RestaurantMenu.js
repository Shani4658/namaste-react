import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import {useParams} from "react-router-dom";

const RestaurantMenu = () =>{

    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    // console.log(resInfo);

    if(resInfo === null) return <Shimmer />;

    const { name,cuisines,costForTwoMessage,sla,avgRatingString,totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;

    // data.cards[2].card.card.info.totalRatingsString

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(itemCards);
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

    const {offers} = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

    // console.log(offers);

    return (
        <div className="text-center ">
            <h1 className="p-4 m-4 text-center font-bold text-2xl">{name}</h1>
            <div className="mx-[400px] p-4 border border-slate-400 rounded-2xl shadow-2xl w-[800px] place-content-center">

                <div className="flex font-bold">
                <h3>{avgRatingString}⭐( {totalRatingsString }  ) </h3>
                <h3 className="px-2">•{costForTwoMessage}</h3>
                </div>

                
                <div className="text-left">
                    <h3 className="font-bold text-orange-600">{cuisines.join(' , ')}</h3>
                    <h3 className="font-bold">{sla.deliveryTime} mins</h3>
                    <ul id="offers">
                        {offers.map((discount) => (
                            <li key={discount.info.header}>{discount.info.header}</li>
                        ))}
                    </ul> 
                </div>               
            </div>
            {/* <ul className="m-4 p-4 text-left mx-[500px]">
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
                ))}

                
            </ul> */}

            {
                categories.map((category,index) => (
                    <RestaurantCategory
                     key={category?.card?.card?.title}
                     data={category?.card?.card}
                     showItems={index === showIndex? true:false}
                     setShowItems={ () => setShowIndex(index)}/>
                ))
            };

             
        </div>
    );
        

    
};
export default RestaurantMenu;
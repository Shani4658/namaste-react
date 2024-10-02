import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    

    const {name,cuisines,sla,avgRatingString,cloudinaryImageId,costForTwo} = resData?.info;
    return (
        <div data-testid="resCard" className='p-4 mx-4 w-[250px] bg-slate-100  border rounded-xl scale-80  hover:bg-slate-200 '>
            <img alt="loading" src={CDN_URL+cloudinaryImageId}
             className='w-40 mx-6 h-40 border  rounded-xl scale-80  hover:scale-105 ease-in duration-500'></img>
            <h3 className="font-bold text-lg py-4">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{avgRatingString}⭐</h4>
        </div>
    )
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-blue-200 m-2 px-4 rounded-lg">Opened</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
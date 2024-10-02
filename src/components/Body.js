import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import useOnLineStatus from "../utils/useOnLineStatus";
import UserContext from '../utils/UserContext';

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    // console.log(listOfRestaurant);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        // console.log(json);
    };

    // return listOfRestaurants.length === 0?(<Shimmer/>):(
    //     <div className='body'>
    //         <div className='filter'>
    //             <button className="filter-btn"
    //                 onClick={()=>{
    //                     const filteredList = listOfRestaurants.filter((res)=>(res.info.avgRatingString > 4) || (res.info.avgRatingString ==="NEW"));
    //                     setListOfRestaurant(filteredList);
    //                 }}
    //             >
    //                 Top Rated Restaurants
    //             </button>
    //         </div>
    //         <div className="restaurant-container">
    //             {
    //                 listOfRestaurants.map((res)=>(
    //                     <RestaurantCard key={res.info.id} resData = {res} />
    //                 ))
    //             }
                
    //         </div>
    //     </div>
    // )

    const onLineStatus = useOnLineStatus();

    if(onLineStatus === false)
        return(
            <h1>
                Check Your Internet Connection you seem to be offline!!!
            </h1>
        );

    const {setUserName,loggedInUser} = useContext(UserContext);

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
       ) : (
        <div className="body">
            <div className="flex m-4">
                <div className="flex">
                        <input
                            type="text"
                            data-testid = "searchInput"
                            className="m-4 p-4 border border-slate-400 rounded-2xl shadow-md focus:ring-black text-slate-900 placeholder-slate-400" placeholder="Search restaurants"
                            value={searchText}
                             onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        />
                        <button
                         className="px-6 bg-green-100 m-5 border rounded-xl border-green-500 shadow-md hover:bg-green-300"
                           onClick={() => {
                            const filtertheRestaurant = listOfRestaurant.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setFilteredRestaurant(filtertheRestaurant);
                            }}
                        >
                        Search
                        </button>
                </div>
                    
                <button
                    className="px-6 bg-green-100 m-5 border rounded-xl border-green-500 shadow-md hover:bg-green-300"
                    onClick={() => {
                                const filterLogic = listOfRestaurant.filter((res) => {
                                return res.info.avgRating > 4;
                                });
                            setFilteredRestaurant(filterLogic);
                        }}
                >
                Top Restaurants
                </button>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName</label>
                    <input className="border border-black"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                </div>
            </div>
            
            
        
        



        <div className=" flex flex-wrap">
            
        {filteredRestaurant.map((restaurant) => (
        <Link
         key={restaurant.info.id}
          to = {"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant}/>):
            (<RestaurantCard resData={restaurant}/>)}
        </Link>
        ))}
        </div>
        </div>
       );
       
    
    


    
};

export default Body;
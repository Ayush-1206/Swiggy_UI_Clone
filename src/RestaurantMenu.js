import { useState,useEffect } from "react";
import { REST_MENU } from "../utils/config";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { useResMenu } from "../utils/useResMenu";

const RestaurantMenu = () => {
    // const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams();
    const resMenu = useResMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(`${REST_MENU}${resId}`);
    //     const json = await data.json();
    //     setResMenu(json);
    //     console.log(json);
    // };

    if(resMenu == null) return <Shimmer/>
   
    const {name, cloudinaryImageId, costForTwoMessage ,avgRating, cuisines} = resMenu?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
                            
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <div>MENU</div>
            <ul>
                {   
                    itemCards.map((item)=> (
                    <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)                 
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
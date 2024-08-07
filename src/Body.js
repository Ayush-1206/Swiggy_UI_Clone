import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { HOME_URL } from "../utils/config";
import { Link } from "react-router-dom";


const Body = ()=>{
    const [resList, setResList] = useState([]);
    const [filterResList, setFilterResList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    
    const fetchData= async()=>{
        const data = await fetch(HOME_URL);
        const json = await data.json();
       
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
       fetchData(); 
       console.log("useEffect called");
    },[]);
    
    if(resList.length === 0){
        return <Shimmer/>;
    }
    return (
        <div className="body">
            <div>
                <div>
                <input value={searchValue} onChange={(e)=>(setSearchValue(e.target.value)) } size="50"></input>
                <button onClick={()=>{
                        let searchResult = resList.filter((res)=>res?.info?.name.includes(searchValue));
                        setFilterResList(searchResult);
                    }}>search
                </button>
                </div>
                <div>
                <button className="filter-btn" 
                    onClick={()=>{
                        let filtered = resList.filter((res)=>res?.info?.avgRating >4);
                        setFilterResList(filtered);

                    }}>Top Restraunts
                </button>
                <button className="refresh-btn" onClick={()=>{setFilterResList(resList)}}>Refresh</button>
                </div>
            </div>

            <div className="res-container">
                {
                filterResList.map((rest)=>{
                    return <Link key={rest.info.id} to={"/restaurants/" + rest.info.id} ><RestaurantCard  resData={rest}/></Link>
                })
                }
                {
                filterResList.map((rest)=>{
                    return <Link key={rest.info.id} to={"/restaurants/" + rest?.info?.id} ><RestaurantCard  resData={rest}/></Link>
                })
                }
            </div>
           
        </div>
    )

}

export default Body;
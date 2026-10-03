
import ResturentCard from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constant";


const Body = () => {
    
    const [listOfRsturent,setListOfResturent]=useState([]);
    const [searchValue, setSearchValue]=useState("");
    const [filterdResturent,setFilterdResturent]=useState("")

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data = await fetch(SWIGGY_URL);
        const json=await data.json();
        const restaurants =json.data.cards[4]
                            ?.card
                            ?.card
                            ?.gridElements
                            ?.infoWithStyle
                            ?.restaurants;
        setListOfResturent(restaurants);
        setFilterdResturent(restaurants);
    }


  return !listOfRsturent.length? <Shimmer/>:(
    <div className="body">
      
      <div className="filter">
        <div className="search-container">
          <input 
            className="search-box"
            value={searchValue}
            onChange={e=>{
              setSearchValue(e.target.value)
            }}/>
          <button 
            className="search-btn"
            onClick={()=>{
              const filterdRes=listOfRsturent.filter(
                res=>res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilterdResturent(filterdRes)
              }}
            >Search</button>
        </div>
        <button 
            className="filter-btn"
            onClick={()=>{
                let list=listOfRsturent.filter(res=>res.info.avgRating>4)
                setFilterdResturent(list)
            }}
        >
            Top Rated Resturent
        </button>
      </div>
      <div className="res-container">
        {
          filterdResturent.map((resturent)=>(
            <ResturentCard key={resturent.info.id} resData={resturent}/>
          ))
        }
      </div>
    </div>
  );
};


export default Body
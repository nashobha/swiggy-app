import RestaurantCard ,{withResOpenedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [serachText, setSerchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardOpened = withResOpenedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();

    const finalData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (ele) => ele?.info
      );
      console.log(finalData);

    setListOfRestaurants(finalData);
    setFilteredRestaurants(finalData);
  };

  
  const {setUserName, loggedInUser} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks you are offline, Please check your internet connection</h1>
    );
    
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={serachText}
            onChange={(e) => {
              setSerchText(e.target.value);
            }}
          />
          <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaturant = listOfRestaurants?.filter((res) =>
                res.name.toLowerCase().includes(serachText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            let listOfRestaurantsDetails = listOfRestaurants?.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestaurants(listOfRestaurantsDetails);
          }}
        >
          Top rated Restaurants
        </button>
        <label>UserName : </label>
        <input className="border border-black p-2"
         value={loggedInUser}
         onChange = {(e)=>setUserName(e.target.value)}/>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link key={restaurant?.id} to={"/restaurant/" + restaurant?.id}>
              {restaurant?.availability?.opened ? (<RestaurantCardOpened resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)
              }
             
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

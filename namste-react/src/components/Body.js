import {restrauntlist} from "../config";
import HotelCard from "./HotelCard";
import {useState ,useEffect} from "react";

const filterData = (searchText, data) => {
    return data.filter((item) => 
        item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
};

const Body = () => {
  const [restraunts, setRestraunts] = useState(restrauntlist);
  const [searchInput, setSearchInput] = useState("");
  console.log("tanu");

  useEffect(() => {
    getRestraunts();
    console.log("tanu");
  
  }, []);

  async function getRestraunts() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       console.log("tanu");
       console.log(json);
      
      
    } catch (error) {
      console.error("Error fetching restaurant data:", error);

      
      
    }

  };
  



  return (
      <>
          <div className="search-container">
              <input 
                  type="text"  
                  className="search-input" 
                  placeholder="Search" 
                  value={searchInput} 
                  onChange={(e) => setSearchInput(e.target.value)}
              />
              <button 
                  className="search-btn" 
                  onClick={() => {
                      const data = filterData(searchInput, restraunts);
                      setRestraunts(data);
                  }}
              >
                  Search
              </button>
          </div>
          <div className="hotelcard">
              {restraunts.map((hotel) => {
                  return <HotelCard {...hotel.info} key={hotel.info.id} />;
              })}
          </div>
      </>
  );
};

export default Body;
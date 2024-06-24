import { useState } from "react";
import FilterNav from "../components/FilterNav";
import RestaurantsItem from "../components/RestaurantsItem";
import { SkeletonRestaurantItem } from "../components/Skeleton";

const MainPage = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateRestaurants = (filteredRestaurants) => {
    setIsLoading(true);
    setTimeout(() => {
      setAllRestaurants(filteredRestaurants);
      setDisplayedRestaurants(filteredRestaurants.slice(0, visibleCount));
      setIsLoadMore(false);
      setIsLoading(false);
    }, 1000);
  };

  const toggleLoadMore = () => {
    if (isLoadMore) {
      setDisplayedRestaurants(allRestaurants.slice(0, 8)); 
      setVisibleCount(8);
    } else {
      setDisplayedRestaurants(allRestaurants);
    }
    setIsLoadMore(!isLoadMore); 
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 my-8 lg:my-10">
      <FilterNav updateRestaurants={updateRestaurants} />
      <div className="mx-6 md:mx-10 lg:mx-20 space-y-8 mb-3">
        <h1 className="text-2xl">All Restaurants</h1>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonRestaurantItem key={index} />
            ))}
          </div>
        ) : (
          <RestaurantsItem
            restaurants={displayedRestaurants}
            onLoadMore={toggleLoadMore}
            isLoadMore={isLoadMore}
            hasMore={allRestaurants.length > 8}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;

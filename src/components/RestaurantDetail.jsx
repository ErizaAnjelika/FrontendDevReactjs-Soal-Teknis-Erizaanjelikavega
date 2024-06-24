import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRestaurantsDetails } from "../services/api";
import { SkeletonDetail } from "./Skeleton";

const RestaurantsDetail = () => {
  const { fsq_id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const data = await getRestaurantsDetails(fsq_id);
        setRestaurant(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
        setIsLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [fsq_id]);

  if (!restaurant) {
    return <SkeletonDetail />;
  }

  const renderReviews = () => {
    if (!restaurant.tips || restaurant.tips.length === 0) {
      return <p>No reviews available</p>;
    }

    return restaurant.tips.map((tip, index) => (
      <div key={index} className="border p-4 rounded-md">
        <div className="flex items-center mb-2">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-bold">User Name</p>
            <p className="text-sm text-gray-500">Rating: N/A</p>
          </div>
        </div>
        <p className="mt-2">{tip.text}</p>
      </div>
    ));
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="overflow-hidden">
        {restaurant.photos && (
          <img
            src={`${restaurant.photos[0].prefix}original${restaurant.photos[0].suffix}`}
            alt={restaurant.name}
            className="lg:w-full lg:h-full h-80 w-full object-cover"
          />
        )}
      </div>
      <div className="space-y-4 p-4 md:p-7 lg:p-10 overflow-y-auto">
        <div className="flex items-center gap-4">
          <Link to="/restaurants">
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Link>
          <h1 className="text-2xl">Overview</h1>
        </div>
        <div className="space-y-2 border-b py-3">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-blue-700 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 ">
              {restaurant.rating}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Review</h1>
          {renderReviews()}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsDetail;

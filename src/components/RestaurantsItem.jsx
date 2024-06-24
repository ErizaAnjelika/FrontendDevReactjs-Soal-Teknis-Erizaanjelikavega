import React from "react";
import { Link } from "react-router-dom";

const RestaurantsItem = ({
  restaurants,
  onLoadMore,
  isLoadMore,
  hasMore,
}) => {
  return (
    <>
      {restaurants.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="w-auto h-auto bg-white space-y-2 ">
                <img
                  src={
                    restaurant.photo.prefix +
                    "original" +
                    restaurant.photo.suffix
                  }
                  alt={restaurant.name}
                  className="w-full h-44 object-cover"
                />

                <h1
                  className="m-1 text-md font-medium text-gray-700 capitalize
            hover:cursor-pointer"
                  title={restaurant.name}
                >
                  {restaurant.name.length > 15
                    ? `${restaurant.name.slice(0, 15)}...`
                    : restaurant.name}
                </h1>
                <div className="flex items-center">
                  <p className="text-gray-800 text-sm capitalize">
                    {restaurant.categories[0].name}{" "}
                    <span>
                      -{" "}
                      {restaurant.price
                        ? restaurant.price === 1
                          ? "$"
                          : restaurant.price === 2
                          ? "$$"
                          : restaurant.price === 3
                          ? "$$$"
                          : "$$$$"
                        : "Not available"}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
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
                      {restaurant.rating ? restaurant.rating : "Not rated"}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm uppercase flex items-center">
                    {restaurant.hours.isOpen ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-500 text-sm uppercase">
                          Open Now
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-500 text-sm uppercase">
                          closed
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <Link to={`/details/${restaurant.fsq_id}`}>
                  <button className="w-full mt-3 bg-blue-900 text-center p-1 hover:bg-blue-400 text-white text-sm uppercase">
                    learn more
                  </button>
                </Link>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="mx-auto text-center">
              <button
                className="text-base p-1 w-full md:w-64 lg:w-80 border border-gray-300 text-blue-800 uppercase hover:bg-blue-500 hover:text-white hover:outline-none"
                onClick={onLoadMore}
              >
                {isLoadMore ? "Show Less" : "Load More"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="">
          <h1 className="text-center">Data not available</h1>
        </div>
      )}
    </>
  );
};

export default RestaurantsItem;

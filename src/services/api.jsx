import axios from "axios";

const API_KEY = "fsq3+ok9ZkoZg02VUbM//bYPhNBc4DQU0P9jzQI/X1roSs4=";

export const getRestaurants = async (categories, openNow, price) => {
  try {
    const fields = "fsq_id,name,location,rating,price,hours,categories,photos";
    const response = await axios.get(
      `https://api.foursquare.com/v3/places/search?categories=${categories}&fields=${fields}`,
      {
        headers: {
          accept: "application/json",
          Authorization: API_KEY,
        },
      }
    );

    let restaurants = response.data.results;

    // Client-side filtering
    if (openNow) {
      restaurants = restaurants.filter((restaurant) => {
        const hours = restaurant.hours;
        return hours && hours.isOpen;
      });
    }

    if (price !== "") {
      restaurants = restaurants.filter((restaurant) => {
        return restaurant.price && restaurant.price === parseInt(price);
      });
    }

    // Mapping the restaurant data to include only necessary fields
    restaurants = restaurants.map((restaurant) => ({
      fsq_id: restaurant.fsq_id,
      name: restaurant.name,
      location: restaurant.location,
      rating: restaurant.rating,
      price: restaurant.price,
      hours: restaurant.hours,
      categories: restaurant.categories,
      photo: restaurant.photos ? restaurant.photos[0] : null,
    }));

    console.log(response.data);
    return restaurants;
  } catch (error) {
    console.error("Error fetching data from Foursquare:", error);
    throw error;
  }
};

export const getRestaurantsDetails = async (fsq_id) => {
  try {
    const fields =
      "name,rating,price,hours,categories,photos,description,tips";
    const response = await axios.get(
      `https://api.foursquare.com/v3/places/${fsq_id}?fields=${fields}`,
      {
        headers: {
          accept: "application/json",
          Authorization: API_KEY,
        },
      }
    );
    console.log(response.data.results);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant details:", error);
    throw error;
  }
};

export const login = (email, password) => {
  const bodyPayload = {
    email: email,
    password: password,
  };
  return axios.post("https://reqres.in/api/login", bodyPayload);
};

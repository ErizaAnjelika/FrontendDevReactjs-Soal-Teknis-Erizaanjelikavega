import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getRestaurants } from "../services/api";
import { useState, useEffect } from "react";

const FilterNav = ({ updateRestaurants }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    openNow: false,
    price: "",
    category: "13065",
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleLogout = () => {
    Swal.fire({
      title: "Konfirmasi Logout",
      text: "Anda yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("accessToken");
        navigate("/login");
        Swal.fire("Logout Berhasil", "Anda telah keluar dari akun.", "success");
      }
    });
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const applyFilters = async () => {
    try {
      const { category, openNow, price } = filters;
      const filteredRestaurants = await getRestaurants(
        category,
        openNow,
        price
      );
      updateRestaurants(filteredRestaurants);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  const clearFilters = () => {
    setFilters({
      openNow: false,
      price: "",
      category: "13065",
    });
  };

  return (
    <div className="space-y-8">
      <div className="mx-6 md:mx-10 lg:mx-20 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Restaurants</h1>
          <button
            onClick={handleLogout}
            className="text-blue-700 bg-transparent border py-1 w-20 hover:bg-blue-400 hover:text-white hover:border-none"
          >
            Log out
          </button>
        </div>
        <p className="text-gray-500 w-full lg:w-[70%]">
          Discover new flavors and experiences at our restaurants. Stay positive
          and enjoy the journey!
        </p>
      </div>
      <div className="border-b border-t w-full p-2">
        <div className="flex items-center justify-between gap-8 flex-wrap mx-5 md:mx-10 lg:mx-20">
          <div className="flex items-center flex-wrap gap-8">
            <h1>Filter By:</h1>
            <div className="flex items-center gap-2 border-b">
              <input
                type="checkbox"
                name="openNow"
                checked={filters.openNow}
                onChange={handleFilterChange}
              />
              <label htmlFor="openNow">Open Now</label>
            </div>
            <div className="border-b">
              <select
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
              >
                <option value="">Price</option>
                <option value="1">Murah</option>
                <option value="2">Sedang</option>
                <option value="3">Mahal</option>
                <option value="4">Sangat Mahal</option>
              </select>
            </div>
            <div className="border-b">
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="13065">Categories</option>
                <option value="13225">Restorant Indonesia</option>
                <option value="13315">Resto Mie</option>
                <option value="13276">Resto Shu shi</option>
              </select>
            </div>
          </div>
          <div className="border border-black rounded-sm">
            <button onClick={clearFilters} className="p-1 w-24">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterNav;

import { rent } from "../../db/RentHouse/rentHouse";

export const applyFilters = (filterState) => {
  const {
    filterBySearch,
    filterByDate,
    filterByCity,
    filterByPrice: { lowerLimit, upperLimit },
    filterByBedrooms,
  } = filterState;
  let filteredProducts = rent.data;

  if (filterBySearch.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.houseName.toLowerCase().slice(0, filterBySearch.length) ===
        filterBySearch.toLowerCase()
    );
  }

  if (filterByCity !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.city === filterByCity
    );
  }

  if (filterByDate.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        new Date(product.moveInBy).getTime() >= new Date(filterByDate).getTime()
    );
  }

  if (lowerLimit.length > 0 || lowerLimit > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rentPrice >= lowerLimit
    );
  }

  if (upperLimit.length > 0 || upperLimit > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rentPrice <= upperLimit
    );
  }

  if (filterByBedrooms.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filterByBedrooms.includes(product.bedrooms)
    );
  }
  return filteredProducts;
};

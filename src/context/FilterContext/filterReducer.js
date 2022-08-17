export const initialState = {
  filterByCity: "All",
  filterByDate: "",
  filterByPrice: { lowerLimit: "", upperLimit: "" },
  filterByBedrooms: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CITY":
      return { ...state, filterByCity: action.payload };
    case "FILTER_BY_DATE":
      return { ...state, filterByDate: action.payload };
    case "MINIMUM_PRICE":
      return {
        ...state,
        filterByPrice: { ...state.filterByPrice, lowerLimit: action.payload },
      };
    case "MAXIMUM_PRICE":
      return {
        ...state,
        filterByPrice: { ...state.filterByPrice, upperLimit: action.payload },
      };
    case "FILTER_BY_BEDROOM_ADD":
      return {
        ...state,
        filterByBedrooms: state.filterByBedrooms.concat(action.payload),
      };
    case "FILTER_BY_BEDROOM_REMOVE":
      return {
        ...state,
        filterByBedrooms: state.filterByBedrooms.filter(
          (room) => room !== action.payload
        ),
      };

    default:
      return state;
  }
};

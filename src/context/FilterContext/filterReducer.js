export const initialState = {
  filterByCity: "All",
  filterByDate: "",
  filterByPrice: { lowerLimit: null, upperLimit: null },
  filterByBedrooms: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CITY":
      return { ...state, filterByCity: action.payload };
    case "FILTER_BY_DATE":
      return { ...state, filterByDate: action.payload };

    default:
      return state;
  }
};

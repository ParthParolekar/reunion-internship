import { createContext, useContext, useReducer } from "react";
import { filterReducer, initialState } from "./filterReducer";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={[filterState, filterDispatch]}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

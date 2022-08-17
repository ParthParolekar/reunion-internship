import { Center, Select } from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../../../context/FilterContext/filterContext";
import { rent } from "../../../db/RentHouse/rentHouse";

const CityFilter = () => {
  const [filterState, filterDispatch] = useFilter();

  const cities = rent.data.reduce((prev, curr) => {
    if (!prev.includes(curr.city)) {
      prev.push(curr.city);
    }
    return prev;
  }, []);

  const filterHandler = (e) => {
    filterDispatch({ type: "FILTER_BY_CITY", payload: e.target.value });
  };

  return (
    <Center w="15%" height="100px">
      <Select
        size="sm"
        onChange={(e) => filterHandler(e)}
        value={filterState.filterByCity}
      >
        <option value="All" defaultChecked>
          All
        </option>
        {cities?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Select>
    </Center>
  );
};

export default CityFilter;

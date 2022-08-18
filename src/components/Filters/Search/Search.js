import { Center, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../../../context/FilterContext/filterContext";

const Search = () => {
  const [filterState, filterDispatch] = useFilter();
  //   console.log(filterState);
  const searchHandler = (e) => {
    filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value });
  };
  return (
    <Center w="90%" height="100px">
      <Text width="70%" fontSize="lg">
        Search
      </Text>
      <Input
        value={filterState.filterBySearch}
        onChange={(e) => searchHandler(e)}
      />
    </Center>
  );
};

export default Search;

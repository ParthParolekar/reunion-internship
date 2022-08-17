import { Button } from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../../../context/FilterContext/filterContext";
import { applyFilters } from "../../../utils/ApplyFilters/applyFilters";

const ClearFilterButton = () => {
  const [filterState, filterDispatch] = useFilter();
  const clearFilterHandler = () => {
    filterDispatch({ type: "CLEAR_FILTERS" });

    applyFilters(filterState);
  };
  return (
    <Button
      colorScheme="orange"
      variant="solid"
      width="100%"
      onClick={clearFilterHandler}
    >
      Clear Filters
    </Button>
  );
};

export default ClearFilterButton;

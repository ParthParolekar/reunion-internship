import { Heading, Highlight } from "@chakra-ui/react";
import React from "react";
import { Filters } from "../../components";
import DisplayData from "../../components/DisplayData/DisplayData";
import { useFilter } from "../../context/FilterContext/filterContext";

import { applyFilters } from "../../utils/ApplyFilters/applyFilters";

const Rent = () => {
  const [filterState] = useFilter();
  let filteredProducts = applyFilters(filterState);

  return (
    <div>
      <Heading lineHeight="tall" my="10" mx="auto">
        <Highlight
          query="Rent"
          styles={{ px: "4", py: "1", rounded: "full", bg: "orange.100" }}
        >
          Search properties to Rent
        </Highlight>
      </Heading>

      <Filters />

      <DisplayData filteredProducts={filteredProducts} />
    </div>
  );
};

export default Rent;

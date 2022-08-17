import { Flex } from "@chakra-ui/react";
import React from "react";

import ClearFilterButton from "./ClearFilterButton";

const FilterButtons = () => {
  return (
    <Flex
      direction="row"
      width="50%"
      mx="auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <ClearFilterButton />
    </Flex>
  );
};

export default FilterButtons;

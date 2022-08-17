import { Flex } from "@chakra-ui/react";
import React from "react";
import { CityFilter } from "./index";

const Filters = () => {
  return (
    <Flex
      width="100%"
      height="max-content"
      flexDirection="row"
      alignItems="center"
      backgroundColor="white"
      borderRadius="10px"
      justifyContent="space-around"
    >
      <CityFilter />
      <CityFilter />
      <CityFilter />
      <CityFilter />
      <CityFilter />
    </Flex>
  );
};

export default Filters;

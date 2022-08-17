import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../../context/FilterContext/filterContext";
import { CityFilter, DateFilter, PriceFilter } from "./index";

const Filters = () => {
  const [filterState] = useFilter();
  console.log(filterState);

  return (
    <Accordion
      allowToggle
      width="100%"
      backgroundColor="white"
      borderRadius="10px"
      mb="10"
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Filters
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex
            width="100%"
            height="max-content"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            borderRadius="10px"
            justifyContent="space-around"
          >
            <CityFilter />
            <DateFilter />
            <PriceFilter />
            <CityFilter />
            <CityFilter />
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;

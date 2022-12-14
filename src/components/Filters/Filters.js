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
import {
  CityFilter,
  DateFilter,
  PriceFilter,
  BedroomsFilter,
  FilterButtons,
  Search,
} from "./index";

const Filters = ({ onHomePage }) => {
  return (
    <Accordion
      allowToggle
      width="100%"
      backgroundColor="white"
      borderRadius="10px"
      mb="10"
      defaultIndex={onHomePage && [0]}
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
            justifyContent="center"
          >
            <Search />
            <CityFilter />
            <DateFilter />
            <PriceFilter />
            <BedroomsFilter />
            {!onHomePage && <FilterButtons />}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;

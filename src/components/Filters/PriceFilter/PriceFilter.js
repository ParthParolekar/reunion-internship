import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../../../context/FilterContext/filterContext";

const PriceFilter = () => {
  const [filterState, filterDispatch] = useFilter();
  const minimumPriceHandler = (e) => {
    filterDispatch({
      type: "MINIMUM_PRICE",
      payload: Number(e.target.value),
    });
  };

  const maximumPriceHandler = (e) => {
    filterDispatch({
      type: "MAXIMUM_PRICE",
      payload: Number(e.target.value),
    });
  };

  return (
    <Center w="90%" height="100px">
      <Menu closeOnSelect={false}>
        <MenuButton
          width="100%"
          as={Button}
          backgroundColor="white"
          border="1px solid black"
          rightIcon={<ChevronDownIcon />}
        >
          Price
        </MenuButton>

        <MenuList width="100%">
          <NumberInput
            min={0}
            width="90%"
            mx="auto"
            value={filterState.filterByPrice.lowerLimit}
          >
            Minimum Price
            <NumberInputField onChange={(e) => minimumPriceHandler(e)} />
          </NumberInput>

          <NumberInput
            min={0}
            width="90%"
            mx="auto"
            value={filterState.filterByPrice.upperLimit}
          >
            Maximum Price
            <NumberInputField onChange={(e) => maximumPriceHandler(e)} />
          </NumberInput>
        </MenuList>
      </Menu>
    </Center>
  );
};

export default PriceFilter;

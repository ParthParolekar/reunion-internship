import {
  Button,
  Center,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../../../context/FilterContext/filterContext";
import { rent } from "../../../db/RentHouse/rentHouse";

const BedroomsFilter = () => {
  const [filterState, filterDispatch] = useFilter();

  const rooms = rent.data.reduce((prev, curr) => {
    if (!prev.includes(curr.bedrooms)) {
      prev.push(curr.bedrooms);
    }
    return prev;
  }, []);

  const bedroomsClickHandler = (e) => {
    if (e.target.checked) {
      filterDispatch({
        type: "FILTER_BY_BEDROOM_ADD",
        payload: Number(e.target.value),
      });
    } else {
      filterDispatch({
        type: "FILTER_BY_BEDROOM_REMOVE",
        payload: Number(e.target.value),
      });
    }
  };

  return (
    <Center w="90%" height="100px">
      <Menu closeOnSelect={false}>
        <MenuButton
          width="100%"
          as={Button}
          backgroundColor="white"
          border="1px solid black"
        >
          BHK
        </MenuButton>

        <MenuList width="100%" flex flexDirection="column">
          {rooms
            .sort((a, b) => a - b)
            .map((room) => (
              <MenuItem key={room}>
                <Checkbox
                  value={room}
                  checked={filterState.filterByBedrooms.includes(room)}
                  onChange={bedroomsClickHandler}
                >
                  {room}BHK
                </Checkbox>
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </Center>
  );
};

export default BedroomsFilter;

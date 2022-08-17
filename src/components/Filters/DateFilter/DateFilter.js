import { Center, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../../../context/FilterContext/filterContext";

const DateFilter = () => {
  const [filterState, filterDispatch] = useFilter();
  const dateFilterHandler = (e) => {
    filterDispatch({ type: "FILTER_BY_DATE", payload: e.target.value });
  };
  return (
    <Center w="90%" height="100px">
      <Text width="70%" fontSize="lg">
        Move In By
      </Text>
      <Input type="date" onChange={(e) => dateFilterHandler(e)} />
    </Center>
  );
};

export default DateFilter;

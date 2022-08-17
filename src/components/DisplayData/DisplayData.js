import { Flex } from "@chakra-ui/react";
import React from "react";
import Card from "../Card/Card";
import { rent } from "../../db/RentHouse/rentHouse";

const DisplayData = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      wrap="wrap"
      rowGap="22px"
      width="100%"
    >
      {rent.data.map((property) => (
        <Card property={property} key={property._id} />
      ))}
    </Flex>
  );
};

export default DisplayData;

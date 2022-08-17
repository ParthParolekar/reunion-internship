import { Flex } from "@chakra-ui/react";
import React from "react";
import Card from "../Card/Card";

const DisplayData = ({ filteredProducts }) => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      wrap="wrap"
      rowGap="22px"
      width="100%"
      pb="10"
    >
      {filteredProducts?.map((property) => (
        <Card property={property} key={property._id} />
      ))}
    </Flex>
  );
};

export default DisplayData;

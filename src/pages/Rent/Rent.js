import { Box, Container, Flex, Heading, Highlight } from "@chakra-ui/react";
import React from "react";
import DisplayData from "../../components/DisplayData/DisplayData";

const Rent = () => {
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

      <DisplayData />
    </div>
  );
};

export default Rent;

import React from "react";
import { Heading, Flex, Container, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container backgroundColor="white" height="50px" maxW="100vw">
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        height="100%"
      >
        <Heading>Logo</Heading>

        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          h="100%"
          w="20vw"
        >
          <NavLink to="buy">
            <Button colorScheme="orange" variant="ghost">
              Buy
            </Button>
          </NavLink>
          <NavLink to="rent">
            <Button colorScheme="orange" variant="ghost">
              Rent
            </Button>
          </NavLink>
        </Flex>

        <Heading>asdasd2</Heading>
      </Flex>
    </Container>
  );
};

export default Navbar;

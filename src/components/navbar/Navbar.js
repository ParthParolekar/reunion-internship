import React from "react";
import { Heading, Flex, Container, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container backgroundColor="white" height="10vh" maxW="100vw">
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        w="100%"
        height="100%"
      >
        <Heading mr="10" cursor="pointer" onClick={() => navigate("/")}>
          Renuion
        </Heading>

        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          h="100%"
          w="20vw"
        >
          <NavLink to="rent">
            <Button colorScheme="orange" variant="ghost">
              Rent
            </Button>
          </NavLink>
          <NavLink to="wishlist">
            <Button colorScheme="orange" variant="ghost">
              Wishlist
            </Button>
          </NavLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;

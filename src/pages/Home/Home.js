import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Filters } from "../../components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Center
      display="flex"
      flexDirection="column"
      flex-wrap="wrap"
      height="90vh"
      justifyContent="space-around"
    >
      <Box>
        <Heading>Rent The Best houses on reunion</Heading>
      </Box>
      <Box width="100%">
        <Filters onHomePage={true} />
        <Button
          vaiant="solid"
          colorScheme="orange"
          ml="auto"
          onClick={() => navigate("/rent")}
        >
          Apply
        </Button>
      </Box>
    </Center>
  );
};

export default Home;

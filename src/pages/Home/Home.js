import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Heading, Link } from "@chakra-ui/react";
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
      justifyContent="center"
    >
      <Box>
        <Heading fontSize="3xl" pb="20">
          Rent the best houses on reunion
        </Heading>
      </Box>
      <Box width="100%">
        <Button
          variant="solid"
          colorScheme="orange"
          mb="4"
          mr="4"
          onClick={() => navigate("/rent")}
        >
          Rent
        </Button>
        <Link
          href="https://github.com/ParthParolekar/reunion-internship"
          isExternal
        >
          <Button
            variant="outline"
            colorScheme="orange"
            mb="4"
            ml="4"
            onClick={() => navigate("/rent")}
          >
            Github <ExternalLinkIcon mx="2px" />
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default Home;

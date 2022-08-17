import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

import React from "react";

const Card = ({ property }) => {
  const { img, houseName, bedrooms, city, rentPrice, moveInBy } = property;
  const newDate = new Date(moveInBy);
  const date = newDate.getDate();
  const month = newDate.toLocaleString("default", { month: "long" });

  return (
    <Box
      width="300px"
      height="max-content"
      textAlign="left"
      shadow="md"
      borderRadius="10px"
    >
      <Image
        width="100%"
        height="250px"
        borderTopRadius="10px"
        objectFit="cover"
        src={img}
        alt="house"
      />
      <Container width="100%" p="2">
        <Heading fontSize="3xl">{houseName}</Heading>
        <Text fontWeight="extrabold" color="orange.400" fontSize="xl" mt={1}>
          Rs {rentPrice}/month
        </Text>
        <Text mt={2}>{city}</Text>
        <Text mt={1}>{bedrooms} BHK</Text>
        <Text mt={1}>
          Move In By {date} {month}
        </Text>
      </Container>
    </Box>
  );
};

export default Card;

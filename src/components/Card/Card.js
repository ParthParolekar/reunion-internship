import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { rent } from "../../db/RentHouse/rentHouse";
import React from "react";

const Card = () => {
  const newDate = new Date(rent.data[0].moveInBy);
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
        borderTopRadius="10px"
        objectFit="cover"
        src="https://images.adsttc.com/media/images/6077/43aa/ebb5/fc01/6543/b86b/large_jpg/fi-img-1234.jpg?1618428850"
        alt="house"
      />
      <Container width="100%" p="2">
        <Heading fontSize="3xl">{rent.data[0].houseName}</Heading>
        <Text color="orange.400" fontSize="xl" mt={1}>
          Rs {rent.data[0].rentPrice}/month
        </Text>
        <Text mt={2}>{rent.data[0].city}</Text>
        <Text mt={1}>{rent.data[0].bedrooms} BHK</Text>
        <Text mt={1}>
          {date} {month}
        </Text>
      </Container>
    </Box>
  );
};

export default Card;

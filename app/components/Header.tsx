import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      px={"10px"}
      pb="250px"
      bg="#6B46C1"
      color={"#F7FAFC"}
      textAlign={{ base: "left", md: "center", lg: "center" }}
    >
      <Heading fontWeight={"bold"} pt="88.45px" fontSize="48px">
        Simple Pricing for your business
      </Heading>
      <Text fontWeight="500px" pt={"16px"} fontSize={"24px"}>
        Plans that are carefully crafted to suit your business
      </Text>
    </Box>
  );
}

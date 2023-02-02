import {
  Box,
  Button,
  Heading,
  ListItem,
  Stack,
  Text,
  VStack,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Princing() {
  return (
    <Box
      maxWidth={"994px"}
      m={{ md: "auto", lg: "auto" }}
      mt={{ base: "-147px", md: "-147px", lg: "-147px" }}
      ml={{ base: "10px", md: "10px" }}
      mr={{ base: "10px", md: "10px" }}
      bg="white"
      borderRadius={"20px"}
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        {/* Left-box */}
        <Box bg={"#F0EAFB"} h="336px" textAlign="center" pt={"52px"}>
          <Text fontWeight={"800"} fontSize="24px">
            Premium Pro
          </Text>
          <Heading fontWeight={"800"} fontSize="60px">
            $329
          </Heading>
          <Text fontWeight={"500"} fontSize="16px" pb={"24px"}>
            billed just once
          </Text>
          <Button
            mx={"10px"}
            bg="#805AD5"
            borderRadius={"8px"}
            w={{ base: "160px", md: "280px", lg: "280px" }}
            h="51px"
            fontWeight={"700"}
            fontSize="16px"
            color={"#F7FAFC"}
          >
            Get Started
          </Button>
        </Box>
        {/* Right-Box */}
        <Box p={"48px"}>
          <Text pb={"24px"}>
            Access these features when you get this pricing package for your
            business
          </Text>

          <HStack>
            <CheckCircleIcon color="#805AD5" />
            <Text p={"8px"}>International calling and messaging API</Text>
          </HStack>
          <HStack>
            <CheckCircleIcon color="#805AD5" />
            <Text p={"8px"}>Additional phone numbers</Text>
          </HStack>
          <HStack>
            <CheckCircleIcon color="#805AD5" />
            <Text p={"8px"}>Automated messages via Zapier</Text>
          </HStack>
          <HStack>
            <CheckCircleIcon color="#805AD5" />
            <Text p={"8px"}>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

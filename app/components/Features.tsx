import { Box, HStack, Text, Icon, Flex } from "@chakra-ui/react";
import Image from "next/image";
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// import checkMark from "../../public/checkMark.svg"
// import Icons from "../icons/icon1"

export default function Features() {
  return (
    <Box maxWidth="906px" m="auto" mt={"60px"}>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        ml={{ base: "25px" }}
        pb={{ base: "80px" }}
      >
        <HStack mt={{ base: "30px" }}>
          <Image
            src="/icon1.svg"
            alt="money back Guarantee"
            width={40}
            height={40}
          />
          <Text fontWeight={"bold"}>30 days money back Guarantee</Text>
        </HStack>

        <HStack mt={{ base: "30px" }}>
          <Image
            src="/icon2.svg"
            alt="100% hassle-free"
            width={40}
            height={40}
          />
          <Text fontWeight={"bold"}>No setup fees 100% hassle-free</Text>
        </HStack>

        <HStack mt={{ base: "30px" }}>
          <Image
            src="/icon3.svg"
            alt="No monthly subscription Pay"
            width={40}
            height={40}
          />
          <Text fontWeight={"bold"}>
            No monthly subscription Pay once and for all
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
}

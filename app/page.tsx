"use client";
import { ChakraBaseProvider } from "@chakra-ui/react";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Header from "./components/Header";
import Princing from "./components/Princing";
import Features  from "./components/Features";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <ChakraBaseProvider>
      <Header/>
      <Princing/>
      <Features/>           
    </ChakraBaseProvider>
    </div>
  );
}

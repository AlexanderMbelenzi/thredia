import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Button, Link, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { BsHouseAddFill } from "react-icons/bs";
 import { BsSearch } from "react-icons/bs";

import { IoNotificationsOutline } from "react-icons/io5";
   import {  BsEnvelopeFill, BsBookmark } from "react-icons/bs";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom"; // Add import for authScreenAtom
import useLogout from "../hooks/useLogout";
import { MdMessage } from "react-icons/md";
import { AddIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import { CgHome } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";


const Controls = () => {
  const { colorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const setAuthScreen = useSetRecoilState(authScreenAtom); // Import authScreenAtom
  const logout = useLogout();

  // Determine if controls should be visible based on screen size
  const isVisibleOnSmallScreen = useBreakpointValue({ base: true, md: false });

  if (!isVisibleOnSmallScreen) return null; // Return null if not visible on small screens

  return (
    <Box left={0} right={0} maxW="620" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" position="fixed" bottom={0} marginX="auto">
      <Box py={2} pl="0" maxW="620" pr="0" marginX="auto">
        <Flex justifyContent="space-between" alignItems="center">
          <>
            <Link as={RouterLink} to='/'>
              <Button height="0"  borderRadius="20px"  bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999"  leftIcon={<CgHome size={30} />} />
            </Link>
            <Link as={RouterLink} to="/chat">
              <Button  height="0" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" borderRadius="20px" leftIcon={<BsSearch size={30} />} />
            </Link>
        
            <Link as={RouterLink} to="/CreatePage">
              <Button height="0" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" borderRadius="20px" ml="1-" leftIcon={<AddIcon size={30} />} />
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <Button  height="0" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" borderRadius="20px" ml="1" leftIcon={<AiFillMessage size={30} />} />
            </Link>
            <Link as={RouterLink} to={`/${user.username}`}>
              <Button height="0" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" borderRadius="20px" ml="1" leftIcon={<CgProfile size={30} />} />
            </Link>
          </>
        </Flex>
      </Box>
    </Box>
  );
};

export default Controls;

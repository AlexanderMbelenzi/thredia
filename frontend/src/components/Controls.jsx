import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Button, Link, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { BsHouseAddFill, BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsEnvelopeFill, BsBookmark } from "react-icons/bs";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import useLogout from "../hooks/useLogout";
import { MdMessage } from "react-icons/md";
import { AddIcon } from "@chakra-ui/icons";
import { CgProfile, CgHome } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";

const Controls = () => {
    try {
      const { colorMode } = useColorMode();
      const user = useRecoilValue(userAtom);
      const setAuthScreen = useSetRecoilState(authScreenAtom);
      const logout = useLogout();
  
      const isVisibleOnSmallScreen = useBreakpointValue({ base: true, md: false });
  
      if (!isVisibleOnSmallScreen) return null;
  
      return (
        <Box left={0} right={0} maxW="620px" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" position="fixed" bottom={0} marginX="auto">
          <Box py={2} pl={0} pr={0} maxW="620px" marginX="auto">
            <Flex justifyContent="space-between" alignItems="center">
              <Link as={RouterLink} to='/'>
                <Button height="auto" borderRadius="20px" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} leftIcon={<CgHome size={30} />} />
              </Link>
              {/* Other buttons */}
          
  
   
          <Link as={RouterLink} to="/chat">
            <Button height="auto" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} borderRadius="20px" leftIcon={<BsSearch size={30} />} />
          </Link>
          <Link as={RouterLink} to="/CreatePage">
            <Button height="auto" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} borderRadius="20px" leftIcon={<AddIcon size={30} />} />
          </Link>
          <Link as={RouterLink} to="/chat">
            <Button height="auto" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} borderRadius="20px" leftIcon={<AiFillMessage size={30} />} />
          </Link>
          <Link as={RouterLink} to={`/${user.username}`}>
            <Button height="auto" bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} borderRadius="20px" leftIcon={<CgProfile size={30} />} />
          </Link>
          </Flex>
          </Box>
        </Box>
      );
    } catch (error) {
      console.error("Controls component error:", error);
      return null;
    }
  };

export default Controls;

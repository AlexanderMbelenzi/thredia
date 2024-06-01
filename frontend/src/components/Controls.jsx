import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Button, Link, useColorMode, useBreakpointValue, Icon, useColorModeValue } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import useLogout from "../hooks/useLogout";
import { FiHome, FiSearch, FiEdit, FiUsers, FiMail, FiUser } from 'react-icons/fi';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

const Controls = () => {
  try {
    const { colorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const logout = useLogout();

    const isVisibleOnSmallScreen = useBreakpointValue({ base: true, md: false });
    const scrollDirection = useScrollDirection();

    if (!isVisibleOnSmallScreen) return null;

    const controlBoxStyles = {
      left: 0,
      right: 0,
      maxW: "620px",
      bg: useColorModeValue("whiteAlpha.800", "blackAlpha.800"),
      zIndex: "997",
      position: "fixed",
      bottom: 0,
      marginX: "auto",
      transition: "transform 0.3s",
      transform: scrollDirection === "down" ? "translateY(100%)" : "translateY(0)",
    };

    return (
      <Box sx={controlBoxStyles}>
        <Box py={2} px={0} maxW="620px" marginX="auto">
          <Flex justifyContent="space-between" alignItems="center">
            <Link as={RouterLink} to='/home' position="relative">
              <Button height="auto" borderRadius="20px" bg="transparent">
                <Icon as={FiHome} boxSize={6} />
              
            
                <Box position="absolute" top="-4px" zIndex="994" right="18px" width="6px" height="6px" bg="#1D88F2" borderRadius="50%" />
              </Button>
            </Link>

            <Link as={RouterLink} to="/search">
              <Button height="auto" bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")} borderRadius="20px">
                <Icon as={FiSearch} boxSize={6} />
              </Button>
            </Link>
            <Link as={RouterLink} to="/edit">
              <Button height="auto" bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")} borderRadius="20px">
                <Icon as={FiEdit} boxSize={6} />
              </Button>
            </Link>
            <Link as={RouterLink} to="/communities">
              <Button height="auto" bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")} borderRadius="20px">
                <Icon as={FiUsers} boxSize={6} />
              </Button>
            </Link>
            <Link as={RouterLink} to="/messages">
              <Button height="auto" bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")} borderRadius="20px">
                <Icon as={FiMail} boxSize={6} />
              </Button>
            </Link>
            <Link as={RouterLink} to={`/${user.username}`}>
              <Button height="auto" bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")} borderRadius="20px">
                <Icon as={FiUser} boxSize={6} />
              </Button>
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

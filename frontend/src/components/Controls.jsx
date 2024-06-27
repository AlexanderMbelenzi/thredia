import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Flex, Link, useColorMode, useBreakpointValue, Icon, useColorModeValue } from "@chakra-ui/react";
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
    const location = useLocation();

    const isVisibleOnSmallScreen = useBreakpointValue({ base: true, md: false });
    const scrollDirection = useScrollDirection();

    if (!isVisibleOnSmallScreen) return null;

    const controlBoxStyles = {
      left: 0,
      right: 0,
      maxW: "620px",
      bg: useColorModeValue("rgba(245, 248, 250, 0.7)", "rgba(1, 1, 2, 0.7)"),
      zIndex: "997",
      position: "fixed",
      bottom: 0,
      marginX: "auto",
      transition: "transform 0.3s",
      transform: scrollDirection === "down" ? "translateY(100%)" : "translateY(0)",
    };

    const isActive = (path) => location.pathname === path;

    return (
      <Box sx={controlBoxStyles}>
        <Box py={2} px={0} maxW="620px" marginX="auto">
          <Flex justifyContent="space-between" alignItems="center" mx="4">
            <Link as={RouterLink} to='/' position="relative" height="auto" borderRadius="20px" bg="transparent">
              <Icon as={FiHome} boxSize={6} color={isActive('/') ? "#007bff" : undefined} />
              <Box position="absolute" top="-4px" zIndex="994" right="2px" width="6px" height="6px" bg="#007bff" borderRadius="50%" />
            </Link>
            <Link as={RouterLink} to="/chat" height="auto" bg={useColorModeValue("rgba(245, 248, 250, 0.7)", "rgba(1, 1, 2, 0.7)")} borderRadius="20px">
              <Icon as={FiSearch} boxSize={6} color={isActive('/chat') ? "#007bff" : undefined} />
            </Link>
            <Link as={RouterLink} to="/Create" height="auto" bg={useColorModeValue("rgba(245, 248, 250, 0.7)", "rgba(1, 1, 2, 0.7)")} borderRadius="20px">
              <Icon as={FiEdit} boxSize={6} color={isActive('/CreatePost') ? "#007bff" : undefined} />
            </Link>
            <Link as={RouterLink} to="/communities" height="auto" bg={useColorModeValue("rgba(245, 248, 250, 0.7)", "rgba(1, 1, 2, 0.7)")} borderRadius="20px">
              <Icon as={FiUsers} boxSize={6} color={isActive('/communities') ? "#007bff" : undefined} />
            </Link>
            <Link as={RouterLink} to="/chat" height="auto" bg={useColorModeValue("rgba(245, 248, 250, 0.7)", "rgba(1, 1, 2, 0.7)")} borderRadius="20px">
              <Icon as={FiMail} boxSize={6} color={isActive('/chat') ? "#007bff" : undefined} />
            </Link>
            <Link as={RouterLink} to={user ? `/t/${user.username}` : "/anonymous"} height="auto" bg={useColorModeValue("rgba(245, 248, 250, 0.7)", "rgba(1, 1, 2, 0.7)")} borderRadius="20px">
              <Icon as={FiUser} boxSize={6} color={isActive(user ? `/t/${user.username}` : "/goanonymous") ? "#007bff" : undefined} />
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

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Text } from "@chakra-ui/react";
import {
  Box,
  Link,
  Flex,
  Stack,
  Button,
  useColorMode
} from "@chakra-ui/react";
import { FiHome, FiCompass, FiUser, FiBell, FiMessageSquare, FiSearch, FiMic, FiUsers, FiSettings, FiInfo, FiLogOut, FiPlusSquare } from 'react-icons/fi'; // Import icons from react-icons

import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";

const SideBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();

  return (
    <Box position="fixed" ml={-2}>
      <Flex direction="column" marginTop="50px" alignItems="flex-start">
        <Box height="full" flex={20} position="fixed" display={{ base: "none", md: "block" }}>
          <Stack>

            <Link as={RouterLink} to='/'>
              <Button leftIcon={<FiHome />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/chat">
              <Button leftIcon={<FiCompass />} fontWeight="normal" size="md" bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Explore
              </Button>
            </Link>

            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Link as={RouterLink} to={`/${user.username}`}>
              <Button leftIcon={<FiUser />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Profile
              </Button>
            </Link>

            <Link as={RouterLink} to="/notifications">
              <Button leftIcon={<FiBell />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Notifications
              </Button>
            </Link>
            <Link as={RouterLink} to={`/messages`}>
              <Button leftIcon={<FiMessageSquare />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Messages
              </Button>
            </Link>
            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Text pl={4} fontWeight="normal" color={colorMode === "dark" ? "gray.300" : "gray.600"}>Top Pics</Text>

            <Link as={RouterLink} to="/">
              <Button leftIcon={<FiSearch />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Discover Daily
              </Button>
            </Link>
            <Link as={RouterLink} to="/">
              <Button leftIcon={<FiMic />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Podcast
              </Button>
            </Link>

            <Link as={RouterLink} to="/">
              <Button leftIcon={<FiUsers />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"}    borderRadius="20px">  


                Communities
              </Button>
            </Link>

            <Link as={RouterLink} to="/">
              <Button leftIcon={<FiMic />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Ideas
              </Button>
            </Link>
            <Link as={RouterLink} to="/">
              <Button leftIcon={<FiSettings />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Challenges & Problems
              </Button>
            </Link>


            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Text pl={4} color={colorMode === "dark" ? "gray.300" : "gray.600"} fontWeight="normal">Resources</Text>
            <Link as={RouterLink} to={`/settings`}>
              <Button leftIcon={<FiSettings />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                Settings
              </Button>
            </Link>

            <Link as={RouterLink} to={`/about`}>
              <Button leftIcon={<FiInfo />} fontWeight="normal" size="md"bg={colorMode === "light" ? "#F5F8FA" : "#030304"} borderRadius="20px">
                About Us
              </Button>
            </Link>



            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Flex justifyContent="center">
              <Button
                as={RouterLink} to="/create"
                backgroundColor="#1D88F2"
                style={{
                  marginTop: "20%",
                  borderRadius: "20px",
                  fontSize: "lg",
                  width: "80%",
                  padding: "0.5rem 1rem",
                  color: "white"
                }}
              >
                Post
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideBar;

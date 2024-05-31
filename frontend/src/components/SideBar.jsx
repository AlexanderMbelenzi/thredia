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

import { GiIdea } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { BsHouseAddFill } from "react-icons/bs";
import { BsHouseDashFill } from "react-icons/bs";

import { BsSearch } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";  

import { MdOutlineSettings } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

import { IoNotificationsOutline } from "react-icons/io5";

import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";
import bgbg3 from "/public/bgbg3.png"; // Import your PNG image

import { Image } from "@chakra-ui/react";




import gamming from "/public/s3.png"; // Import your PNG image
import crypto from "/public/s2.jpg"; // Import your PNG image
import business from "/public/s1.png"; // Import your PNG image
import sports from "/public/sports1.png"; // Import your PNG image
import technology from "/public/technology1.png"; // Import your PNG image










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
              <Button fontWeight="normal"    size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" ml={-1} leftIcon={<BsHouseDashFill size={"45px"}  />}>
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/chat">
              <Button fontWeight="normal"    size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"  ml={-1}   leftIcon={<BsSearch w={6} />}>
                Explore
              </Button>
            </Link>
            

            
            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Link as={RouterLink} to={`/${user.username}`}>
              <Button   fontWeight="normal"      size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<RxAvatar w={6} />}>
                Profile
              </Button>
            </Link>

            <Link as={RouterLink} to="/chat">
              <Button fontWeight="normal"     size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"  leftIcon={<IoNotificationsOutline w={6} />}>
                Notifications
              </Button>
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <Button   fontWeight="normal"  size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<BsEnvelopeFill w={6} />}>
                Messages
              </Button>
            </Link>
            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Text pl={4} fontWeight="normal" color={colorMode === "dark" ? "gray.300" : "gray.600"} >Trending Topics</Text>

                   
<Link as={RouterLink} to="/">
  <Button   fontWeight="normal"       size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<Image src={sports}  rounded={"md"}  w={6} alt="emoji" />}>
    Sports
  </Button>
</Link>
<Link as={RouterLink} to="/">
  <Button  fontWeight="normal"         size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<Image src={gamming} rounded={"md"}   w={6} alt="emoji" />}>
    Gaming
  </Button>
</Link>

<Link as={RouterLink} to="/">
  <Button  fontWeight="normal"   size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<Image src={technology} w={6} alt="emoji" />}>
    Technology
  </Button>
</Link>

<Link as={RouterLink} to="/">
  <Button   fontWeight="normal"   size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<Image src={business} w={6} rounded={"md"} alt="emoji" />}>
    Business
  </Button>
</Link>
<Link as={RouterLink} to="/">
  <Button   fontWeight="normal"     size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px"  leftIcon={<Image src={crypto} rounded={"md"}  w={6} alt="emoji" />} >
    Crypto
  </Button>
</Link>

            

            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Text pl={4}   color={colorMode === "dark" ? "gray.300" : "gray.600"}   fontWeight="normal">Resources</Text>
            <Link as={RouterLink} to={`/settings`}>
              <Button   fontWeight="normal"     size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<MdOutlineSettings size={30} />}>
                Settings
              </Button>
            </Link>
      
            <Link as={RouterLink} to={`/AboutUs`}>
              <Button  fontWeight="normal"  size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<MdOutlineSettings size={30} />}>
                About us
              </Button>
            </Link>

          
            <Link >
              <Button  fontWeight="normal"   size="md" onClick={logout} borderRadius="20px" bg={colorMode === "dark" ? "black" : "white"} leftIcon={<MdLogout size={30} />}>
                Log Out
              </Button>
            </Link> 

            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Flex justifyContent="center">
              <Button
                as={RouterLink} to="/CreatePage"
                backgroundColor={  			 "#1D88F2"
              }
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

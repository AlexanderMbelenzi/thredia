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
import { FiLogOut } from "react-icons/fi";
import { CgHomeAlt } from "react-icons/cg";
import { GiIdea } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { BsHouseAddFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs"; 
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { Image } from "@chakra-ui/react";
import {  AiOutlineHome,  } from "react-icons/ai"; // Import AiOutlineHome from react-icons/ai
import { Search2Icon } from "@chakra-ui/icons";   
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";
import bgbg3 from "/public/bgbg3.png"; // Import your PNG image
import { pl } from "date-fns/locale";

const SideBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();

  return (
    <Box position="fixed" ml={-4}>
      <Flex direction="column" marginTop="50px" alignItems="flex-start">
        <Box height="full" flex={20} position="fixed" display={{ base: "none", md: "block" }}>
          <Stack>
            <Link as={RouterLink} to='/'>
              <Button fontWeight="normal"   size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<BsHouseAddFill size={30} />}>
                Home
              </Button>
            </Link>
            <Link as={RouterLink} to="/chat">
              <Button fontWeight="normal"    size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<BsSearch size={28} />}>
                Explore
              </Button>
            </Link>
            
            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Text pl={4} fontWeight="normal" color={colorMode === "dark" ? "gray.300" : "gray.600"} >Trending Topics</Text>

              
            <Link as={RouterLink} to="/">
              <Button   fontWeight="normal"       size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<GiIdea size={30} />}>
                Technology
              </Button>
            </Link>
            <Link as={RouterLink} to="/">
              <Button  fontWeight="normal"         size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<GiIdea size={30} />}>
                Gaming
              </Button>
            </Link>
           
            <Link as={RouterLink} to="/">
              <Button  fontWeight="normal"   size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<GiIdea size={30} />}>
                Sports
              </Button>
            </Link>
           
            <Link as={RouterLink} to="/">
              <Button   fontWeight="normal"   size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<GiIdea size={30} />}>
                Business
              </Button>
            </Link>
            <Link as={RouterLink} to="/">
              <Button   fontWeight="normal"     size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<GiIdea size={30} />}>
                Crypto
              </Button>
            </Link>

            <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={2}></Box>

            <Link as={RouterLink} to={`/${user.username}`}>
              <Button   fontWeight="normal"      size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" leftIcon={<RxAvatar size={30} />}>
                Profile
              </Button>
            </Link>

            <Link as={RouterLink} to="/chat">
              <Button fontWeight="normal"     size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" ml="-1" leftIcon={<IoNotificationsOutline size={32} />}>
                Notifications
              </Button>
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <Button   fontWeight="normal"  size="md" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" ml="-1" leftIcon={<BsEnvelopeFill size={25} />}>
                Messages
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
                backgroundImage={`url(${bgbg3})`}
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

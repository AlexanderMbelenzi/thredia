import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Box,
  Link,
  Flex,
  Stack,
  Button,
  useColorMode,
  IconButton,
  Text,
  Collapse,
} from "@chakra-ui/react";
import { FiBookOpen, FiEdit, FiFilm, FiStar } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { FiStopCircle } from "react-icons/fi";


import {
  FiHome,
  FiCompass,
  FiUser,
  FiBell,
  FiMessageSquare,
  FiSearch,
  FiMic,
  FiUsers,
  FiSettings,
  FiInfo,
  FiMenu,
  FiChevronLeft,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";

const SideBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const handleToggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (path) => location.pathname === path;

  const sidebarLinks = [
  
    { to: "/", icon: FiHome, label: "Home" },
  

  ];




  const topPicks2Links = [
    {
      to: "/discover-daily",
      icon: FiCompass,
      label: "Explore",
      subtopics: [ "Posts", "Gallery","Reels"],
    },


    {
      to: "/podcast",
      icon: FiBookOpen,
      label: "Topics",
      subtopics: ["topic A", "topic B", "topic C"],
    },


  ];



  const userLinks = [
    { to: user ? `/${user.username}` : "/", icon: FiUser, label: "Profile" },
    { to: "/notifications", icon: FiBell, label: "Notifications" },
  
  ];

  const topPicksLinks = [
    {
      to: "/discover-daily",
      icon: FiEdit,
      label: "Reddit 500",
      subtopics: ["Discover 500", "Startups", "Companies"],
    },


    {
      to: "/discover-daily",
      icon: FiSearch,
      label: "Discover Daily",
      subtopics: ["Technology news", "Business news", "Subtopic 3"],
    },
    {
      to: "/podcast",
      icon: FiMic,
      label: "Podcast",
      subtopics: ["Subtopic A", "Subtopic B", "Subtopic C"],
    },
    {
      to: "/communities",
      icon: FiUsers,
      label: "Communities",
      subtopics: ["Community X", "Community Y", "Community Z"],
    },
    {
      to: "/ideas",
      icon: FiStar,
      label: "Ideas",
      subtopics: ["Idea 1", "Idea 2", "Idea 3"],
    },
    {
      to: "/solve",
      icon: FiStopCircle,
      label: "Solve",
      subtopics: ["Problem A", "Problem B", "Problem C"],
    },
  ];

  const resourcesLinks = [
    { to: "/settings", icon: FiSettings, label: "Settings" },
    { to: "/about", icon: FiInfo, label: "About Us" },
  ];

  return (
    <Box
      direction="column"
      marginTop="55px"
      maxH={850}
      width={isCollapsed ? "5%" : "13%"}
      alignItems="flex-start"
      position="fixed"
      display={{ base: "none", md: "block" }}
     
      overflowY="scroll"
      onMouseEnter={(e) => {
        e.currentTarget.style.overflowY = "auto";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.overflowY = "hidden";
      }}
      className="sidebar"
      sx={{
        '::-webkit-scrollbar': {
          width: '0',
        },
        ':hover': {
          '::-webkit-scrollbar': {
            width: '8px',
          },
        },
        '::-webkit-scrollbar-thumb': {
          background: colorMode === 'light' ? '#CBD5E0' : '#2D3748',
          borderRadius: '8px',
        },
      }}
    >
      <Stack>


      {sidebarLinks.map((link, index) => (
          <Link key={index} as={RouterLink} to={link.to}>
            <Button
              leftIcon={React.createElement(link.icon)}
              fontWeight="normal"
              size="md"
              bg={colorMode === "light" ? "#F5F8FA" : "#030304"}
              borderRadius="10px"
              width={"full"}
              justifyContent={"left"}
               backgroundColor={isActive(link.to) ? "gray.200" : undefined}
              color={isActive(link.to) ? "blue.500" : undefined}
            >
              {!isCollapsed && link.label}
            </Button>
          </Link>
        ))}


      {topPicks2Links.map((link, index) => (
          <Box key={index} width="full">
            <Flex justifyContent="space-between" alignItems="center">
              <Link as={RouterLink} to={link.to} width="full">
                <Button
                  leftIcon={React.createElement(link.icon)}
                  fontWeight="normal"
                  size="md"
                  bg={colorMode === "light" ? "#F5F8FA" : "#030304"}
                  borderRadius="10px"
                  width={"full"}
                   backgroundColor={isActive(link.to) ? "gray.200" : undefined}
                  color={isActive(link.to) ? "blue.500" : undefined}
                  
                  textAlign="left"
                  justifyContent="flex-start"
                >
                  {!isCollapsed && link.label}
                </Button>
              </Link>
              <IconButton
                aria-label="Toggle Expand"
                icon={
                  expandedItems[link.label] ? <FiChevronUp /> : <FiChevronDown />
                }
                onClick={() => handleToggleExpand(link.label)}
                size="sm"
                variant="ghost"
              />
            </Flex>
            <Collapse in={expandedItems[link.label]} animateOpacity>
              <Stack pl={8} mt={2} spacing={2}>
                {link.subtopics.map((subtopic, subIndex) => (
                  <Text key={subIndex} fontSize="sm">
                    {subtopic}
                  </Text>
                ))}
              </Stack>
            </Collapse>
          </Box>
        ))}




        {user && (
          <>
            <Box
              w="full"
              h="1px"
              bg={colorMode === "light" ? "gray.300" : "gray.800"}
              mt={2}
            ></Box>
            {userLinks.map((link, index) => (
              <Link key={index} as={RouterLink} to={link.to}>
                <Button
                  leftIcon={React.createElement(link.icon)}
                  fontWeight="normal"
                  size="md"
                  bg={colorMode === "light" ? "#F5F8FA" : "#030304"}
                  borderRadius="10px"
                  width={"full"}
                  justifyContent={"left"}
                   backgroundColor={isActive(link.to) ? "gray.200" : undefined}                  
                   color={isActive(link.to) ? "blue.500" : undefined}
                >
                  {!isCollapsed && link.label}
                </Button>
              </Link>
            ))}
          </>
        )}

        <Box
          w="full"
          h="1px"
          bg={colorMode === "light" ? "gray.300" : "gray.800"}
          mt={2}
        ></Box>

        {!isCollapsed && (
          <Text
            pl={4}
            fontWeight="normal"
            color={colorMode === "dark" ? "gray.300" : "gray.600"}
          >
            Top Picks
          </Text>
        )}

        {topPicksLinks.map((link, index) => (
          <Box key={index} width="full">
            <Flex justifyContent="space-between" alignItems="center">
              <Link as={RouterLink} to={link.to} width="full">
                <Button
                  leftIcon={React.createElement(link.icon)}
                  fontWeight="normal"
                  size="md"
                  bg={colorMode === "light" ? "#F5F8FA" : "#030304"}
                  borderRadius="10px"
                  width={"full"}
                   backgroundColor={isActive(link.to) ? "gray.200" : undefined}
                  color={isActive(link.to) ? "blue.500" : undefined}
                  
                  textAlign="left"
                  justifyContent="flex-start"
                >
                  {!isCollapsed && link.label}
                </Button>
              </Link>
              <IconButton
                aria-label="Toggle Expand"
                icon={
                  expandedItems[link.label] ? <FiChevronUp /> : <FiChevronDown />
                }
                onClick={() => handleToggleExpand(link.label)}
                size="sm"
                variant="ghost"
              />
            </Flex>
            <Collapse in={expandedItems[link.label]} animateOpacity>
              <Stack pl={8} mt={2} spacing={2}>
                {link.subtopics.map((subtopic, subIndex) => (
                  <Text key={subIndex} fontSize="sm">
                    {subtopic}
                  </Text>
                ))}
              </Stack>
            </Collapse>
          </Box>
        ))}

        <Box
          w="full"
          h="1px"
          bg={colorMode === "light" ? "gray.300" : "gray.800"}
          mt={2}
        ></Box>

        {!isCollapsed && (
          <Text
            pl={4}
            color={colorMode === "dark" ? "gray.300" : "gray.600"}
            fontWeight="normal"
          >
            Resources
          </Text>
        )}

        {resourcesLinks.map((link, index) => (
          <Link key={index} as={RouterLink} to={link.to}>
            <Button
              leftIcon={React.createElement(link.icon)}
              fontWeight="normal"
              size="md"
              bg={colorMode === "light" ? "#F5F8FA" : "#030304"}
              borderRadius="10px"
              width={"full"}
              justifyContent={"left"}
               backgroundColor={isActive(link.to) ? "gray.200" : undefined}         
                    color={isActive(link.to) ? "blue.500" : undefined}
            >
              {!isCollapsed && link.label}
            </Button>
          </Link>
        ))}

        <Box
          w="full"
          h="1px"
          bg={colorMode === "light" ? "gray.300" : "gray.800"}
          mt={2}
        ></Box>

        <Flex justifyContent="left">
        <Button
            as={RouterLink}
            to="/create"
            backgroundColor="#1D88F2"
            _hover={{ textDecoration: "none", backgroundColor: "blue.400" }}
            justifyContent="center"
            style={{
              marginTop: "20%",
              borderRadius: "20px",
              fontSize: "lg",
             
              width: isCollapsed ? "100%" : "80%",

           
              
              padding: "0.5rem 1rem",
              color: "white",
            }}
           
          >
            {!isCollapsed && "Post"}
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default SideBar;



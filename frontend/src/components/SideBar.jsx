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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import {
  FiBookOpen,
  FiEdit,
  FiFilm,
  FiStar,
  FiVideo,
  FiStopCircle,
  FiHome,
  FiCompass,
  FiUser,
  FiBell,
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

  const sidebarLinks = [{ to: "/", icon: FiHome, label: "Home" }];

  const topPicks2Links = [
    {
      icon: FiCompass,
      label: "Explore",
      subtopics: ["Posts", "Gallery", "Reels"],
      onClick: () => handleLinkClick("Explore Coming soon"),
    },
    {
      onClick: () => handleLinkClick("Topics Coming soon"),
      icon: FiBookOpen,
      label: "Topics",
      subtopics: ["Cyrpto", " Gaming", " Computing"],
    },
  ];

  const userLinks = [
    { to: user ? `/${user.username}` : "/", icon: FiUser, label: "Profile" },
    { to: "/notifications", icon: FiBell, label: "Notifications" },
  ];

  const topPicksLinks = [
    {
      onClick: () => handleLinkClick("Reddit500 Coming soon"),
      icon: FiEdit,
      label: "Reddit 500",
      subtopics: ["Discover 500", "Startups", "Companies"],
    },
    {
      onClick: () => handleLinkClick("Discover Coming soon"),
      icon: FiSearch,
      label: "Discover Daily",
      subtopics: ["Technology news", "Business news", "trending today"],
    },
    {
      onClick: () => handleLinkClick("Podcast Coming soon"),
      icon: FiMic,
      label: "Podcast",
      subtopics: ["Stream1", "Stream2", "Stream3"],
    },
    {
      onClick: () => handleLinkClick("Communities Coming soon"),
      icon: FiUsers,
      label: "Communities",
      subtopics: ["r.reddit", "r.tech", "r.startups"],
    },
    {
      onClick: () => handleLinkClick("Ideas Coming soon"),
      icon: FiStar,
      label: "Ideas",
      subtopics: ["Idea 1", "Idea 2", "Idea 3"],
    },
    {
      onClick: () => handleLinkClick("Solve Coming soon"),
      icon: FiStopCircle,
      label: "Solve",
      subtopics: ["Problem A", "Problem B", "Problem C"],
    },
  ];

  const resourcesLinks = [
    { to: "/settings", icon: FiSettings, label: "Settings" },
    { to: "/about", icon: FiInfo, label: "About Us" },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");

  const handleLinkClick = (message) => {
  setMessage(message);
  onOpen();
  };
  
  
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
  bg={
  isActive(link.to)
  ? colorMode === "light"
  ? "gray.200"
  : "#1e1e1e"
  : colorMode === "light"
  ? "#F5F8FA"
  : "#030304"
  }
  borderRadius="10px"
  width="full"
  justifyContent="left"
  color={isActive(link.to) ? "#007bff" : undefined}
  >
  {!isCollapsed && link.label}
  </Button>
  </Link>
  ))}
      {topPicks2Links.map((link, index) => (
      <Box key={index} width="full">
        <Flex justifyContent="space-between" alignItems="center">
          <Button
            onClick={link.onClick}
            leftIcon={React.createElement(link.icon)}
            fontWeight="normal"
            size="md"
            bg={
              isActive(link.to)
                ? colorMode === "light"
                  ? "gray.200"
                  : "#1e1e1e"
                : colorMode === "light"
                ? "#F5F8FA"
                : "#030304"
            }
            borderRadius="10px"
            width={"full"}
            color={isActive(link.to) ? "#007bff" : undefined}
            textAlign="left"
            justifyContent="flex-start"
          >
            {!isCollapsed && link.label}
          </Button>
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
              bg={
                isActive(link.to)
                  ? colorMode === "light"
                    ? "gray.200"
                    : "#1e1e1e"
                  : colorMode === "light"
                  ? "#F5F8FA"
                  : "#030304"
              }
              borderRadius="10px"
              width={"full"}
              justifyContent={"left"}
              color={isActive(link.to) ? "#007bff" : undefined}
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
        <Button
            onClick={link.onClick}
            leftIcon={React.createElement(link.icon)}
            fontWeight="normal"
            size="md"
              bg={
                isActive(link.to)
                  ? colorMode === "light"
                    ? "gray.200"
                    : "#1e1e1e"
                  : colorMode === "light"
                  ? "#F5F8FA"
                  : "#030304"
              }
              borderRadius="10px"
              width={"full"}
              color={isActive(link.to) ? "#007bff" : undefined}
              textAlign="left"
              justifyContent="flex-start"
            >
              {!isCollapsed && link.label}
            </Button>
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
          bg={
            isActive(link.to)
              ? colorMode === "light"
                ? "gray.200"
                : "#1e1e1e"
              : colorMode === "light"
              ? "#F5F8FA"
              : "#030304"
          }
          borderRadius="10px"
          width={"full"}
          justifyContent={"left"}
          color={isActive(link.to) ? "#007bff" : undefined}
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
        backgroundColor="#007bff"
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

 
      <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg="#007bff" color="white">
    <Flex justify="center">
        <ModalHeader> Notice</ModalHeader>
        </Flex>

        <ModalCloseButton />
        <ModalBody>
       
            <Text> <Flex justify="center">{message}</Flex>
             <Flex justify="center">
               <Link href="/comingsoon" color="ffffff">Check out what's comming soon! </Link > 
             </Flex>  <br />
            </Text>

        </ModalBody>
       
    </ModalContent>
</Modal>
    </Flex>
  </Stack>
   
</Box>
);
};

export default SideBar;











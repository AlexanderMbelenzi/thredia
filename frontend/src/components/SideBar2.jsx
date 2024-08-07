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
import { Image } from "@chakra-ui/react";

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
  FiChevronLeft,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";
import PostModal from "./Postmodal";
import Logo2 from "/public/logo.png";


const SideBar2 = () => {
  const { colorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [message, setMessage] = useState("");
  const location = useLocation();

  const { isOpen: isPostModalOpen, onOpen: onOpenPostModal, onClose: onClosePostModal } = useDisclosure();
  const { isOpen: isNoticeModalOpen, onOpen: onOpenNoticeModal, onClose: onCloseNoticeModal } = useDisclosure();

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
      label: "Discover",
      subtopics: ["Top trending ", "Watch", "Listen"],
      onClick: () => handleLinkClick("Explore Coming soon"),
    },
    {
      onClick: () => handleLinkClick("Wall Of Shame Coming soon"),
      icon: FiBookOpen,
      label: "WOS-Wall Of Shame ",
      subtopics: ["Top trending ", "Watch", "Listen"],
    },
    {
      onClick: () => handleLinkClick("Go anonymous Coming soon"),
      icon: FiBookOpen,
      label: "Go anonymous ",
      subtopics: ["Top trending ", "Watch", "Listen"],
    },
  ];

  const userLinks = [
    { to: user ? `/${user.username}` : "/", icon: FiUser, label: "Profile" },
    { to: "/chat", icon: FiBell, label: "Notifications" },
  ];

  const topPicksLinks = [
    {
      onClick: () => handleLinkClick("World &Politics Coming soon"),
      icon: FiEdit,
      label: "world &Politics",
      subtopics: ["World News", "Politics", "Social Issues"],
    },
    {
      onClick: () => handleLinkClick("Science &Technology Coming soon"),
      icon: FiSearch,
      label: " Science &Technology",
      subtopics: ["Innovation &Technology", " Space &Astronomy", "Life Science"],
    },
    {
      onClick: () => handleLinkClick("Business &Ecomics Coming soon"),
      icon: FiMic,
      label: "Business &Economics",
      subtopics: ["Markets", "Tech", "Media"],
    },
    {
      onClick: () => handleLinkClick("Environmental &Health Coming soon"),
      icon: FiUsers,
      label: "Environmental &Health",
      subtopics: ["Environmental science", "Life &Health", "Fitness &Food"],
    },
    {
      onClick: () => handleLinkClick("Sports &Entertainment Coming soon"),
      icon: FiStar,
      label: "Sports &Entertainment",
      subtopics: ["Games", "Movies &Televison &Music", "Celebrity"],
    },
    {
      onClick: () => handleLinkClick("Weather Coming soon"),
      icon: FiStopCircle,
      label: "Weather",
      subtopics: [" Forecast", "Climate", "Impact"],
    },
  ];

  const resourcesLinks = [
    { to: "/settings", icon: FiSettings, label: "Settings" },
    { to: "/about", icon: FiInfo, label: "About Us" },
  ];

  const handleLinkClick = (message) => {
    setMessage(message);
    onOpenNoticeModal();
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      direction="column"
      marginTop="2px"
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
      <Link as={RouterLink} to="/">
    <Image src={Logo2} alt="Logo" cursor="pointer" className="logo" />
  </Link>
                          

        {sidebarLinks.map((link, index) => (
            
          <Link key={index} as={RouterLink} to={link.to}>
            
            <Button
              leftIcon={React.createElement(link.icon)}
              fontWeight="normal"
              size="md"
              bg={
                isActive(link.to)
                  ? colorMode === "light"
                    ? "gray.100"
                    : "#1e1e1e"
                  : colorMode === "light"
                  ? "#fcfeff"
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
                      ? "gray.100"
                      : "#1e1e1e"
                    : colorMode === "light"
                    ? "#fcfeff"
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
              bg={colorMode === "dark" ? "#14171a " : "#dfecf5"}
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
                        ? "gray.100"
                        : "#1e1e1e"
                      : colorMode === "light"
                      ? "#fcfeff"
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
          bg={colorMode === "dark" ? "#14171a " : "#dfecf5"}
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
                      ? "gray.100"
                      : "#1e1e1e"
                    : colorMode === "light"
                    ? "#fcfeff"
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
          bg={colorMode === "dark" ? "#14171a " : "#dfecf5"}
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
                    ? "gray.100"
                    : "#1e1e1e"
                  : colorMode === "light"
                  ? "#fcfeff"
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
          bg={colorMode === "dark" ? "#14171a " : "#dfecf5"}
          mt={2}
        ></Box>
        <Flex justifyContent="left"  direction="column" alignItems="center" width="full">
          <Button
            backgroundColor="#007bff"
            _hover={{ textDecoration: "none", backgroundColor: "blue.400" }}
            justifyContent="center"
            style={{
              borderRadius: "20px",
              fontSize: "lg",
              width: isCollapsed ? "80px" : "100%",
              padding: "0.5rem 1rem",
              color: "white",
            }}
            onClick={onOpenPostModal}
          >
            {!isCollapsed && " Post"}
          </Button>
          <PostModal isOpen={isPostModalOpen} onClose={onClosePostModal} />

          <Modal isOpen={isNoticeModalOpen} onClose={onCloseNoticeModal}>
            <ModalOverlay />
            <ModalContent bg="#007bff" color="white">
              <Flex justify="center">
                <ModalHeader> Notice</ModalHeader>
              </Flex>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  <Flex justify="center">{message}</Flex>
                  <Flex justify="center">
                    <Link href="/comingsoon" color="ffffff">Check out what's coming soon! </Link> 
                  </Flex>
                  <br />
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Stack>
    </Box>
  );
};

export default SideBar2;

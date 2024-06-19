import React, { useState } from "react";
import { Box, Flex, Link, Text, Image, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Avatar } from "@chakra-ui/avatar";
import { useRecoilValue } from "recoil";
import { FaSun, FaPodcast, FaStar, FaUsers, FaCogs, FaInfoCircle, FaLifeRing, FaEdit } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import userAtom from "../atoms/userAtom";
import right from "/public/right.svg";

const SideMenu = ({ isSideMenuOpen, colorMode, closeSideMenu }) => {
    const currentUser = useRecoilValue(userAtom); // Fetch current user data from userAtom
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [message, setMessage] = useState("");

    const handleLinkClick = (message) => {
        setMessage(message);
        onOpen();
    };

    return ( 
        <>
            {isSideMenuOpen && (
                <>
                    <Box
                        position="fixed"
                        top={0}
                        right={0}
                        bg={colorMode === "light" ? "gray.200" : "#010102"}
                        bottom={0}
                        borderLeft={2}
                        width={{ base: "75%", md: "30%" }}
                        zIndex="999"
                        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                    >
                        <Flex flexDirection="column" ml={5} p={4} h="100%">
                            <Flex alignItems="center" marginBottom="1rem">
                                {/* Link to profile page */}
                                <Link 
                                    as={RouterLink} 
                                    to={`/${currentUser.username}`} 
                                    onClick={closeSideMenu} 
                                    display="flex" 
                                    alignItems="center"
                                    _hover={{ textDecoration: "none", color: "#007bff" }}
                                >
                                    {currentUser.profilePic ? (
                                        <Avatar
                                            name={currentUser.name}
                                            src={currentUser.profilePic}
                                            size={{
                                                base: "md",
                                                md: "xl",
                                            }}
                                        />
                                    ) : (
                                        <Avatar
                                            name={currentUser.name}
                                            src="https://bit.ly/broken-link"
                                            size={{
                                                base: "md",
                                                md: "xl",
                                            }}
                                        />
                                    )}
                                    {/* Display user name */}
                                    <Flex flexDirection="column" ml={3}>
                                        <Text _hover={{ color: "#007bff" }}>{currentUser.name}</Text>
                                        <Text fontSize="xs" color="gray.light" _hover={{ color: "#007bff" }}>@{currentUser.username}</Text>
                                    </Flex>
                                </Link>
                                <Link  onClick={closeSideMenu} marginLeft="auto">
                                <Icon as={FiChevronRight} alt="toggle" cursor="pointer" height={10} />
                                </Link>
                            </Flex>

                            {/* Menu items */}
                            <Flex flexDirection="column">
                                <Link fontSize="md" onClick={() => handleLinkClick("Reddit500 coming soon ")} _hover={{ textDecoration: "none", color: "#0000" }} display="flex" alignItems="center" cursor="pointer">
                                    <Icon as={FaEdit} mr={2} />
                                    <Text>Reddit 500</Text>
                                </Link>
                                <br />

                                <Link fontSize="md" as={RouterLink} to="/comingsoon" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "#007bff" }} display="flex" alignItems="center">
                                    <Icon as={FaSun} mr={2} />
                                    <Text>Coming soon </Text>
                                </Link>
                                <br />
                                <Link fontSize="md" onClick={() => handleLinkClick("Podcast Coming soon")} _hover={{ textDecoration: "none", color: "#007bff" }} display="flex" alignItems="center" cursor="pointer">
                                    <Icon as={FaPodcast} mr={2} />
                                    <Text>Podcast</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" onClick={() => handleLinkClick("Premium Coming soon")} _hover={{ textDecoration: "none", color: "#007bff" }} display="flex" alignItems="center" cursor="pointer">
                                    <Icon as={FaStar} mr={2} />
                                    <Text>Premium</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" onClick={() => handleLinkClick("Communities Coming soon")} _hover={{ textDecoration: "none", color: "#007bff" }} display="flex" alignItems="center" cursor="pointer">
                                    <Icon as={FaUsers} mr={2} />
                                    <Text>Communities</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/settings" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "#007bff" }} display="flex" alignItems="center">
                                    <Icon as={FaCogs} mr={2} />
                                    <Text>Settings</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/about" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "#007bff" }} display="flex" alignItems="center">
                                    <Icon as={FaInfoCircle} mr={2} />
                                    <Text>About Us</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" onClick={() => handleLinkClick("Support & Help Coming soon")} _hover={{ textDecoration: "none", color: "#007bff" }} display="flex" alignItems="center" cursor="pointer">
                                    <Icon as={FaLifeRing} mr={2} />
                                    <Text>Support & Help</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box
                        position="fixed"
                        top={0}
                        left={0}
                        width={{ base: "25%", md: "70%" }}
                        height="100%"
                        bg="rgba(0, 0, 0, 0.5)"
                        zIndex="1000"
                        onClick={closeSideMenu}
                    />
                </>
            )}
            
       
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
        </>
    );
};

export default SideMenu;


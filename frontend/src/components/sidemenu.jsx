import React from "react";
import { Box, Flex, Link, Text, Image, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar } from "@chakra-ui/avatar";
import { useRecoilValue } from "recoil";
import { FaSun, FaPodcast, FaStar, FaUsers, FaCogs, FaInfoCircle, FaLifeRing } from "react-icons/fa";
import userAtom from "../atoms/userAtom";
import right from "/public/right.svg";

const SideMenu = ({ isSideMenuOpen, colorMode, closeSideMenu }) => {
    const currentUser = useRecoilValue(userAtom); // Fetch current user data from userAtom

    return (
        <>
            {isSideMenuOpen && (
                <>
                    <Box
                        position="fixed"
                        top={0}
                        right={0}
                        bg={colorMode === "light" ? "#F5F8FA" : "#000000"}
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
                                    to={`/profile/${currentUser.username}`} 
                                    onClick={closeSideMenu} 
                                    display="flex" 
                                    alignItems="center"
                                    _hover={{ textDecoration: "none", color: "blue.500" }}
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
                                        <Text _hover={{ color: "blue.500" }}>{currentUser.name}</Text>
                                        <Text fontSize="xs" color="gray.light" _hover={{ color: "blue.500" }}>@{currentUser.username}</Text>
                                    </Flex>
                                </Link>
                                <Link as={RouterLink} onClick={closeSideMenu} marginLeft="auto">
                                    <Image src={right} alt="toggle" cursor="pointer" w={2} />
                                </Link>
                            </Flex>

                            {/* Menu items */}
                            <Flex flexDirection="column">
                                <Link fontSize="md" as={RouterLink} to="/DiscoverDaily" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center">
                                    <Icon as={FaSun} mr={2} />
                                    <Text>Discover Daily</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/Communities" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center">
                                    <Icon as={FaPodcast} mr={2} />
                                    <Text>Podcast</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/Premium" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center">
                                    <Icon as={FaStar} mr={2} />
                                    <Text>Premium</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/Communities" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center">
                                    <Icon as={FaUsers} mr={2} />
                                    <Text>Communities</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/settings" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center">
                                    <Icon as={FaCogs} mr={2} />
                                    <Text>Settings & Help</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/AboutUs" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center">
                                    <Icon as={FaInfoCircle} mr={2} />
                                    <Text>About Us</Text>
                                </Link>
                                <br />
                                <Link fontSize="md" as={RouterLink} to="/Support" onClick={closeSideMenu} _hover={{ textDecoration: "none", color: "blue.500" }} display="flex" alignItems="center">
                                    <Icon as={FaLifeRing} mr={2} />
                                    <Text>Support</Text>
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
        </>
    );
};

export default SideMenu;

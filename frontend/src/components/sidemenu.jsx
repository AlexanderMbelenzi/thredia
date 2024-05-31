
import React from "react";
import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar } from "@chakra-ui/avatar";
import { useRecoilValue } from "recoil";
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
                        width="75%"
                        zIndex="999"
                        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                    >
                        <Flex flexDirection="column" ml={5} p={4} h="100%">
                            <Flex alignItems="center" marginBottom="1rem">
                                {/* Display user profile picture */}
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
                                <Text marginLeft="1rem">{currentUser.name}</Text>
                                <Link as={RouterLink} onClick={closeSideMenu} marginLeft="auto">
                                    <Image src={right} alt="toggle" cursor="pointer" w={2} />
                                </Link>
                            </Flex>

                            {/* Menu items */}
                            <Flex flexDirection="column">
                             


                            <Link fontSize="xl" as={RouterLink} to="/DiscoverDaily" onClick={closeSideMenu}>
                                <Text>
                                    Discover Daily
                                </Text>
                            </Link>
                            <br />
                            <Link fontSize="xl" as={RouterLink} to="/Communities" onClick={closeSideMenu}>
                                <Text>
                                    Podcast
                                </Text>
                            </Link>
                            <br />
                            <Link fontSize="xl" as={RouterLink} to="/Premium" onClick={closeSideMenu}>
                                <Text>
                                    Premium
                                </Text>
                            </Link>
                            <br />
                            <Link fontSize="xl" as={RouterLink} to="/Communities" onClick={closeSideMenu}>
                                <Text>
                                    Communities
                                </Text>
                            </Link>
                            <br />
                            <Link fontSize="xl" as={RouterLink} to="/settings " onClick={closeSideMenu}>
                                <Text>
                                    Settings & Help
                                </Text>
                            </Link>
                            <br />
                            <Link fontSize="xl" as={RouterLink} to={`/AboutUs`} onClick={closeSideMenu}>
                                <Text>
                                    AboutUs
                                </Text>
                            </Link>
                            <br />
                            <Link fontSize="xl" as={RouterLink} to="/Support" onClick={closeSideMenu}>
                                <Text>
                                    Support
                                </Text>
                            </Link>
   
                       
                            </Flex>
                        </Flex>
                    </Box>
                    <Box
                        position="fixed"
                        top={0}
                        left={0}
                        width="25%"
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

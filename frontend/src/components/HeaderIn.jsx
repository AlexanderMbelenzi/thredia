import React from "react";
import { Box, Flex, Image, Button, Link, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo2 from "/public/logo.png"; // Import your PNG image
import emoji2 from "/public/emoji2.png"; // Import your PNG image
import { Container } from "@chakra-ui/react";
import useLogout from "../hooks/useLogout";
import bgbg3 from "/public/bgbg3.png";
import theme2 from "/public/theme2.png";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const logout = useLogout();

    // Determine if it's a small screen
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    return (
        <Box>
            <Box
                left={0}
                right={0}
                borderBottom={"2px"}
                borderBottomColor={colorMode === "light" ? "gray.300" : "#2B2B2B"}
                bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
                zIndex="999"
                position="fixed"
                top={0}
                marginX="auto"
            >
                <Box py={3} pb={2} pt={1} pl="2" maxW="1280" pr="1" marginX="auto">
                    <Flex justifyContent="space-between" alignItems="center">
                        {!user ? (
                            <>
                                <Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("login")}>
                                    Login
                                </Link>
                                <Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("signup")}>
                                    Sign up
                                </Link>
                            </>
                        ) : (
                            <>
                                <Box>
                                    <Link as={RouterLink} to="/">
                                        <Image src={Logo2} mt={-25} mb={-25} alt="Logo" cursor="pointer" className="logo" />
                                    </Link>
                                </Box>

                                <Link fontSize="md" as={RouterLink} to="/">
                  For you
                </Link>
                <Flex    justifyContent="center" alignItems="center">
                  <Image
                    
                    cursor="pointer"
                    alt="theme"
                    w={6}
                    src={theme2} 
                    onClick={toggleColorMode}
                  />
                </Flex>

              


                <Link fontSize="md" as={RouterLink} to="/Home2">
                  Following
                </Link>

                <Link  fontSize="md" as={RouterLink} to="/"    >
           
            </Link>

                                <Link>
                                    <Button
                                        leftIcon={<Image src={emoji2} w={6} alt="emoji" />}
                                        rightIcon={<HamburgerIcon /> }
                                        fontSize="xs"
                                        as={RouterLink}
                                        to="/auth"
                                        className="loginbutton"
                                        borderRadius="20px"
                                        color="white"
                                        size={isSmallScreen ? "xs" : "sm"}
                                        backgroundImage={`url(${bgbg3})`}
                                    >
                                        {/* Empty button label */}
                                    </Button>
                                </Link>
                            </>
                        )}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;

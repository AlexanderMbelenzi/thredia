
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Button, Link, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SunIcon } from "@chakra-ui/icons";
import Logo2 from "/public/logo.png"; // Import your PNG image
import Logo3 from "/public/logo3.png"; // Import your PNG image

import emoji2 from "/public/emoji2.png"; // Import your PNG image
import theme2 from "/public/theme2.png";
import useLogout from "../hooks/useLogout";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const logout = useLogout();
    const [activeLink, setActiveLink] = useState("foryou");
    const [showLinks, setShowLinks] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Determine if it's a small screen
    const isSmallScreen = useBreakpointValue({ base: true, md: false });
    const isBigScreen = useBreakpointValue({ base: false, md: true });
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 2) {
                // Scrolling down and scrolled more than 100px
                setShowLinks(false);
            } else {
                // Scrolling up
                setShowLinks(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

     
        const linkStyles = (link) => ({
            color: activeLink === link ? "white" : "#abb7c4",
            position: "relative",
            _after: {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "4px",
                bottom: "-6px",
                left: 0,
                bg: "blue.500",
                borderRadius: "4px",
                display: activeLink === link ? "block" : "none",
            },
        });
    
     
      
       
           
    

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
                <Box py={1} pb={3} pt={3} className="header" pl="2" maxW="1500" pr="1" marginX="auto">
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
                            
                            
                            {isBigScreen ? null : (
                                <>
  <Box>
                                    <Link as={RouterLink} to="/">
                                        <Image src={Logo3}  alt="Logo" cursor="pointer" w={8}   />
                                    </Link>
                                </Box>


                                <Link  fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                         <SunIcon  />
                                    </Link>
                           
                               
                                    
                                  
                             
                                <Link  fontSize="2xl"
                                        as={RouterLink}
                                        to="/auth" >
                                         

                                   <HamburgerIcon  />
                                       
                                   
                                     
                                </Link>  </>
                                )}
                            
                            
                            
                         
                             {isSmallScreen ? null : (
                                <>
                                <Box>
                                    <Link as={RouterLink} to="/">
                                        <Image src={Logo2} mt={-5} mb={-25} alt="Logo" cursor="pointer" className="logo" />
                                    </Link>
                                </Box>
                               
                                        <Link
                                            fontSize="md"
                                            as={RouterLink}
                                            to="/"
                                            onClick={() => handleLinkClick("foryou")}
                                            sx={linkStyles("foryou")}
                                        >
                                            For you
                                        </Link>
                                        <Link
                                            fontSize="md"
                                            as={RouterLink}
                                            to="/Home2"
                                            onClick={() => handleLinkClick("following")}
                                            sx={linkStyles("following")}
                                        >
                                            Following
                                        </Link>
                                  
                                <Flex justifyContent="center" alignItems="center">
                                  
                                <Link  fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                         <SunIcon  />
                                    </Link>
                                </Flex>
                                <Link>
                                    <Button
                                        leftIcon={<Image src={emoji2} w={5} alt="emoji" />}
                                        rightIcon={<HamburgerIcon />}
                                        fontSize="xs"
                                        as={RouterLink}
                                        to="/auth"
                                        className="loginbutton"
                                        borderRadius="20px"
                                        color="white"
                                        size={isSmallScreen ? "xs" : "sm"}
                                        backgroundColor={"#1D88F2"}
                                    >
                                        {/* Empty button label */}
                                    </Button>
                                </Link>  </>
                                )}
                            </>
                        )}
                    </Flex>


                  
                         
               


                    {isSmallScreen && user && showLinks && (
                        <Flex justifyContent="space-between" mt={2}>
                               <Link
                                fontSize="md"
                                as={RouterLink}
                                to="/Home2"
                                onClick={() => handleLinkClick("following")}
                                sx={linkStyles("following")}
                            >
                              
                            </Link>
                            <Link
                                fontSize="md"
                                as={RouterLink}
                                to="/"
                                onClick={() => handleLinkClick("foryou")}
                                sx={linkStyles("foryou")}
                            >
                                For you
                            </Link>
                            <Link
                                fontSize="md"
                                as={RouterLink}
                                to="/Home2"
                                onClick={() => handleLinkClick("following")}
                                sx={linkStyles("following")}
                            >
                                Following
                            </Link>
                            <Link
                                fontSize="md"
                                as={RouterLink}
                                to="/Home2"
                                onClick={() => handleLinkClick("following")}
                                sx={linkStyles("following")}
                            >
                              
                            </Link>
                        </Flex>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Header;


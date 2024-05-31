

    import React, { useState, useEffect, useRef } from "react";
    import { Box, Flex, Image, Button, Link, useColorMode, useBreakpointValue } from "@chakra-ui/react";
    import { useRecoilValue, useSetRecoilState } from "recoil";
    import { Link as RouterLink, useLocation } from "react-router-dom";
    import { Text } from "@chakra-ui/react";
    import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
    import userAtom from "../atoms/userAtom";
    import authScreenAtom from "../atoms/authAtom";
    import useLogout from "../hooks/useLogout";
    import Logo2 from "/public/logo.png";
    import Logo3 from "/public/logo3.png";
    import emoji2 from "/public/emoji2.png";
    import right from "/public/right.svg";
    import SideMenu from "./sidemenu";




    const Header = () => {
        const { colorMode, toggleColorMode } = useColorMode();
        const user = useRecoilValue(userAtom);
        const setAuthScreen = useSetRecoilState(authScreenAtom);
        const logout = useLogout();
        const [activeLink, setActiveLink] = useState("foryou");
        const [showLinks, setShowLinks] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
        const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
        const borderBottom = useBreakpointValue({ base: "none", md: "2px" });

 
    const isSmallScreen = useBreakpointValue({ base: true, md: false });
    const isBigScreen = useBreakpointValue({ base: false, md: true });

    const sideMenuWrapperRef = useRef(null);

    const location = useLocation();


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 2) {
                setShowLinks(false);
            } else {
                setShowLinks(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sideMenuWrapperRef.current && !sideMenuWrapperRef.current.contains(event.target)) {
          setIsSideMenuOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  
    const toggleSideMenu = () => {
      setIsSideMenuOpen(!isSideMenuOpen);
    };
  
    const closeSideMenu = () => {
      setIsSideMenuOpen(false);
    };
    const linkStyles = (link) => ({
      
        color: activeLink === link ? "" : "#7b828a",
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
                borderBottom={borderBottom}
                borderBottomColor={colorMode === "light" ? "gray.300" : "#2B2B2B"}
                bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
                zIndex="995"
                position="fixed"
                top={0}
                marginX="auto"
            >
                <Box py={1} pb={2} pt={2} className="header" pl="2"   maxW="1500" pr="1" marginX="auto">
                    <Flex justifyContent="space-between" alignItems="center">
                        {!user ? (
                            <>
                                <Link as={RouterLink} to="/auth"   _hover={{ textDecoration: "none", 
        color: "blue.500" }}   onClick={() => setAuthScreen("login")}>
                                    Login
                                </Link>
                                <Link as={RouterLink} to="/auth"   _hover={{ textDecoration: "none", 
        color: "blue.500" }}  onClick={() => setAuthScreen("signup")}>
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

                                {isSmallScreen && user && showLinks && (
                                <Link mr={4} fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                         <SunIcon  />
                                    </Link>
                             )}
                               
                                    
                                  
                             
                                <Link  fontSize="xl"
                                        as={RouterLink}
                                        onClick={toggleSideMenu}>
                                         

                                   <HamburgerIcon  />
                                       
                                   
                                     
                                </Link>  </>
                                )}
                     
 

                            </>
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
                                            _hover={{ textDecoration: "none", 
                                            color: "blue.500" }}
                                            to="/"
                                            onClick={() => handleLinkClick("foryou")}
                                            sx={linkStyles("foryou")}
                                        >
                                            For you
                                        </Link>
                                        <Link
                                            fontSize="md"
                                            as={RouterLink}
                                            _hover={{ textDecoration: "none", 
                                            color: "blue.500" }}
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

 {(location.pathname === "/" || location.pathname === "/Home2") && (
  <Link

    fontSize="md"
    as={RouterLink}
    _hover={{ textDecoration: "none", 
    color: "blue.500" }}
    to="/"
    onClick={() => handleLinkClick("foryou")}
    sx={linkStyles("foryou")}
  >
    For you
  </Link>
)}

{(location.pathname === "/Home2" || location.pathname === "/") && (
  <Link

    fontSize="md"
    as={RouterLink}
    _hover={{ textDecoration: "none", 
    color: "blue.500" }}
    to="/Home2"
    onClick={() => handleLinkClick("following")}
    sx={linkStyles("following")}
  >
    Following
  </Link>
)}

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

            <SideMenu isSideMenuOpen={isSideMenuOpen} colorMode={colorMode} closeSideMenu={closeSideMenu} />
        </Box>
    );
};

export default Header;

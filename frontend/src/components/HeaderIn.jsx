

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
    

    import { SearchIcon } from "@chakra-ui/icons";
    import { InputLeftElement,  Input, InputGroup,  } from "@chakra-ui/react";


    const Header = () => {
        const { colorMode, toggleColorMode } = useColorMode();
        const user = useRecoilValue(userAtom);
        const setAuthScreen = useSetRecoilState(authScreenAtom);
        const logout = useLogout();
        const [activeLink, setActiveLink] = useState("foryou");
        const [showLinks, setShowLinks] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
        const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
        const borderBottom = useBreakpointValue({ base: "none", md: "1px" });

 
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
            bg: "#007bff ",
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
        borderBottomColor={colorMode === "light" ? "gray.300" : "gray.800"}
        bg={colorMode === "dark" ? "rgba(1, 1, 2, 0.7)" : "rgba(245, 248, 250, 0.7)"}
        zIndex="995"
        position="fixed"
        top={0}
        marginX="auto"
      >
    
                <Box py={1} pb={1} pt={1} className="header"   px={4}  maxW="1800"  marginX="auto">
                    <Flex justifyContent="space-between" alignItems="center">
                        {!user ? (
                            <>
    <Link as={RouterLink} to="/">
                                        <Image src={Logo2}  alt="Logo" cursor="pointer" className="logo" />
                                    </Link>

                                <Link as={RouterLink} to="/auth"   _hover={{ textDecoration: "none", 
        color: "#007bff" }}   onClick={() => setAuthScreen("login")}>
                                    Login
                                </Link>



                                <Link  fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                         <SunIcon  />
                                    </Link>
                            


                                <Link as={RouterLink} to="/auth"   _hover={{ textDecoration: "none", 
        color: "#007bff" }}  onClick={() => setAuthScreen("signup")}>
                                    Sign up
                                </Link>

                                 <Link  fontSize="2xl"
                                        as={RouterLink}
                                        to="/auth" >
                                 
                                  </Link>
                           <Flex justifyContent="center" 
                                 alignItems="center">
                                
                                <Link  fontSize="2xl"
                                        as={RouterLink}
                                        to="/auth" >
                                  <HamburgerIcon  />
                                 </Link>  </Flex>  


                            </>
                        ) : (

                  <> 
                            
                            

                    {isSmallScreen ? null : (
                                <>
                                <Box mr={18}>
                                    <Link as={RouterLink} to="/">
                                        <Image src={Logo2}  alt="Logo" cursor="pointer" className="logo" />
                                    </Link>
                                </Box>


                                <Link as={RouterLink} to="/auth"   _hover={{ textDecoration: "none", 
        color: "#007bff" }}   onClick={() => setAuthScreen("login")}>
                                </Link>

                             


                                <Box  mr={12 } width="40%"> {/* Adjust the width as needed */}
            <Flex alignItems="center" gap={2} as={RouterLink} to="/chat">
            <InputGroup size="lg">
            <InputLeftElement   color={colorMode === "light" ? "gray.500" : "gray.400"}  pointerEvents="none">
                <SearchIcon />
            </InputLeftElement>
            <Input
                placeholder="Search for a user"
                 // Dynamically set text color based on color mode
                borderRadius="full"
                bg={colorMode === "light" ? "#d5dce3" : "#1e1e1e"} // Dynamically set background color based on color mode
                border="none" // Remove border
                _placeholder={{ color: colorMode === "light" ? "gray.500" : "gray.500",
                  fontSize: "md" // Set the font size for the placeholder
                
                 }} // Change placeholder color dynamically
            />
        </InputGroup>
            </Flex>
        </Box>





                               
                                   
                                  
                                <Flex justifyContent="center"  display={{
    base: "none", // Show on small screens
    md: "none", 
    lg: "block",    // Hide on large screens and above (>= 1000px)
  }}
         alignItems="center">
                                  
                                <Link  fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                         <SunIcon  />
                                    </Link>
                                </Flex>


                                	





                                   
                                <Flex justifyContent="center"  display={{
                                 base: "none", 
                                  md: "none", 
                                 lg: "block",    
                                  }}
                                 alignItems="center">
                                
                                <Link  fontSize="2xl"
                                        as={RouterLink}
                                        onClick={toggleSideMenu}>
                             
                                 </Link>  </Flex>  


                           <Flex justifyContent="center" 
                                 alignItems="center">
                                
                                <Link  fontSize="2xl"
                                        as={RouterLink}
                                        onClick={toggleSideMenu}>
                                  <HamburgerIcon  />
                                 </Link>  </Flex>  


                                  </>
                                )}
                               

                        
                            
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
    color: "#007bff" }}
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
    color: "#007bff" }}
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

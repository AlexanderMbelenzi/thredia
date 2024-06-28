import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Image, Link, useColorMode, useBreakpointValue, Avatar } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { SunIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import useLogout from "../hooks/useLogout";
import Logo2 from "/public/logo.png";
import Logo3 from "/public/logo3.svg";
import placeholderImage from "/public/pizza5.png"; // Placeholder image
import SideMenu from "./sidemenu";
import { InputLeftElement, Input, InputGroup } from "@chakra-ui/react";

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
        borderBottomColor={colorMode === "dark" ? "#14171a " : "#dfecf5"}
        bg={colorMode === "dark" ? "rgba(1, 1, 2, 0.7)" : "rgba(245, 248, 250, 0.7)"}
        zIndex="995"
        position="fixed"
        top={0}
        marginX="auto"
      >
    
                <Box py={1} pb={1} pt={1} className="header"   px={4}  maxW="1600"  marginX="auto">
                    <Flex justifyContent="space-between" alignItems="center">
                        {!user ? (
                            <>
                                        <Box mt={2} display={{ base: "block", md: "none" }} >
                            <Link as={RouterLink} to="/" onClick={!user ? () => setAuthScreen("login") : null}>
                                {showLinks ? (
                                    user ? (
                                        <Avatar name={user.name} src={user.profilePic} size="sm" />
                                    ) : (
                                        <Image src={placeholderImage} alt="Profile"  w={8}  />
                                    )
                                ) : (
                                    <Image src={Logo3} alt="Logo" w={8} />
                                )}
                            </Link>
                         


                           {isBigScreen && showLinks && (
                                     <Link  as={RouterLink} to="/"
                                        alt="theme">
                                    <Image src={Logo3} alt="Logo" w={5} />
                                    </Link>
                             )}
                            <Image src={Logo3} alt="Logo" w={8} />

                        </Box>

                                <Link as={RouterLink} to="/auth"   _hover={{ textDecoration: "none", 
                                   color: "#007bff" }}   onClick={() => setAuthScreen("login")}>
                                    Login
                                </Link>



                                {isSmallScreen && showLinks && (
                                <Link mr={4} fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                    <Image src={Logo3} alt="Logo" w={5} />
                                    </Link>
                             )}
                             


                             {isBigScreen && showLinks && (
                                <Link mr={4} fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                    <Image src={Logo3} alt="Logo" w={5} />
                                    </Link>
                             )}
                               
                            


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
                             <Box mt={2} display={{ base: "block", md: "none" }} >
                            <Link as={RouterLink} to="/" onClick={!user ? () => setAuthScreen("login") : null}>
                                {showLinks ? (
                                    user ? (
                                        <Avatar name={user.name} src={user.profilePic} size="sm" />
                                    ) : (
                                        <Image src={placeholderImage} alt="Profile" size="sm" />
                                    )
                                ) : (
                                    <Image src={Logo3} alt="Logo" w={8} />
                                )}
                            </Link>
                        </Box>
                                </Box>

                                {isSmallScreen && user && showLinks && (
                                <Link mr={4} fontSize="lg"
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
                                    <Image src={Logo3} alt="Logo" w={5} />
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





{(location.pathname === "/discoverdaily" || location.pathname === "/") && (
  <Link

    fontSize="md"
    as={RouterLink}
    _hover={{ textDecoration: "none", 
    color: "#007bff" }}
    to="/discoverdaily"
    onClick={() => handleLinkClick("discoverdaily")}
    sx={linkStyles("discoverdaily")}
  >
    Discover
  </Link>
)}
      
      
      
      
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


{(location.pathname === "/wallofshame" || location.pathname === "/") && (
  <Link

    fontSize="md"
    as={RouterLink}
    _hover={{ textDecoration: "none", 
    color: "#007bff" }}
    to="/wallofshame"
    onClick={() => handleLinkClick("discoverdaily")}
    sx={linkStyles("discoverdaily")}
  >
    WOS   </Link>
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



















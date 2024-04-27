import React from "react";
import { Box, Flex, Image, Button, Link, useColorMode,Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import Logo2 from "/public/logo.svg"; // Import your PNG image
import Logo3 from "/public/emoji.png"; // Import your PNG image
import { Container } from "@chakra-ui/react";
import useLogout from "../hooks/useLogout";
import bgbg from "/public/bgbg.png";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useRecoilValue(userAtom);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const logout = useLogout();

    return (
<Box       >
      <Box   left={0} right={0} maxW="1300"  borderBottom={5} borderBottomColor={colorMode === "light" ? "gray.300" : "#2B2B2B"}  bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" position="fixed"  top={0} marginX="auto"    >
        <Box py={3}   pl="1"    maxW="1280"   pr="1" marginX="auto">
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
<Box  >
  <Link   as={RouterLink} to="/"  >
<Image    src={Logo2} mt={-25} mb={-25} alt="Logo"  cursor="pointer" 
 className="logo" />
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
                    src={Logo3} 
                    onClick={toggleColorMode}
                  />
                </Flex>

              


                <Link fontSize="md" as={RouterLink} to="/Home2">
                  Following
                </Link>

                <Link  fontSize="md" as={RouterLink} to="/"    >
           
            </Link>
            
                <Link >
            <Button  backgroundImage={ `url(${bgbg})` }   fontSize="xs" as={RouterLink} to="/auth"  className="loginbutton"  borderRadius="20px"  color= "white"     >
              Log in
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

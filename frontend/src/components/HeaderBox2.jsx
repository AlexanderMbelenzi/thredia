import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Image, Button, Link, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link as RouterLink, useLocation } from "react-router-dom";
import pizza2 from "/public/pizza4.png";
import pizza1 from "/public/pizza6.png";
import userAtom from "../atoms/userAtom";

const HeaderBox2 = () => {
    const user = useRecoilValue(userAtom);
    const [activeLink, setActiveLink] = useState("foryou");
    const borderBottom = useBreakpointValue({ base: "none", md: "1px" });
    const location = useLocation();

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const linkStyles = (link) => ({
        color: activeLink === link ? "#FFFFFF" : "#FFFFFF",
        position: "relative",
        _after: {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "4px",
            bottom: "-6px",
            left: 0,
            bg: "#FFFFFF",
            borderRadius: "4px",
            display: activeLink === link ? "block" : "none",
        },
        _hover: {
            textDecoration: "none",
            color: "#000000",
        },
    });

    return (
        <Box className="header-box2"   >
             <Flex justify="center" align="center" gap={2}>
                <Link
                    mb={1}
                
                    mr={2}
                    fontSize="md"
                    as={RouterLink}
                    to="/"
                    onClick={() => handleLinkClick("foryou")}
                    sx={linkStyles("foryou")}
                >
                    Foryou
                </Link>

                    
        <Box flexBasis="27%">
           
           <Box borderRadius="100%" mr={-12} overflow="hidden">
             <Image src={pizza2} alt="Pizza 1" width="30px" />
           </Box>
         </Box>
         <Box flexBasis="27%" >
           <Box borderRadius="100%" mr={-12} overflow="hidden">
             <Image src={pizza1} alt="Pizza 2" width="30px" />
           </Box>
         </Box>
         <Box flexBasis="27%">
           <Box borderRadius="100%" mr={-12} overflow="hidden">
             <Image src={pizza2} alt="Pizza 3" width="30px" />
           </Box>
         </Box>
                <Link
                    mb={1}
                    ml={8}
                    fontSize="md"
                    as={RouterLink}
                    to="/Home2"
                    onClick={() => handleLinkClick("following")}
                    sx={linkStyles("following")}
                >
                    Following
                </Link>
            </Flex>
        </Box>
    );
};

export default HeaderBox2;

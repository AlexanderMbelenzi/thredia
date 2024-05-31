import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Image, Button, Link, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link as RouterLink, useLocation } from "react-router-dom";

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
        <Box className="header-box2">
             <Flex justify="center" align="center" gap={8}>
                <Link
                    mb={1}
                    fontSize="md"
                    as={RouterLink}
                    to="/"
                    onClick={() => handleLinkClick("foryou")}
                    sx={linkStyles("foryou")}
                >
                    For you
                </Link>
                <Link
                    mb={1}
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

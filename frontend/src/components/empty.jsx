import React from "react";
import { Box, Flex, Image, Button, Link, useColorMode,Input, InputGroup, InputLeftElement } from "@chakra-ui/react";


const Empty = () => {
    const { colorMode, toggleColorMode } = useColorMode();
 

    return (

      <Box  borderLeft={"2px"} borderLeftColor={ colorMode === "light"? "gray.200" : "#2B2B2B"} 
       bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="999" position="fixed"  height={"4000px"}   >
        
    
      </Box>
    );
};

export default Empty;

import React from "react";
import { Box, Flex, Image, Button, Link, useColorMode,Input, InputGroup, InputLeftElement } from "@chakra-ui/react";


const Empty = () => {
    const { colorMode, toggleColorMode } = useColorMode();
 

    return (

      <Box  borderLeft={"1px"} mt={4} borderLeftColor={colorMode === "dark" ? "#2F3336 " : "#E1E8ED"}
       bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"} zIndex="998" position="fixed"  height={"4000px"}   >
        
    
      </Box>
    );
};

export default Empty;

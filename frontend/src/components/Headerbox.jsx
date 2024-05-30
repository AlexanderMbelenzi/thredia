import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import pizza2 from "/public/pizza4.png";
import pizza1 from "/public/pizza6.png";
import pizza3 from "/public/pizza5.png";
import { BsArrowUp } from "react-icons/bs";

const HeaderBox = () => {
  return (
    <Link  className="header-box">
      <Flex justify="space-between">
        <Box padding={1}>  <BsArrowUp /> </Box>
     
        <Box flexBasis="27%">
           
          <Box borderRadius="100%"  overflow="hidden">
            <Image src={pizza2} alt="Pizza 1" width="35px" />
          </Box>
        </Box>
        <Box flexBasis="27%" >
          <Box borderRadius="100%" ml={-3} overflow="hidden">
            <Image src={pizza1} alt="Pizza 2" width="35px" />
          </Box>
        </Box>
        <Box flexBasis="27%">
          <Box borderRadius="100%" ml={-3} overflow="hidden">
            <Image src={pizza2} alt="Pizza 3" width="35px" />
          </Box>
        </Box>
     
        <Box flexBasis="27%">
          <Box overflow="hidden">
          <Text fontSize={"xs"}>
            trends
          </Text>
          </Box>
          
        </Box>
      </Flex>
    </Link>
  );
};

export default HeaderBox;

import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import pizza2 from "/public/pizza4.png";
import pizza1 from "/public/pizza6.png";
import pizza3 from "/public/pizza5.png";
import { BsArrowUp } from "react-icons/bs";

const HeaderBox = () => {
  return (
    <Link  as={RouterLink}
    to="/discoverdailynews"   className="header-box">
      <Flex justify="center">
        <Box padding={1}  mt={1} flex={"center"} >   <BsArrowUp /> </Box>
     
        <Box flexBasis="27%">
           
          <Box borderRadius="100%" mr={-3} overflow="hidden">
            <Image src={pizza2} alt="Pizza 1" width="30px" />
          </Box>
        </Box>
        <Box flexBasis="27%" >
          <Box borderRadius="100%" mr={-3} overflow="hidden">
            <Image src={pizza1} alt="Pizza 2" width="30px" />
          </Box>
        </Box>
        <Box flexBasis="27%">
          <Box borderRadius="100%" mr={-3} overflow="hidden">
            <Image src={pizza2} alt="Pizza 3" width="30px" />
          </Box>
        </Box>
     
        <Box >
          <Box flex={"center"}  mt={1} ml={5} overflow="hidden">
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

import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { Button, useToast } from "@chakra-ui/react";
import { BsCamera } from "react-icons/bs"; 
import { CgMoreO } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { Link as RouterLink } from "react-router-dom";
import useFollowUnfollow from "../hooks/useFollowUnfollow";
import { useColorMode } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import bannerImage from "/public/banner4.jpeg";





const UserHeader = ({ user }) => {
    const { colorMode } = useColorMode();
    const toast = useToast();
    const currentUser = useRecoilValue(userAtom); // logged in user
    const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user);
	const navigate = useNavigate();


    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: "Success.",
                status: "success",
                description: "Profile link copied.",
                duration: 3000,
                isClosable: true,
            });
        });
    };

    const bgColor = colorMode === "dark" ? "#020203" : "#fcfeff";
    const borderColor = colorMode === "dark" ? "#8899A6" : "#657786";
    const textColor = colorMode === "dark" ? "#8899A6" : "#657786";
    const activeColor = colorMode === "dark" ? "white" : "black";

    return (
        <VStack  gap={4} left={"-8"} right={"-8"} alignItems={"start"}>

            {/* Banner Image */}
            <Box w="full" position="relative">
                <Image 
                    src={user.profilePic ? user.profilePic : bannerImage}  // Use the imported image
					alt="Banner Image" 
                    w="full" 
					height={{ base: "140px", sm: "140px", md: "200px" }}
                    objectFit="cover" 
                />
              
 <Box
    position="absolute"
    top="10px"
    left="10px"
    cursor="pointer"
>
    <Flex
        w="30px"
        h="30px"
        bg="rgba(0, 0, 0, 0.5)"
        borderRadius="full"
        alignItems="center"
        justifyContent="center"
    >
        <ArrowBackIcon color="white" />
    </Flex>

                </Box>
            </Box>

            <Flex justifyContent={"space-between"} w={"full"} position="relative">

                {/* Profile Image */}
                <Box position="absolute" top="-50px" left={{ base: "5px", sm: "5px", md: "20px" }}>
				<Avatar
    name={user.name}
    src={user.profilePic || 'https://bit.ly/broken-link'}
    size={{
        base: "xl",
        md: "2xl",
    }}
    border={`2px solid ${colorMode === "dark" ? "#020203" : "#fcfeff"}`}
/>
                </Box>

                {/* Profile Buttons */}
                <Flex mt={{ base: "0", md: "2" }} ml="auto" alignItems="center">
                    {currentUser?._id === user._id ? (
                        <>
                            <Link as={RouterLink} to="/update">
                                <Button
                                    size="sm"
									rounded={"20"}
									fontSize={{ base: "sm", md: "md" }}

                                    mr={2}
                                    bg={bgColor}
                                    border={`1px solid ${borderColor}`}
                                >
                                    Edit Profile
                                </Button>
                            </Link>
                            <Button
                                size="sm"
                                bg={bgColor}
								rounded={"20"}
								fontSize={{ base: "sm", md: "md" }}

                                border={`1px solid ${borderColor}`}
                                onClick={copyURL}
                            >
                                Share Profile
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                size="sm"
                                onClick={handleFollowUnfollow}
                                isLoading={updating}
                                mr={2}
								rounded={"20"}
								fontSize={{ base: "sm", md: "md" }}

                                bg={bgColor}
                                border={`1px solid ${borderColor}`}
                            >
                                {following ? "Unfollow" : "Follow"}
                            </Button>
                            <Link as={RouterLink} to="/chat">
                                <Button
                                    size="sm"
                                    mr={2}
									rounded={"20"}
									fontSize={{ base: "sm", md: "md" }}
                                    bg={bgColor}
                                    border={`1px solid ${borderColor}`}
                                >
                                    Message
                                </Button>
                            </Link>
                        </>
                    )}
                </Flex>
            </Flex>

            <Box mt={{ base: "0", md: "10" }} pl={{ base: "5px", sm: "5px", md: "20px" }} w="full">
                {/* User Info */}
                <Text       fontSize={{ base: "lg", md: "xl" }} fontWeight={"bold"}>{user.name}</Text>
                <Text       fontSize={{ base: "xs", md: "sm" }} color={textColor}>@{user.username}</Text>
                <Text       fontSize={{ base: "xs", md: "sm" }} mt={{ base: "1px", sm: "2px", md: "2px" }} >{user.bio}</Text>

                {/* Followers and Following */}
                <Flex  mt={{ base: "2", md: "4" }} alignItems={"center"}>
                    <Text fontSize={{ base: "sm", md: "md" }}  color={activeColor}>{user.followers.length}</Text>
                    <Text fontSize={{ base: "sm", md: "md" }} ml={1} color={textColor}>followers</Text>
                    <Text fontSize={{ base: "sm", md: "md" }} ml={4} color={activeColor}>{user.following.length}</Text>
                    <Text fontSize={{ base: "sm", md: "md" }} ml={1} color={textColor}>following</Text>
                </Flex>
            </Box>

            {/* Posts, Replies, Media, Likes */}
            <Flex w={"full"} justifyContent={"space-between"}>
			<Flex
                flex={1}
                borderBottom={"none"}
                justifyContent={"center"}
                pb='3'
                cursor={"pointer"}
                position="relative"
            >
                <Text fontWeight={"bold"} fontSize={{ base: "sm", md: "md" }} color={activeColor}>Posts</Text>
                <Box
			
                    position="absolute"
                    bottom="-1px"
                    w="full"
                    h="2px"
                    bg="#007bff"
                
                />
            </Flex>

                <Flex
                    flex={1}
                    borderBottom={"1px solid"}
                    borderColor={textColor}
                    justifyContent={"center"}
                    color={textColor}
                    pb='3'
                    cursor={"pointer"}
                >
                    <Text fontSize={{ base: "sm", md: "md" }} fontWeight={"bold"}>Replies</Text>
                </Flex>
                <Flex
                    flex={1}
                    borderBottom={"1px solid"}
                    borderColor={textColor}
                    justifyContent={"center"}
                    color={textColor}
                    pb='3'
                    cursor={"pointer"}
                >
                    <Text fontSize={{ base: "sm", md: "md" }} fontWeight={"bold"}>Media</Text>
                </Flex>
                <Flex
                    flex={1}
                    borderBottom={"1px solid"}
                    borderColor={textColor}
                    justifyContent={"center"}
                    color={textColor}
                    pb='3'
                    cursor={"pointer"}
                >
                    <Text fontSize={{ base: "sm", md: "md" }} fontWeight={"bold"}>Likes</Text>
                </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;

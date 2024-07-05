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
        <VStack  gap={4} alignItems={"start"}>

            {/* Banner Image */}
            <Box w="full" position="relative">
                <Image 
                    src={user.profilePic || 'https://bit.ly/broken-link'} 
                    alt="Banner Image" 
                    w="full" 
                    h="200px" 
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
                <Box position="absolute" top="-50px" left="20px">
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
                <Flex mt={2} ml="auto" alignItems="center">
                    {currentUser?._id === user._id ? (
                        <>
                            <Link as={RouterLink} to="/update">
                                <Button
                                    size="sm"
									rounded={"20"}
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
                                bg={bgColor}
                                border={`1px solid ${borderColor}`}
                            >
                                {following ? "Unfollow" : "Follow"}
                            </Button>
                            <Link as={RouterLink} to="/chat">
                                <Button
                                    size="sm"
                                    mr={2}
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

            <Box mt="20px" pl="20px" w="full">
                {/* User Info */}
                <Text fontSize={"xl"} fontWeight={"bold"}>{user.name}</Text>
                <Text fontSize={"sm"} color={textColor}>{user.username}</Text>
                <Text mt={2}>{user.bio}</Text>

                {/* Followers and Following */}
                <Flex gap={4} mt={4} alignItems={"center"}>
                    <Text color={activeColor}>{user.followers.length}</Text>
                    <Text color={textColor}>followers</Text>
                    <Text color={activeColor}>{user.following.length}</Text>
                    <Text color={textColor}>following</Text>
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
                <Text fontWeight={"bold"} color={activeColor}>Posts</Text>
                <Box
                    position="absolute"
                    bottom="-2px"
                    w="full"
                    h="2px"
                    bg="#007bff"
                    boxShadow="0 0 10px #007bff"
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
                    <Text fontWeight={"bold"}>Replies</Text>
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
                    <Text fontWeight={"bold"}>Media</Text>
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
                    <Text fontWeight={"bold"}>Likes</Text>
                </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;

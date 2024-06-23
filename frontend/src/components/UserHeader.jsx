import { Avatar, Box, Flex, Link, Text, VStack, Button, IconButton, useToast, HStack } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/react";
import { BsCamera } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { Link as RouterLink } from "react-router-dom";
import userAtom from "../atoms/userAtom";
import useFollowUnfollow from "../hooks/useFollowUnfollow";
import { useColorMode } from "@chakra-ui/react";

const UserHeader = ({ user }) => {
    const { colorMode } = useColorMode();
    const toast = useToast();
    const currentUser = useRecoilValue(userAtom); // logged in user
    const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user);

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

    return (
        <VStack mt={50} gap={4} alignItems="start">
            <Flex w="full" alignItems="center" justifyContent="space-between">
                <IconButton
                    as={RouterLink}
                    to="/"
                    icon={<IoIosArrowBack />}
                    variant="ghost"
                    aria-label="Back"
                />
                <Text fontSize="xl" fontWeight="bold">
                    {user.name}
                </Text>
                <Menu>
                    <MenuButton as={IconButton} icon={<CgMoreO />} variant="ghost" />
                    <Portal>
                        <MenuList>
                            <MenuItem onClick={copyURL}>Copy link</MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
            </Flex>

            <Flex w="full" alignItems="center">
                <Box mt={2}>
                    <Avatar
                        name={user.name}
                        src={user.profilePic || "https://bit.ly/broken-link"}
                        size={{ base: "md", md: "xl" }}
                    />
                </Box>
                <Flex direction="column" ml={4} flex={1} justifyContent="center" alignItems="center">
                    <HStack spacing={4} mb={2}>
                        <Box textAlign="center">
                            <Text fontWeight="bold">{user.posts?.length || 0}</Text>
                            <Text fontSize="sm" color="gray.500">posts</Text>
                        </Box>
                        <Box textAlign="center">
                            <Text fontWeight="bold">{user.followers?.length || 0}</Text>
                            <Text fontSize="sm" color="gray.500">followers</Text>
                        </Box>
                        <Box textAlign="center">
                            <Text fontWeight="bold">{user.following?.length || 0}</Text>
                            <Text fontSize="sm" color="gray.500">following</Text>
                        </Box>
                    </HStack>
                    <Text fontSize="sm" color="gray.500">
                        @{user.username}
                    </Text>
                </Flex>
            </Flex>

            <Text>{user.bio}</Text>

            <Flex w="full" justifyContent="center" mt={2}>
                {currentUser?._id === user._id ? (
                    <>
                        <Link as={RouterLink} to="/update">
                            <Button size="sm" mr={2}>
                                Edit Profile
                            </Button>
                        </Link>
                        <Button size="sm" onClick={copyURL}>
                            Share Profile
                        </Button>
                    </>
                ) : (
                    <>
                        <Button size="sm" onClick={handleFollowUnfollow} isLoading={updating} mr={2}>
                            {following ? "Unfollow" : "Follow"}
                        </Button>
                        <Button size="sm">Message</Button>
                    </>
                )}
            </Flex>

            <Flex w="full" mt={4}>
                <Flex flex={1} borderBottom="1.5px solid white" justifyContent="center" pb="3" cursor="pointer">
                    <Text fontWeight="bold">Posts</Text>
                </Flex>
                <Flex
                    flex={1}
                    borderBottom="1px solid gray"
                    justifyContent="center"
                    color={colorMode === "light" ? "gray.300" : "#2B2B2B"}
                    pb="3"
                    cursor="pointer"
                >
                    <Text fontWeight="bold">Replies</Text>
                </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;

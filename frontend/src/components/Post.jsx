import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link, useNavigate } from "react-router-dom";
import Actions from "./Actions";
import { useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import { formatDistanceToNow } from "date-fns";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import postsAtom from "../atoms/postsAtom";

const Post = ({ post, postedBy }) => {
  const { colorMode } = useColorMode();

  const [user, setUser] = useState(null);
  const [showFullText, setShowFullText] = useState(false);
  const showToast = useShowToast();
  const currentUser = useRecoilValue(userAtom);
  const [posts, setPosts] = useRecoilState(postsAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("/api/users/profile/" + postedBy);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error.message, "error");
        setUser(null);
      }
    };
    getUser();
  }, [postedBy, showToast]);

  const handleDeletePost = async (e) => {
    try {
      e.preventDefault();
      if (!window.confirm("Are you sure you want to delete this post?")) return;

      const res = await fetch(`/api/posts/${post._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      showToast("Success", "Post deleted", "success");
      setPosts(posts.filter((p) => p._id !== post._id));
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  const toggleTextDisplay = () => setShowFullText(!showFullText);

  if (!user) return null;

  const TEXT_LIMIT = 300; // Character limit to truncate the text

  const shouldTruncate = post.text.length > TEXT_LIMIT;

  return (
    <Box wordBreak="break-word">
      <Link to={`/${user.username}/post/${post._id}`}>
        <Flex gap={3} paddingTop={3} flexDirection={{ base: "column", md: "row" }}>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Box position="relative">
              <Avatar
                size={{
                  base: "sm",
                  sm: "sm",
                  md: "md",
                }}
                name={user.name}
                src={user?.profilePic}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${user.username}`);
                }}
                zIndex={1}
              />
            </Box>
            <Box
              w='1px'
              h={{ base: "1px", md: "full" }}
              bg={colorMode === "light" ? "gray.300" : "#2B2B2B"}
              my={2}
              mb={4}
            ></Box>
            <Box position={"relative"} w={"full"}>
              {post.replies.length === 0 && (
                <Text textAlign={"center"}>
                  <Text w={5} h={5} ml={3} mb={-2}>🥱</Text>
                </Text>
              )}
              <Flex mt={4} justifyContent="center">
                {post.replies.slice(0, 3).map((reply, index) => (
                  <Avatar
                    key={index}
                    size='xs'
                    name='John Doe'
                    src={reply.userProfilePic}
                    position={"relative"}
                    marginLeft={index !== 0 ? -2 : 0}
                  />
                ))}
              </Flex>
            </Box>
          </Flex>

          <Flex flex={1} flexDirection={"column"} gap={2}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <Flex w={"full"} alignItems={"center"}>
                <Text
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/${user.username}`);
                  }}
                >
                  {user?.name}
                </Text>
                <Image src='/verified.png' w={4} h={4} ml={1} />
                <Box w={0.5} h={0.5} mx={1} borderRadius={"full"} bg={"gray.light"}></Box>
                <Text fontSize={"xs"} textAlign={"left"} color="#68717a">
                  {formatDistanceToNow(new Date(post.createdAt))}
                </Text>
              </Flex>
              <Flex gap={4} alignItems={"center"}>
                <Text fontSize={"sm"} textAlign={"right"} color="#68717a">
                  ...
                </Text>
                {currentUser?._id === user._id && (
                  <DeleteIcon size={18} onClick={handleDeletePost} />
                )}
              </Flex>
            </Flex>
            <Text
              noOfLines={showFullText ? null : 5}
              overflow={showFullText ? "visible" : "hidden"}
              display={showFullText ? "block" : "-webkit-box"}
              style={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: showFullText ? "none" : 5,
              }}
              mt={-2}
              fontSize={{ base: "xs", md: "md" }}
              fontFamily="'Noto Sans', Arial, sans-serif"
              fontWeight={"normal"}
            >
              {showFullText ? post.text : `${post.text.slice(0, TEXT_LIMIT)}`}
              {shouldTruncate && !showFullText && (
                <Text
                  as="span"
                  fontSize={"xs"}
                  color="#007bff"
                  cursor="pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTextDisplay();
                  }}
                >
                  {" ... Show more"}
                </Text>
              )}
              {shouldTruncate && showFullText && (
                <Text
                  as="span"
                  fontSize={"xs"}
                  color="#007bff"
                  cursor="pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTextDisplay();
                  }}
                >
                  {" Show less"}
                </Text>
              )}
            </Text>
            {post.img && (
              <Box
                maxH={{ base: "300px", md: "600px" }}
                overflow="hidden"
                position="relative"
                borderRadius={6}
              >
                <Box
                  filter="blur(40px)"
                  backgroundImage={`url(${post.img})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  w="full"
                  h="full"
                  position="absolute"
                  top={0}
                  left={0}
                  borderRadius={6}
                />
                <Image
                  src={post.img}
                  w="full"
                  h="full"
                  objectFit="contain"
                  borderRadius={6}
                  boxShadow={`0px 0px 0px 15px ${
                    colorMode === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.5)"
                  }`}
                  position="relative"
                />
              </Box>
            )}
            <Flex gap={3} my={1}>
              <Actions post={post} />
            </Flex>
          </Flex>
        </Flex>
        <Box
          w="full"
          h="1px"
          bg={colorMode === "light" ? "gray.300" : "#2B2B2B"}
          mt={4}
        ></Box>
      </Link>
    </Box>
  );
};

export default Post;

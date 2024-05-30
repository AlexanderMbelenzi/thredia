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
import emoji from "/public/emoji2.png"; // Import your PNG image
import round from "/public/round.png"; // Import your PNG image

const Post = ({ post, postedBy }) => {
  const { colorMode } = useColorMode(); // Hook to access color mode

  const [user, setUser] = useState(null);
  const [showFullText, setShowFullText] = useState(false); // State to manage text display
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

  const renderText = () => {
    const sentences = post.text.split('. ');
    if (sentences.length <= 2 || showFullText) {
      return post.text;
    }
    return sentences.slice(0, 2).join('. ') + '...';
  };

  if (!user) return null;
  return (

	
    <Box wordBreak="break-word">
      <Link to={`/${user.username}/post/${post._id}`}>
        <Flex gap={3} paddingTop={3}>
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

            <Box w='1px' h={"full"} bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} my={2} mb={4}></Box>
            <Box position={"relative"} w={"full"}>
              {post.replies.length === 0 && (
                <Text textAlign={"center"}>
                  <Image src={emoji} alt="emoji" w={5} h={5} ml={3} mb={-2} />
                </Text>
              )}
              <Flex mt={4}>
                {post.replies[0] && (
                  <Avatar
                    size='xs'
                    name='John doe'
                    src={post.replies[0].userProfilePic}
                    position={"absolute"}
                    top={"0px"}
                    left='15px'
                    padding={"2px"}
                  />
                )}
                {post.replies[1] && (
                  <Avatar
                    size='2xs'
                    name='John doe'
                    src={post.replies[1].userProfilePic}
                    position={"absolute"}
                    bottom={"15px"}
                    right='8px'
                    padding={"2px"}
                  />
                )}
                {post.replies[2] && (
                  <Avatar
                    size='xs'
                    name='John doe'
                    src={post.replies[2].userProfilePic}
                    position={"absolute"}
                    bottom={"15px"}
                    left='-1px'
                    padding={"2px"}
                  />
                )}
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
                    navigate(`/${user.name}`);
                  }}
                >
                  {user?.name}
                </Text>
                <Image src='/verified.png' w={4} h={4} ml={1} />
                <Box w={0.5} h={0.5} mx={1} borderRadius={"full"} bg={"gray.light"}></Box>
                <Text fontSize={"xs"} textAlign={"left"} color={"gray.light"}>
                  {formatDistanceToNow(new Date(post.createdAt))}
                </Text>
              </Flex>
              <Flex gap={4} alignItems={"center"} marginLeft={"-20"}>
                <Text fontSize={"sm"} textAlign={"right"} color={"gray.light"}>
                  ...
                </Text>
                {currentUser?._id === user._id && <DeleteIcon size={18} onClick={handleDeletePost} />}
              </Flex>
            </Flex>
            <Text
              mt={-2}
              fontSize={{ base: "xs", md: "16px" }}
              fontFamily="'Noto Sans', Arial, sans-serif"
              fontWeight={"normal"}
            >
              {renderText()}
              {post.text.split('. ').length > 2 && !showFullText && (
                <Text
                  as="span"
                  color="blue.500"
                  cursor="pointer"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior
                    toggleTextDisplay();
                  }}
				  >
                  Show more
                </Text>
              )}
              {showFullText && (
                <Text
                  as="span"
                  color="blue.500"
                  cursor="pointer"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default behavior
                    toggleTextDisplay();
                  }}
                >
                  Show less
                </Text>
              )}
            </Text>
            {post.img && (
              <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={colorMode === "light" ? "gray.400" : "#2B2B2B"}>
                <Image src={post.img} w={"full"} />
              </Box>
            )}
            <Flex gap={3} my={1}>
              <Actions post={post} />
            </Flex>
          </Flex>
        </Flex>
        <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"} mt={4}></Box>
      </Link>
    </Box>
  );
};

export default Post;

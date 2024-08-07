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
      <Box display={{
      base: " block",
      md: "none",
    }}>
<Link to={`/${user.username}/post/${post._id}`}>
          <Flex gap={3} paddingTop={3} >
     

        
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Box position="relative">
            <Avatar
  width={{ base: "35px", sm: "35px", md: "35px" }}
  height={{ base: "35px", sm: "35px", md: "35px" }}
  name={user.name}
  src={user?.profilePic}
  onClick={(e) => {
    e.preventDefault();
    navigate(`/${user.username}`);
  }}
  zIndex={1}
/>
            </Box>
            <Box w='1px' h={"full"} bg={colorMode === "dark" ? "#14171a " : "#dfecf5"} my={2} mb={6}></Box>

        




            <Box position={"relative"} w={"full"}    
           >
              {post.replies.length === 0 && (
                <Text textAlign={"center"}>
            <Text w={5} h={5} ml={2} mb={-2}  >🥱</Text>
                </Text>
              )}
              <Flex mt={4}   >
                {post.replies[0] && (
                  <Avatar
                    size='xs'
                    name='John doe'
                    src={post.replies[0].userProfilePic}
                    position={"absolute"}
                    top={"-15px"}
                    left='8px'
                    padding={"3px"}
                  />
                )}
                {post.replies[1] && (
                  <Avatar
                    name='John doe'
                    src={post.replies[1].userProfilePic}
                    padding={"3px"}
                    style={{
                      width: '26px',
                      height: '26px',
                      position: "absolute",
                      top: "-32px",
                      left: '14px',
                  
                      transform: "scale(0.5)", // Example: scaling down the avatar
                    }}
                  />
                )}
                {post.replies[2] && (
                  <Avatar
                
                  name='John doe'
                    src={post.replies[2].userProfilePic}
                    style={{
                      width: '35px',
                      height: '35px',
                      position: "absolute",
                      top: "-38px",
                      left: '-4px',
                      padding: "3px",
                      transform: "scale(0.5)", // Example: scaling down the avatar
                    }}
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
                    navigate(`/${user.username}`);
                  }}
                >
                  {user?.name}
                </Text>
                <Image src='/verified.png' w={4} h={4} ml={1} />
                <Box w={0.5} h={0.5} mx={1} borderRadius={"full"} bg={"gray.light"}></Box>
                <Text fontSize={"xs"} textAlign={"left"} color={colorMode === "dark" ? "#8899A6 " : "#657786"}>
                  {formatDistanceToNow(new Date(post.createdAt))}
                </Text>
              </Flex>
              <Flex gap={4} alignItems={"center"} marginLeft={"-20"}>
                <Text fontSize={"sm"} textAlign={"right"} color={colorMode === "dark" ? "#8899A6 " : "#657786"}>
                  ...
                </Text>
                {currentUser?._id === user._id && <DeleteIcon size={18} color={colorMode === "dark" ? "#8899A6 " : "#657786"} onClick={handleDeletePost} />}
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
              color={colorMode === "dark" ? "#dfecf5 " : "#0F1419"}
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
                maxH={{ base: "300", md: "600" }}
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
                    colorMode === "light"
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(0, 0, 0, 0.5)"
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

        
        <Box w="full" h="1px" bg={colorMode === "dark" ? "#14171a " : "#dfecf5"} mt={1}></Box>
      </Link>
    </Box>









    <Box display={{
      base: " none ",
      md: "block",
    }}>
<Link to={`/${user.username}/post/${post._id}`}>

       <Flex gap={3} paddingTop={3}>
  

       <Flex
  flex={1}
  flexDirection="column"
  gap={2}
  rounded="lg"
  padding={4}
  style={{
    boxShadow: `0 ${colorMode === "light" ? 2 : -2}px 4px rgba(0, 0, 0, 0.2)`,
    backgroundColor: colorMode === "light" ? "#ffffff" : "#1e1e1e",
  }}
>
    <Flex justifyContent={"space-between"} w={"full"}>
      <Flex w={"full"} alignItems={"center"}>
      <Box position="relative">
    <Avatar
width={{ base: "35px", sm: "35px", md: "35px" }}
height={{ base: "35px", sm: "35px", md: "35px" }}
name={user.name}
src={user?.profilePic}
onClick={(e) => {
e.preventDefault();
navigate(`/${user.username}`);
}}
zIndex={1}
/>
    </Box  >
        <Text
           ml={2}
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
        <Text fontSize={"xs"} textAlign={"left"} color={colorMode === "dark" ? "#8899A6 " : "#657786"}>
          {formatDistanceToNow(new Date(post.createdAt))}
        </Text>
      </Flex>
      <Flex gap={4} alignItems={"center"} marginLeft={"-20"}>
        <Text fontSize={"sm"} textAlign={"right"} color={colorMode === "dark" ? "#8899A6 " : "#657786"}>
          ...
        </Text>
        {currentUser?._id === user._id && <DeleteIcon size={18} color={colorMode === "dark" ? "#8899A6 " : "#657786"} onClick={handleDeletePost} />}
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
  
      fontSize={{ base: "xs", md: "md" }}
      fontFamily="'Noto Sans', Arial, sans-serif"
      color={colorMode === "dark" ? "#dfecf5 " : "#0F1419"}
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
      pb={2}
        maxH={{ base: "300", md: "600" }}
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
            colorMode === "light"
              ? "rgba(0, 0, 0, 0.1)"
              : "rgba(0, 0, 0, 0.5)"
          }`}
          position="relative"
        />
      </Box>
    )}
    <Flex gap={3} my={1}>




    <Box ml={"-2"} mt={"-1"} position={"relative"}   
   >
      {post.replies.length === 0 && (
        <Text textAlign={"center"}>
    <Text w={5} h={5} ml={2}   >🥱</Text>
        </Text>
      )}
      <Flex  mr={8} ml={6}   >
        {post.replies[0] && (
          <Avatar
            size='xs'
            name='John doe'
            src={post.replies[0].userProfilePic}
            position={"absolute"}
          
            left='25px'
            padding={"3px"}
          />
        )}
        {post.replies[1] && (
          <Avatar
          size='xs'
          name='John doe'
          src={post.replies[0].userProfilePic}
          position={"absolute"}
          left={"15"}

          
          padding={"3px"}
          />
        )}
        {post.replies[2] && (
          <Avatar
        
          size='xs'
          name='John doe'
          src={post.replies[0].userProfilePic}
          position={"absolute"}
          left={"2"}
         
          
          padding={"3px"}
          />
        )}
      </Flex>
    </Box>

      <Actions post={post} />
    </Flex>
  </Flex>
   </Flex>


       </Link>

    </Box>    </Box>
  );
};

export default Post;







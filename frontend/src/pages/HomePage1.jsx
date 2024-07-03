import { Box, Flex, Spinner, Text, Image, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";
import { useColorMode } from "@chakra-ui/react";
import Empty from "../components/empty";


// Import images
import error from "/public/error.png";
import pizza1 from "/public/image2.jpeg";
import pizza3 from "/public/woslogo.jpg";
import pizza4 from "/public/image3.jpeg";
import pizza7 from "/public/caro3.jpg";
import pizza6 from "/public/caro2.jpg";
import pizza5 from "/public/caro1.png";

// Helper function to render the image box with overlayimport { Box, Image, Text } from '@chakra-ui/react';

const ImageBox = ({ src, alt, name, smallSrc, topic, subtopic }) => {
  return (
    <Box position="relative" flexBasis={{ base: "33%", md: "33%", lg: "33%" }}>
      <Image src={src} alt={alt} width="100%" height={"110%"} borderRadius="lg" />
      
      {/* Dark overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.2)" // Adjust the opacity as needed
        borderRadius="lg"
        zIndex="1"
      />

      <Box position="absolute" left={{ base: "2", md: "4", lg: "4" }} right="1" bottom={{ base: "4%", md: "8%", lg: "8%" }} overflow="hidden" zIndex="2">
        <Box>
          <Text
            mb="-1"
            color= "#dfecf5"
            fontWeight="bold"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize={{ base: "18px", md: "25px", lg: "25px" }}
            maxWidth="100%" // Add this to ensure text does not overflow the parent container
          >
            {topic}
          </Text>
          <Text
            mb={"-1"}
            color="#ccd6de"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize={{ base: "12px", md: "18px", lg: "18px" }}
            maxWidth="100%" // Add this to ensure text does not overflow the parent container
          >
            {subtopic}
          </Text>
        </Box>

        <Box display="flex" alignItems="center" mt="2">
          <Image src={smallSrc} alt={name} rounded={"50%"} boxSize={{ base: "25px", md: "35px", lg: "35px" }} borderRadius="full" />
          <Text
            ml="1"
            color="#dfecf5 "
            fontWeight="bold"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize={{ base: "11px", md: "14px", lg: "16px" }}
            maxWidth="calc(100% - 45px)" // Adjust width considering the space taken by the image and margin
          >
            {name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};


const HomePage1 = () => {
  const { colorMode } = useColorMode(); // Hook to access color mode

  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    
    <Flex maxWidth={1400} mt={2} alignItems="flex-start">
      
      <Box
        flex={16}
        display={{
          base: "none",
          md: "block",
        }}
      >
        
        <SideBar />
      </Box>

      <Box
      
        borderLeftColor={colorMode === "light" ? "gray.200" : "#2B2B2B"}
        flex={1}
        
        mt={35}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <Empty />
      </Box>

      <Box flex={33} marginTop={35}  marginBottom={55}>
        <Box mt={6} mb={4}>
          <Flex justify="space-between">
            <ImageBox
              src={pizza5}
              alt="Pizza 1"
              name="goanonymous"
              smallSrc={pizza1}
              topic="Politics "
              subtopic="Race to the statehouse 2027 "
            />
            <ImageBox
              src={pizza6}
              alt="Pizza 2"
              name="WOS"
              smallSrc={pizza3}
              topic=" WOS-Wall Of Shame "
              subtopic="The secret behind GenZ riots in Kenya  "
            />
            <ImageBox
              src={pizza7}
              alt="Pizza 3"
              name="spacex"
              smallSrc={pizza4}
              topic="spaceX"
              subtopic="Watch live as spaceX's Starship sore to the skies"
            />
          </Flex>
        </Box  >
        
        
   <Box>

<Box   marginTop={5}> 
  
        {!loading && posts.length === 0 && (
          <h1>
            <Flex justify="center">
            Welcome to bluesky, share your opinions    
             </Flex><br />     
                  
           <Flex justify="center">
          Opps! An error occurred please refresh the page and try again     
           </Flex> <br />
           <Flex justify={"center"}>
           <Image src={error} alt={error} height={{ base: "50", md: "150", lg: "150" }}  borderRadius="lg" />
           </Flex>
        </h1>
 )}

        {loading && (
          <Flex justify="center">
            <Spinner size="xl" />
          </Flex>
        )}

      </Box>

        {posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>
      </Box>





      <Box
        borderLeft={"2px"}
        borderLeftColor={colorMode === "light" ? "gray.200" : "#2B2B2B"}
        flex={1}
        ml={4}
      
        mt={35}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <Empty />
      </Box>

      <Box
        flex={18}
        display={{
          base: "none",
          lg: "block",
        }}
      >
        <SuggestedUsers />
      </Box>
    </Flex>
  );
};

export default HomePage1;

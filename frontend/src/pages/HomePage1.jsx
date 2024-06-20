import { Box, Flex, Spinner, Text, Image } from "@chakra-ui/react";
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
import pizza1 from "/public/pizza6.png";
import pizza3 from "/public/34.png";
import pizza4 from "/public/pizza4.png";
import pizza7 from "/public/s1.png";
import pizza6 from "/public/s3.png";
import pizza5 from "/public/s2.jpg";

// Helper function to render the image box with overlayimport { Box, Image, Text } from '@chakra-ui/react';

const ImageBox = ({ src, alt, name, smallSrc, topic, subtopic }) => {
  return (
    <Box position="relative" flexBasis="33%" mr="3">
      <Image src={src} alt={alt} width="100%" borderRadius="lg" />
      <Box position="absolute" left={{ base: "2", md: "4", lg: "4" }} right="1" bottom={{ base: "4%", md: "8%", lg: "8%" }} overflow="hidden">
        <Box>
          <Text
            mb="-1"
            color="white"
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
            color="white"
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
          <Image src={smallSrc} alt={name} boxSize={{ base: "25px", md: "35px", lg: "35px" }} borderRadius="full" />
          <Text
            ml="1"
            color="white"
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
    <Flex maxWidth={1800} mt={6} alignItems="flex-start">
      <Box
        flex={15}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <SideBar />
      </Box>

      <Box
        borderLeft={"2px"}
        borderLeftColor={colorMode === "light" ? "gray.200" : "#2B2B2B"}
        flex={1}
        px={8}
        mt={35}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <Empty />
      </Box>

      <Box flex={35} marginTop={35}  marginBottom={55}>
        <Box mt={6} mb={4}>
          <Flex justify="space-between">
            <ImageBox
              src={pizza5}
              alt="Pizza 1"
              name="Crypto"
              smallSrc={pizza1}
              topic="Bitcoin"
              subtopic="The cypto world has hit an all time high of 62,000"
            />
            <ImageBox
              src={pizza6}
              alt="Pizza 2"
              name="Gaming"
              smallSrc={pizza3}
              topic="Minecraft"
              subtopic="House of the dragons comming soon "
            />
            <ImageBox
              src={pizza7}
              alt="Pizza 3"
              name="Technology"
              smallSrc={pizza4}
              topic="Nvidia"
              subtopic="Nvidiaa has envailed it new Gforce  RTX GPU"
            />
          </Flex>
        </Box  >

<Box   marginTop={55}>
        {!loading && posts.length === 0 && (
          <h1>
            <Flex justify="center">
            Welcome to reddit, share your ideas    
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

        {posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>
      </Box>





      <Box
        borderLeft={"8px"}
        borderLeftColor={colorMode === "light" ? "gray.200" : "#2B2B2B"}
        flex={1}
        px={8}
        mt={35}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <Empty />
      </Box>

      <Box
        flex={17}
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

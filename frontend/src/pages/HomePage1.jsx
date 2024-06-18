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
import pizza2 from "/public/sec1.png";
import pizza1 from "/public/pizza6.png";
import pizza3 from "/public/34.png";
import pizza4 from "/public/pizza4.png";
import pizza7 from "/public/s1.png";
import pizza6 from "/public/s3.png";
import pizza5 from "/public/s2.jpg";

// Helper function to render the image box with overlay
const ImageBox = ({ src, alt, name, smallSrc, topic, subtopic }) => {
  return (
    <Box position="relative" flexBasis="33%" mr="3">
    <Image src={src} alt={alt} width="100%" borderRadius="lg" />
    <Box  position="absolute" left="4"  bottom={"8%"}  >
    <Box  right={1}>
      <Text
      mb={"-1"}
        color="white"
        fontWeight="bold"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow={"ellipsis"}
        fontSize={{ base: "20px", md: "25px", lg: "25px" }}
      >
        {topic}
      </Text>
      <Text
        color="white"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow={"ellipsis"}
        

        fontSize={{ base: "15px", md: "18x", lg: "18px" }}
      >
        {subtopic}
      </Text>
    </Box>

    <Box   display="flex" alignItems="center">
      <Image src={smallSrc}  alt={name} boxSize={{ base: "25px", md: "35px", lg: "35px" }}  borderRadius="full" />
      <Text
        ml="2"
        
        color="white"
        fontWeight="bold"
        whiteSpace="nowrap"
        overflow="hidden"
        fontSize={{ base: "12px", md: "14px", lg: "16px" }}
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

      <Box flex={33} marginTop={35} marginLeft={"5%"} marginBottom={35}>
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
        </Box>

        {!loading && posts.length === 0 && (
          <h1>
            Welcome to bidoi, share your ideas <br /> An error occurred please refresh the page and try again
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

      <Box
        flex={25}
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

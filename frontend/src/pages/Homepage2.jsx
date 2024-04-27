
import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";
import {  useColorMode ,    } from "@chakra-ui/react";







const HomePage2 = () => {
  const { colorMode } = useColorMode(); // Hook to access color mode

	const [posts, setPosts] = useRecoilState(postsAtom);
	const [loading, setLoading] = useState(true);
	const showToast = useShowToast();
	useEffect(() => {
		const getFeedPosts2 = async () => {
			setLoading(true);
			setPosts([]);
			try {
				const res = await fetch("/api/posts/feed2");
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
		getFeedPosts2();
	}, [showToast, setPosts]);


  return (
	
    <Flex gap="10"  maxWidth={1250} mt={3.5} alignItems="flex-start"  >
      <Box  
	         flex={23}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <SideBar /> {/* Corrected the component name */}
      </Box>
      <Box flex={58} marginTop={35}>
      <Box w="full" h="1px" bg={colorMode === "light" ? "gray.300" : "#2B2B2B"}  mt={4}></Box>

        {!loading && posts.length === 0 && (
          <h1>Welcome to bidoi, share your ideas</h1>
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
        flex={35}
        display={{
          base: "none",
          md: "block",
        }}
      >
    				<SuggestedUsers />

      </Box>
    </Flex>
  );
};

export default HomePage2;

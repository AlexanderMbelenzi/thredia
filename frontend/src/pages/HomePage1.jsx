
import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";
import {  useColorMode ,    } from "@chakra-ui/react";
import { px } from "framer-motion";
import Empty from "../components/empty";

import { Image } from "@chakra-ui/react";

import RoundButton from "../components/scrolltotop";
import HeaderBox from "../components/Headerbox";
import pizza2 from "/public/sec1.png";
import pizza1 from "/public/sec2.png";
import pizza3 from "/public/sec3.png";
import pizza4 from "/public/sec4.webp";

import pizza7 from "/public/s1.png";
import pizza6 from "/public/s3.png";
import pizza5 from "/public/s2.jpg";

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
	
    <Flex gap="10"  maxWidth={1250} mt={6} alignItems="flex-start"  >



      
      <Box      

	         flex={25}
        display={{
          base: "none",
          md: "block",
          
        }}
      >      					

        <SideBar    /> {/* Corrected the component name */}
</Box>


  
<Box
  borderLeft={"2px"} 
  borderLeftColor={colorMode === "light"? "gray.200" : "#2B2B2B"}
  flex={1}
  px={8}
  mt={35}
  display={{
    base: "none",    // Hide on small screens
    md: "block",     // Show on medium and larger screens
  }}
>
  <Empty />
</Box>


      <Box flex={80} marginTop={35} marginBottom={35}  >


        <Box mt={6} mb={4}>
<Flex><Box>
  <Flex justify="space-between">
    <Box flexBasis="27%" marginRight="4"   display={{
    base: "none", // Hide on small screens
    lg: "block", // Show on large screens and above (>= 1000px)
  }}  >
      <Image src={pizza1} alt="Pizza 1" width="100%"   borderRadius="md" />
    </Box>
    <Box flexBasis="27%" marginRight="4"  display={{
    base: "none", // Hide on small screens
    lg: "block", // Show on large screens and above (>= 1000px)
  }} >
      <Image src={pizza2} alt="Pizza 2" width="100%"   borderRadius="md" />
    </Box>
    <Box flexBasis="27%" marginRight="4"   display={{
    base: "none", // Hide on small screens
    lg: "block", // Show on large screens and above (>= 1000px)
  }}  >
      <Image src={pizza3} alt="Pizza 3" width="100%"     borderRadius="md" />
    </Box>
    <Box flexBasis="27%"    display={{
    base: "none", // Hide on small screens
    lg: "block", // Show on large screens and above (>= 1000px)
  }}  >
      <Image src={pizza4} alt="Pizza 4" width="100%"   borderRadius="md" />
    </Box>




    <Box
  flexBasis="33%" mr="2"
  display={{
    base: "block", // Show on small screens
    md: "none", 
    lg: "none",    // Hide on large screens and above (>= 1000px)
  }}
>
  <Image src={pizza5} alt="Pizza 4" width="100%" borderRadius="md" />
</Box>


<Box
  flexBasis="33%" mr="2"
  display={{
    base: "block", // Show on small screens
    md: "none", 
    lg: "none",    // Hide on large screens and above (>= 1000px)
  }}
>
  <Image src={pizza6} alt="Pizza 4" width="100%" borderRadius="md" />
</Box>


<Box
  flexBasis="33%"
  display={{
    base: "block", // Show on small screens
    md: "none", 
    lg: "none",    // Hide on large screens and above (>= 1000px)
  }}
>
  <Image src={pizza7} alt="Pizza 4" width="100%" borderRadius="md" />
</Box>

  </Flex>
</Box>


</Flex>

       




        </Box>
        {!loading && posts.length === 0 && (
          <h1   >Welcome to bidoi, share your ideas</h1>
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
       flex={20}
  display={{
    base: "none", // Hide on small screens
    lg: "block", // Show on large screens and above (>= 1000px)
  }}
>
    				<SuggestedUsers />

      </Box>
      {scrollDirection === "down" && <RoundButton   />}
      {scrollDirection === "up" && < HeaderBox  />}
    </Flex>
  );
};

export default HomePage1;

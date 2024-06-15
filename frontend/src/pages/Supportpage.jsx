
import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers2 from "../components/SuggestedUsers2";
import {  useColorMode ,    } from "@chakra-ui/react";
import { px } from "framer-motion";
import Empty from "../components/empty";
import About from "../components/About";
import { Image } from "@chakra-ui/react";


import pizza2 from "/public/sec1.png";
import pizza1 from "/public/sec2.png";
import pizza3 from "/public/sec3.png";
import pizza4 from "/public/sec4.webp";

import pizza7 from "/public/s1.png";
import pizza6 from "/public/s3.png";
import pizza5 from "/public/s2.jpg";

const Supportpage = () => {
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
	
    <Flex  maxWidth={1300} mt={6} alignItems="flex-start"  >



      
      <Box      

	         flex={30}
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


      <Box flex={75} marginTop={35} marginBottom={35}  >


        <Box mt={6} mb={4}>
        </Box>
     

     

					< Support/>
				
      </Box>
      <Box
       flex={33}
  display={{
    base: "none", // Hide on small screens
    lg: "block", // Show on large screens and above (>= 1000px)
  }}
>
    				<SuggestedUsers2 />

      </Box>

    </Flex>
  );
};

export default Supportpage;

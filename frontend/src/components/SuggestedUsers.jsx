import {
  Box,
  Flex,
  Link,
  Text,
  Button,
  Skeleton,
  SkeletonCircle,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import SuggestedUser from "./SuggestedUser";
import useShowToast from "../hooks/useShowToast";
import { Link as RouterLink } from "react-router-dom";

import pic1 from "/public/wos3.avif";
import pic2 from "/public/wos1.jpg";
import pic3 from "/public/post3.jpg";

const SuggestedUsers = () => {
  const { colorMode } = useColorMode();
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [pic2];
  const [loading, setLoading] = useState(true);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const showToast = useShowToast();
  const welcomeSectionRef = useRef(null);
  const [isScrolledOut, setIsScrolledOut] = useState(false);

  useEffect(() => {
    // Function to check if user is logged in
    const checkLoginStatus = async () => {
      try {
        const res = await fetch("/api/auth/status");
        const data = await res.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    const getSuggestedUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch(isLoggedIn ? "/api/users/suggested" : "/api/users/suggested");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setSuggestedUsers(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };

    getSuggestedUsers();
  }, [isLoggedIn, showToast]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (welcomeSectionRef.current) {
        const welcomeSection = welcomeSectionRef.current;
        const rect = welcomeSection.getBoundingClientRect();
        setIsScrolledOut(rect.bottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  
    return (
      <Box maxWidth={"400"} ml={"10"} mr={"4"} position="absolute"   marginTop="50px">
        <Box
          ref={welcomeSectionRef}
        
          mb={4}
          mt={1}
          backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
          rounded={"md"}
          position="relative"
        >
          <Box
          padding={"4"}
          

            mb={3}
            mt={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgrounds[bgIndex]})`}
            roundedLeft={"xl"}
            bgSize="cover"
            bgPos="center"
            position="relative"
          >
            <Text
              pl={2}
              pt={"1%"}
              fontWeight={"bold"}
              fontFamily="'Noto Sans', Arial, sans-serif"
              fontSize={"xl"}
              color={"white"}
            >
              <p>Wall Of Shame</p>
            </Text>
            <Text
              pt={"2%"}
              pl={2}
              color={"white"}
              style={{ textShadow: "0 0 2px black" }}
              fontFamily="'Noto Sans', Arial, sans-serif"
              fontSize={{ base: "xs", md: "lg" }}
              fontWeight={"normal"}
            >
             Go Anonymous! Watch, Read &Listen to the most Classified news from allover the World
            
            </Text>
            <Text pt={"2%"} pl={2} pb={"4%"}  >
              <Link 
                as={RouterLink}
                to="/comingsoon"
                style={{
                  borderRadius: "20px",
                  fontFamily: "'Noto Sans', Arial, sans-serif",
                  fontSize: "lg",
                  color: "#007bff ",
                }}
              >
                Coming soon
              </Link>
            </Text>
          </Box>
        </Box>
  
        <Box  position={isScrolledOut ? "fixed" : "relative"}          
top={isScrolledOut ? "80px" : "auto"} maxWidth={isScrolledOut ? "400" : "auto"}  >
          <Flex
         
            direction={"column"}
            backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
            rounded={"xl"}
            mb={4}
            padding={8}
            gap={4}
          >
            <Text
        
              fontSize={"md"}
              fontFamily="'Noto Sans', Arial, sans-serif"
              fontWeight={"bold"}
            >
              Who to follow
            </Text>
  
            {!loading &&
              suggestedUsers.map((user) => (
                <SuggestedUser key={user._id} user={user} />
              ))}
            {loading &&
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((_, idx) => (
                <Flex key={idx} gap={2} alignItems={"center"}            p={"1"} borderRadius={"md"}>
                  <Box>
                    <SkeletonCircle size={"10"} />
                  </Box>
                  <Flex w={"full"} flexDirection={"column"} gap={2}>
                    <Skeleton h={"8px"} w={"80px"} />
                    <Skeleton h={"8px"} w={"90px"} />
                  </Flex>
                  <Flex>
                    <Skeleton h={"20px"} w={"60px"} />
                  </Flex>
                </Flex>
              ))}
          </Flex>
  
          <Text
            mb={4}
            padding={"4"}
            mt={4}
            backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
            rounded={"xl"}
            fontWeight={"bold"}
          >
            <Box pb={4}  pt={2}>
              <Text
                pl={2}
              
                fontFamily="'Noto Sans', Arial, sans-serif"
                fontWeight={"bold"}
                fontSize={"md"}
              >
                <p>Reddit community</p>
              </Text>
              <Text
                mt={2}
                pl={2}
                mb={2}
              
                pr={2}
                fontSize={"md"}
                fontFamily="'Noto Sans', Arial, sans-serif"
                fontWeight={"normal"}
              >  
               join our community network of high growth individuals and top CEOs
              
              </Text>
              <Text pl={2}>
                <Button
                  backgroundColor={colorMode === "light" ? "#edf1f5" : "#000000"}
                  as={RouterLink}
                  to="/comingsoon"
                  style={{
                    borderRadius: "20px",
                    fontSize: "xs",
                    fontFamily: "'Noto Sans', Arial, sans-serif",
                    color: "#007bff",
                    left: "2",
                  }}
                >
                  Join now
                </Button>
              </Text>
            </Box>
          </Text>
        </Box>
      </Box>
    );
  };
  
  export default SuggestedUsers;
  


       


// Loading skeletons for suggested users, if u want to copy and paste as shown in the tutorial

// <Flex key={idx} gap={2} alignItems={"center"} p={"1"} borderRadius={"md"}>
// 							{/* avatar skeleton */}
// 							<Box>
// 								<SkeletonCircle size={"10"} />
// 							</Box>
// 							{/* username and fullname skeleton */}
// 							<Flex w={"full"} flexDirection={"column"} gap={2}>
// 								<Skeleton h={"8px"} w={"80px"} />
// 								<Skeleton h={"8px"} w={"90px"} />
// 							</Flex>
// 							{/* follow button skeleton */}
// 							<Flex>
// 								<Skeleton h={"20px"} w={"60px"} />
// 							</Flex>
// 						</Flex>








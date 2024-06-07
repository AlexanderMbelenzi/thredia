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
  
  import pic1 from "/public/post1.png";
  import pic2 from "/public/pic2.jpg";
  import pic3 from "/public/pic.jpg";
  
  const SuggestedUsers = () => {
    const { colorMode } = useColorMode();
    const [bgIndex, setBgIndex] = useState(0);
    const backgrounds = [pic1, pic2, pic3];
    const [loading, setLoading] = useState(true);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const showToast = useShowToast();
    const welcomeSectionRef = useRef(null);
    const [isScrolledOut, setIsScrolledOut] = useState(false);
  
    useEffect(() => {
      const getSuggestedUsers = async () => {
        setLoading(true);
        try {
          const res = await fetch("/api/users/suggested");
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
    }, [showToast]);
  
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
      <Box mr={"60"} position="absolute" ml={5} marginTop="50px">
        <Box
          ref={welcomeSectionRef}
        
          mb={4}
          mt={1}
          backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
          rounded={"md"}
          position="relative"
        >
          <Box
            mb={3}
            mt={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgrounds[bgIndex]})`}
            rounded={"xl"}
            bgSize="cover"
            bgPos="center"
            position="relative"
          >
            <Text
              pl={2}
              height="60px"
              fontWeight={"bold"}
              fontFamily="'Noto Sans', Arial, sans-serif"
              fontSize={"xl"}
              color={"white"}
            >
              <p>Welcome to reddit</p>
            </Text>
            <Text
              pt={"10%"}
              pl={2}
              pb={"8%"}
              color={"white"}
              style={{ textShadow: "0 0 2px black" }}
              fontFamily="'Noto Sans', Arial, sans-serif"
              fontSize={{ base: "xs", md: "lg" }}
              fontWeight={"normal"}
            >
              We are excited to announce that we will be releasing new features
              every week until our final product.
            </Text>
            <Text pt={"8%"} pl={2}>
              <Link
                as={RouterLink}
                to="/auth"
                style={{
                  borderRadius: "20px",
                  fontFamily: "'Noto Sans', Arial, sans-serif",
                  fontSize: "lg",
                  color: "#1D88F2 ",
                }}
              >
                Check it out
              </Link>
            </Text>
          </Box>
        </Box>
  
        <Box  position={isScrolledOut ? "fixed" : "relative"} top={isScrolledOut ? "0px" : "auto"} mr={isScrolledOut ? "60" : "auto"}  >
          <Flex
            direction={"column"}
            backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
            rounded={"xl"}
            mb={4}
            mt={85}
            padding={4}
            gap={4}
          >
            <Text
              mb={4}
              fontSize={"xl"}
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
              [0, 1, 2, 3, 4].map((_, idx) => (
                <Flex key={idx} gap={2} alignItems={"center"} p={"1"} borderRadius={"md"}>
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
            mt={4}
            backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
            rounded={"xl"}
            fontWeight={"bold"}
          >
            <Box pb={4} pt={2}>
              <Text
                pl={2}
              
                fontFamily="'Noto Sans', Arial, sans-serif"
                fontWeight={"bold"}
                fontSize={"xl"}
              >
                <p>Coming soon</p>
              </Text>
              <Text
                mt={2}
                pl={2}
                mb={2}
                height="200px"
                overflowY="scroll"
                pr={2}
                fontSize={"md"}
                fontFamily="'Noto Sans', Arial, sans-serif"
                fontWeight={"normal"}
              >  
               We are excited to announce that we will be releasing new features
                We are excited to announce that we will be releasing new features
                every week until our final product. Watch out for the next feature on our features list.
                We are excited to announce that we will be releasing new features
                We are excited to announce that we will be releasing new features
                every week u
                We are excited to announce that we will be releasing new features
                We are excited to announce that we will be releasing new features
                every week until our final product. Watch out for the next feature on our features list.
                We are excited to announce that we will be releasing new features
                We are excited to announce that we will be releasing new features
                every week until our final product. Watch out for the next feature on our features list.
                every week until our final product. Watch out for the next feature on our features list.
                every week until our final product. Watch out for the next feature on our features list.
              </Text>
              <Text pl={2}>
                <Button
                  backgroundColor={colorMode === "light" ? "#edf1f5" : "#000000"}
                  as={RouterLink}
                  to="/Donate"
                  style={{
                    borderRadius: "20px",
                    fontSize: "xs",
                    fontFamily: "'Noto Sans', Arial, sans-serif",
                    color: "#1D88F2",
                    left: "2",
                  }}
                >
                  Check it out
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








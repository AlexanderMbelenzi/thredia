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
  
  import pic1 from "/public/post1.jpeg";
  import pic2 from "/public/post2.jpg";
  import pic3 from "/public/post3.jpg";
  
  const SuggestedUsers2 = () => {
    const { colorMode } = useColorMode();
    const [bgIndex, setBgIndex] = useState(0);
    const backgrounds = [pic1, pic2, pic3];
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
          const res = await fetch(isLoggedIn ? "/api/users/suggested2" : "/api/users/suggested2");
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
        <Box mr={"60"} position="absolute"  ml={5} marginTop="50px">
          <Box
            ref={welcomeSectionRef}
          
            mb={4}
            mt={1}
            backgroundColor={ "#007bff" }
            
            roundedTop={"md"}
            position="relative"
          >
            <Box
            padding={"4"}
              mb={3}
              mt={2}
              rounded={"xl"}
              bgSize="cover"
              bgPos="center"
              position="relative"
            >
              <Text
                pl={2}
                heigt="60px"
                pt={"2%"}
                fontWeight={"bold"}
                fontFamily="'Noto Sans', Arial, sans-serif"
                fontSize={"xl"}
                color={"white"}
              >
                <p>Welcome to reddit</p>
              </Text>
              <Text
              
                pl={2}
               
                color={"white"}
                fontFamily="'Noto Sans', Arial, sans-serif"
                fontSize={{ base: "xs", md: "lg" }}
                fontWeight={"normal"}
              >
               We will be rolling out new features every week.
                Stay tuned for regular updates and enhancements! 
              </Text>
              <Text pt={"1%"} pl={2} pb={"4%"}  >
                <Link 
                  as={RouterLink}
                  to="/auth"
                  style={{
                    borderRadius: "20px",
                    fontFamily: "'Noto Sans', Arial, sans-serif",
                    fontSize: "lg",
                    color: "#ffffff ",
                  }}
                >
                  Coming soon
                </Link>
              </Text>
            </Box>
          </Box>
    
          <Box  position={isScrolledOut ? "fixed" : "relative"}          
  top={isScrolledOut ? "80px" : "auto"} mr={isScrolledOut ? "60" : "auto"}  >
            <Flex
           
              direction={"column"}
              backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
              rounded={"xl"}
              mb={4}
              padding={4}
              gap={4}
            >
             
    
         
            </Flex>
    
            <Text
              mb={4}
              mt={4}
              backgroundColor={colorMode === "light" ? "#edf1f5" : "#101014"}
              rounded={"xl"}
              fontWeight={"bold"}
            >
              <Box pb={4} padding={"4"}  pt={2}>
                <Text
                  pl={2}
                
                  fontFamily="'Noto Sans', Arial, sans-serif"
                  fontWeight={"bold"}
                  fontSize={"md"}
                >
                  <p>Important links</p>
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
check out our features list and get to know what is coming next                
                </Text>
                <Text pl={2}>
        <Link href="/comingsoon" color="#007bff">Coming soon</Link><br /><br />
        <Link href="/privacypolicy">Privacy Policy</Link><br /><br />
        <Link href="/termsofservice" color="#007bff">Terms of service</Link><br /><br />
        <Link href="/support" >Support</Link><br /><br />
        <Link href="/androidapp" color="#007bff">Android App</Link><br /><br />
        <Link href="/iphoneapp" >iPhone App</Link><br /><br />
        <Link href="/premium" color="#007bff">Premuim</Link><br /><br />
        <Link href="/careers" >Explore carrers</Link><br /><br />

      </Text>
              </Box>
            </Text>
          </Box>
        </Box>
      );
    };
    
    export default SuggestedUsers2;
    
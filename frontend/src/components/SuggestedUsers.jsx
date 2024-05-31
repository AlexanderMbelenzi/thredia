
			
import { Box, Flex, Link, Text, Button, Input, InputGroup, InputLeftElement, useColorMode ,  Skeleton, SkeletonCircle,   } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SuggestedUser from "./SuggestedUser";
import useShowToast from "../hooks/useShowToast";
import { Image } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

import pic1 from "/public/post1.png";
import pic2 from "/public/pic2.jpg";
import pic3 from "/public/pic.jpg";

import { MdHeight } from "react-icons/md";



const SuggestedUsers = () => {
    const { colorMode } = useColorMode(); // Hook to access color mode
	const [bgIndex, setBgIndex] = useState(0);
    const backgrounds = [pic1];
	const [loading, setLoading] = useState(true);
	const [suggestedUsers, setSuggestedUsers] = useState([]);
	const showToast = useShowToast();

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
            // Incrementing the index to change the background image
            setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000); // Change every 5 seconds (adjust as needed)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);




	return (

		<Box mr={"60"}  position="fixed"  ml={5}     marginTop="55px">

 
                 
					
		<>
	


			<Text mb={4} mt={1} backgroundColor={colorMode === "light" ? "#F5F8FA" : "#192734"} rounded={"md"} fontWeight={"bold"}>
    <Box pb={4} pt={2} backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgrounds[bgIndex]})`}
	  rounded={"xl"} bgSize="cover" bgPos="center" position="relative">
        <Text pl={2} fontWeight={"bold"}fontFamily="'Noto Sans', Arial, sans-serif"  fontSize={"xl"} color={"white"}>
            <p>Welcome to reddit</p>
        </Text>
        <Text mt={1} pl={2} mb={2} color={"white"} style={{ textShadow: "0 0 2px black" }}
		 fontFamily="'Noto Sans', Arial, sans-serif"  fontSize={{ base: "xs", md: "lg" }} fontWeight={"normal"}>
            Subscribe to our premium model and get access to our community and Join the private network for high-growth founders,
			 CEOs, and entrepreneurs.for founders, CEOs and entrepreneurs.for founders, CEOs and entrepreneurs.for founders. ounders, CEOs and entrepreneurs.for founders,
        </Text>
        <Text mt={2}  pl={2}>
            <Button as={RouterLink} to="/auth" style={{ borderRadius: "20px", fontFamily:"'Noto Sans', Arial, sans-serif" , 
			 fontSize: "md", backgroundColor: "#1D88F2", color: "white" }}>
                Subscribe Now
            </Button>
        </Text>
    </Box>
</Text>



			  
		
			<Flex direction={"column"}  backgroundColor={colorMode === "light" ? "#F5F8FA" : "#192734"} rounded={"xl"}  mb={4} padding={4}  gap={4}>
			<Text mb={4} fontSize={"xl"} fontFamily="'Noto Sans', Arial, sans-serif"   fontWeight={"bold"}>
			Suggested users
      
			</Text>


	


				{!loading && suggestedUsers.map((user) => <SuggestedUser key={user._id} user={user} />)}
				{loading &&
					[0, 1, 2, 3, 4].map((_, idx) => (
						<Flex key={idx} gap={2} alignItems={"center"} p={"1"} borderRadius={"md"}>
							{/* avatar skeleton */}
							<Box>
								<SkeletonCircle size={"10"} />
							</Box>
							{/* username and fullname skeleton */}
							<Flex w={"full"} flexDirection={"column"} gap={2}>
								<Skeleton h={"8px"} w={"80px"} />
								<Skeleton h={"8px"} w={"90px"} />
							</Flex>
							{/* follow button skeleton */}
							<Flex>
								<Skeleton h={"20px"} w={"60px"} />
							</Flex>
						</Flex>
					))}
		
		
		<Box  mt={4}  >
		<Flex alignItems="center" gap={2} as={RouterLink} to="/chat"  >
                <InputGroup size="sm" >
                    <InputLeftElement pointerEvents="none">
					<SearchIcon  />
                    </InputLeftElement>
                    <Input
                        placeholder="Search for a user"
                        borderRadius="full"
                        bg={colorMode === "light" ? "#F5F8FA" : "#192734"} // Dynamically set background color based on color mode
                    />
                </InputGroup>
            </Flex>
     
			</Box>
		
			</Flex>



			<Text mb={4} mt={4}   backgroundColor={colorMode === "light" ? "#F5F8FA" : "#192734"}   rounded={"xl"} fontWeight={"bold"}>
			<Box pb={4} pt={2}  >

					<Text pl={2} fontFamily="'Noto Sans', Arial, sans-serif"  fontWeight={"bold"}  fontSize={"xl"}   >
                <p    >buy me coffee</p>
				</Text>
                <Text mt={2}  pl={2} mb={2} pr={2}  prefix="2"  fontSize={"md"}fontFamily="'Noto Sans', Arial, sans-serif"    fontWeight={"normal"}>
				We are depedent your support to keep this site ruunning. if you find 
					 
                </Text>
				<Text     pl={2}   >
                <Button       backgroundColor={colorMode === "light" ? "#ffffff" : "#000000"}            as={RouterLink} to="/auth"
   style={{ borderRadius: "20px", fontSize: "xs",      fontFamily:"'Noto Sans', Arial, sans-serif" ,     Left: " 2" }}>Buy Now</Button>
				</Text>
				</Box>
			</Text>
				 
           





		</>

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








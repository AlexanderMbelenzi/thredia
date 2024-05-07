import { Box, Flex, Link, Text, Button, Input, InputGroup, InputLeftElement, useColorMode ,  Skeleton, SkeletonCircle,   } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SuggestedUser from "./SuggestedUser";
import useShowToast from "../hooks/useShowToast";

import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

import pizza2 from "/public/pizza.jpeg";


import { MdHeight } from "react-icons/md";



const SuggestedUsers = () => {
	const  {coffee } = MdHeight
    const { colorMode } = useColorMode(); // Hook to access color mode

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

	return (

		<Box mr={"80"}  position="fixed"  ml={4}     marginTop="55px">

 
                 
					
		<>
		<Box>
		<Flex alignItems="center" gap={2} as={RouterLink} to="/chat"  >
                <InputGroup size="sm" >
                    <InputLeftElement pointerEvents="none">
					<SearchIcon  />
                    </InputLeftElement>
                    <Input
                        placeholder="Search for a user"
                        borderRadius="full"
                        bg={colorMode === "light" ? "#F0F0F0" : "#2B2B2B"} // Dynamically set background color based on color mode
                    />
                </InputGroup>
            </Flex>
     
			</Box>



			<Text mb={4} mt={4}   backgroundColor={colorMode === "light" ? "#F0F0F0" : "#2B2B2B"}   rounded={"xl"} fontWeight={"bold"}>
				<Box  pb={4} pt={2} backgroundImage={        `url(${pizza2})` }  rounded={"xl"}   >
					<Text pl={2} color={"white"}>
                <p color="white">Welcome to reddit</p>
				</Text>
                <Text mt={2}  pl={2} mb={2}  color={"white"} fontWeight={"normal"}>
                    Login to reddit and unlock all premium features.search for ideas, talk to other users and much more! .
                </Text>
				<Text     pl={2}   >
                <Button                  as={RouterLink} to="/auth"
   style={{ borderRadius: "20px", fontSize: "sm",   backgroundColor:"  #76B900 ",  Left: " 2", color: "white" }}>Login Now</Button>
				</Text>
				</Box>
			</Text>
			  
		
			<Flex direction={"column"}  backgroundColor={colorMode === "light" ? "#F0F0F0" : "#2B2B2B"} rounded={"xl"}  mb={4} padding={4}  gap={4}>
			<Text mb={4}  fontWeight={"bold"}>
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
			</Flex>



			<Text mb={4} mt={4} padding={4} backgroundColor={colorMode === "light" ? "#F0F0F0" : "#2B2B2B"} rounded={"xl"} fontWeight={"bold"}>
                <p color="blue">Buy reddit a cup of coffee</p>
                <Text mt={2} mb={2}  fontWeight={"normal"}    >
				 
                    We are depedent on your support to keep this site ruunning. if you find the content on this plartform interesting, then we would appreciate youir support to help us keep
					 providing more useul information to others.one dollar means alot to us.
                </Text>
                <Text  >
			    <Button                  as={RouterLink} to="/BuyCoffee"
   style={{ borderRadius: "20px", fontSize: "sm",   backgroundColor: "#76B900",     padding: "0.5rem 1rem", color: "white" }}>Buy now</Button>
               
			
			  
				</Text>
		   
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

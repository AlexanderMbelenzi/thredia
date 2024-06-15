import { Button, Text } from "@chakra-ui/react";
import useShowToast from "../hooks/useShowToast";
import useLogout from "../hooks/useLogout";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SettingsPage = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const showToast = useShowToast();
	const logout = useLogout();

	const freezeAccount = async () => {
		if (!window.confirm("Are you sure you want to freeze your account?")) return;

		try {
			const res = await fetch("/api/users/freeze", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();

			if (data.error) {
				return showToast("Error", data.error, "error");
			}
			if (data.success) {
				await logout();
				showToast("Success", "Your account has been frozen", "success");
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return (


		< > 
		
			<Text pt={35} my={5} fontWeight={"bold"}>
				Freeze Your Account
			</Text>
			<Text my={1}>You can unfreeze your account anytime by logging in.</Text>
			<Button my={2} size={"sm"} bg="#007bff"  color={'#ffffff'}  _hover={{ bg: "#176DC1" }}   onClick={freezeAccount}>
				Freeze
			</Button>
			<br />
		

			<Text pt={5} my={5} fontWeight={"bold"}>
				Log Out
			</Text>
		
			<Text my={2}>You can log in again at any time .</Text>
			<Button size={"sm"}  bg="#007bff" _hover={{ bg: "#176DC1" }}   color={'#ffffff'} onClick={logout}>
				log out
			</Button>

			<br />
			<Text pt={10}  fontWeight={"bold"}>
				Change Color mode & theme
			</Text>

			<Flex mt={-2}  > 	<Link  fontSize="xl"  
                                      alt="theme"
                                      onClick={toggleColorMode}
                                         >
									
										<br />	
                                         <SunIcon  />
                                    </Link>   </Flex>
		
		
                            

		</>


	);
};

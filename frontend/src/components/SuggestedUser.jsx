import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUnfollow from "../hooks/useFollowUnfollow";

const SuggestedUser = ({ user }) => {
	const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user);

	return (
		<Flex gap={2} justifyContent={"space-between"} alignItems={"center"}>
			{/* left side */}
			<Flex gap={2} alignItems="center" as={Link} to={`${user.username}`} display="inline-flex">
				<Avatar src={user.profilePic} size="sm" />
				<Box>
					<Text fontSize="sm" fontWeight="bold">
						{user.username}
						<Text as="span" fontSize="xs"  color="#68717a">
							@{user.name}
						</Text>
					</Text>
				</Box>
			</Flex>
			{/* right side */}
			
		</Flex>
	);
};

export default SuggestedUser;


//  SuggestedUser component, if u want to copy and paste as shown in the tutorial

{
	/* <Flex gap={2} justifyContent={"space-between"} alignItems={"center"}>
			<Flex gap={2} as={Link} to={`${user.username}`}>
				<Avatar src={user.profilePic} />
				<Box>
					<Text fontSize={"sm"} fontWeight={"bold"}>
						{user.username}
					</Text>
					<Text color={"gray.light"} fontSize={"sm"}>
						{user.name}
					</Text>
				</Box>
			</Flex>
			<Button
				size={"sm"}
				color={following ? "black" : "white"}
				bg={following ? "white" : "blue.400"}
				onClick={handleFollow}
				isLoading={updating}
				_hover={{
					color: following ? "black" : "white",
					opacity: ".8",
				}}
			>
				{following ? "Unfollow" : "Follow"}
			</Button>
		</Flex> */
}

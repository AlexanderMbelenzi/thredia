import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import SuggestedUsers2 from "../components/SuggestedUsers2";
import SideBar2 from "../components/SideBar2";
import { useColorMode } from "@chakra-ui/react";
import Empty from "../components/empty";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const UserPage = () => {
	const { colorMode } = useColorMode();

	const { user, loading } = useGetUserProfile();
	const { username } = useParams();
	const showToast = useShowToast();
	const [posts, setPosts] = useRecoilState(postsAtom);
	const [fetchingPosts, setFetchingPosts] = useState(true);

	useEffect(() => {
		const getPosts = async () => {
			if (!user) return;
			setFetchingPosts(true);
			try {
				const res = await fetch(`/api/posts/user/${username}`);
				const data = await res.json();
				console.log(data);
				setPosts(data);
			} catch (error) {
				showToast("Error", error.message, "error");
				setPosts([]);
			} finally {
				setFetchingPosts(false);
			}
		};

		getPosts();
	}, [username, showToast, setPosts, user]);

	if (!user && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}

	if (!user && !loading) return <h1>User not found</h1>; 

	return (


<Flex maxWidth={1800}  alignItems="flex-start">
<Box
  flex={15}
  mt={2}
  display={{
	base: "none",
	md: "block",
  }}
>
  <SideBar2 />
</Box>

<Box
  borderLeft={"2px"}
  borderLeftColor={colorMode === "light" ? "gray.200" : "#2B2B2B"}
  flex={1}
  px={8}
  
  display={{
	base: "none",
	md: "block",
  }}
>
  <Empty />
</Box>

<Box flex={35} mt={{
	base: "0",
	md: "6px",
  }}  marginBottom={55}>

<Box  marginBottom={35}   >
					<>

			<UserHeader user={user} />

			{!fetchingPosts && posts.length === 0 && <h1>User has no posts.</h1>}
			{fetchingPosts && (
				<Flex justifyContent={"center"} my={12}>
					<Spinner size={"xl"} />
				</Flex>
			)}

			{posts.map((post) => (
				<Post key={post._id} post={post} postedBy={post.postedBy} />
			))} 
</>
</Box>

</Box>





<Box
  borderLeft={"8px"}
  borderLeftColor={colorMode === "light" ? "gray.200" : "#2B2B2B"}
  flex={1}
  px={8}
  mt={35}
  display={{
	base: "none",
	md: "block",
  }}
>
  <Empty />
</Box>

<Box
  flex={17}
  display={{
	base: "none",
	lg: "block",
  }}
>
  <SuggestedUsers2 />
</Box>
</Flex>		
		
	);
};

export default UserPage;

import { AddIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { FaFeather } from "react-icons/fa";
import {
	Button,
	CloseButton,
	
	FormControl,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePreviewImg from "../hooks/usePreviewImg";
import { BsFillImageFill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";
import postsAtom from "../atoms/postsAtom";
import { useColorMode } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useMediaQuery} from "@chakra-ui/react";

const MAX_CHAR = 1200;

const CreatePost = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [postText, setPostText] = useState("");
	const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();
	const imageRef = useRef(null);
	const [remainingChar, setRemainingChar] = useState(MAX_CHAR);
	const user = useRecoilValue(userAtom);
	const showToast = useShowToast();
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useRecoilState(postsAtom);
	const { username } = useParams();

	const handleTextChange = (e) => {
		const inputText = e.target.value;

		if (inputText.length > MAX_CHAR) {
			const truncatedText = inputText.slice(0, MAX_CHAR);
			setPostText(truncatedText);
			setRemainingChar(0);
		} else {
			setPostText(inputText);
			setRemainingChar(MAX_CHAR - inputText.length);
		}
	};

	const handleCreatePost = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/posts/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ postedBy: user._id, text: postText, img: imgUrl }),
			});

			const data = await res.json();
			if (data.error) {
				showToast("Error", data.error, "error");
				return;
			}
			showToast("Success", "Post created successfully", "success");
			if (username === user.username) {
				setPosts([data, ...posts]);
			}
			onClose();
			setPostText("");
			setImgUrl("");
		} catch (error) {
			showToast("Error", error, "error");
		} finally {
			setLoading(false);
		}
	};
	
	const [isLargerThan700] = useMediaQuery("(min-width: 800px)");


	return (
		<>
		{isLargerThan700 && (
   <Button
      position={"fixed"}
      width={18}
      rounded={"100%"}
      right={5}
      bg="#1D88F2"
      onClick={onOpen}
      size={{ base: "md", sm: "lg" }}

	  _hover={{ bg: "#176DC1" }} // Define the hover state color here
	  bottom={70}


   >


      <AddIcon color={"#FFFFFF"} />
   </Button>
)}

			<Modal isOpen={isOpen} onClose={onClose}   
    >
				<ModalOverlay />
				

				<ModalContent  bg={useColorModeValue("gray.200", " #101014 ")}   >
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl  borderColor={useColorModeValue("gray.400", "gray.600  ")}   >
							<Textarea
								placeholder='Post content goes here..'
								onChange={handleTextChange}
								value={postText}
							/>
							<Text fontSize='xs' fontWeight='bold' textAlign={"right"} m={"1"} color={useColorModeValue("gray.800", "gray.400  ")}>
								{remainingChar}/{MAX_CHAR}
							</Text>

							<Input type='file' hidden ref={imageRef} onChange={handleImageChange} />

							<BsFillImageFill
								style={{ marginLeft: "5px", cursor: "pointer" }}
								size={16}
								onClick={() => imageRef.current.click()}
							/>
						</FormControl>

						{imgUrl && (
							<Flex mt={5} w={"full"} position={"relative"}>
								<Image src={imgUrl} alt='Selected img' />
								<CloseButton
									onClick={() => {
										setImgUrl("");
									}}
									bg={"gray.800"}
									position={"absolute"}
									top={2}
									right={2}
								/>
							</Flex>
						)}
					</ModalBody>

					<ModalFooter>
						<Button bg=' #1D88F2' color={"#FFFFFF"} mr={3} _hover={{ bg: "#176DC1" }}   onClick={handleCreatePost} isLoading={loading}>
							
							Post
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreatePost;

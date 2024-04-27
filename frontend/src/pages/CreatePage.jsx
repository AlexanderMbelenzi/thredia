import React, { useState, useRef } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { BsFillImageFill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import usePreviewImg from "../hooks/usePreviewImg";
import useShowToast from "../hooks/useShowToast";
import postsAtom from "../atoms/postsAtom";
import { useParams } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const MAX_CHAR = 500;
const CreatePage = () => {
	const { colorMode } = useColorMode();

	
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
      setPostText("");
      setImgUrl("");
      
      // Navigate to the user's profile page
      window.location.href = `/${user.username}`;
    } catch (error) {
      showToast("Error", error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div mt={20}   mr={2}  ml={2}  >
      <h1>Create Post</h1>
      <Modal isOpen={true} onClose={() => {}}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Post Content</FormLabel>
              <Textarea
                placeholder="What's on your mind?"
                onChange={handleTextChange}
                value={postText}
                size="md"
                resize="none"
                maxLength={MAX_CHAR}
              />
              <Text fontSize="xs" color={remainingChar < 0 ? "red.500" : "gray.500"}>
                {remainingChar}/{MAX_CHAR}
              </Text>

              <Flex align="center" mt={2}>
                <BsFillImageFill
                  style={{ cursor: "pointer" }}
                  size={20}
                  onClick={() => imageRef.current.click()}
                />
                <Input type="file" hidden ref={imageRef} onChange={handleImageChange} />
              </Flex>

              {imgUrl && (
                <Flex mt={5} align="center">
                  <Image src={imgUrl} alt="Selected Image" maxH="200px" maxW="100%" />
                  <Button
                    ml={3}
                    size="sm"
                    onClick={() => {
                      setImgUrl("");
                    }}
                  >
                    Remove Image
                  </Button>
                </Flex>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              onClick={handleCreatePost}
              isLoading={loading}
              loadingText="Posting"
            >
              Post
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
	
              <Button  as={RouterLink} to={`/`} size="lg" bg={colorMode === "dark" ? "black" : "white"} borderRadius="20px" ml="1" >Go Back</Button>
       

          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePage;

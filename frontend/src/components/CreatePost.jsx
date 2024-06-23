// CreatePost.js

import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import PostModal from "./Postmodal";

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan700] = useMediaQuery("(min-width: 800px)");

    return (
        <>
            {isLargerThan700 && (
                <Button
                
                    width={18}
                    rounded={"100%"}
                    right={5}
                    bg="#007bff"
                    onClick={onOpen}
                    size={{ base: "md", sm: "lg" }}
                    _hover={{ bg: "#176DC1" }} // Define the hover state color here
                    bottom={70}
                >
                    <AddIcon color={"#FFFFFF"} />
                </Button>
            )}

            <PostModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default CreatePost;

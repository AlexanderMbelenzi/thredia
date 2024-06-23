import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = ({ reply, lastReply, navigate }) => {
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar
          src={reply.userProfilePic}
          _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/${reply.username}`);
          }}
          size={"sm"}
        />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
            <Text
              fontSize='sm'
              _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${reply.username}`);
              }}
              fontWeight='bold'
            >
              {reply.username}
            </Text>
          </Flex>
          <Text fontSize={{ base: "xs", md: "15.5px" }}>{reply.text}</Text>
        </Flex>
      </Flex>
      {!lastReply ? <Divider /> : null}
    </>
  );
};

export default Comment;


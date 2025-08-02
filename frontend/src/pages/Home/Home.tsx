import { Flex, Title } from "@mantine/core";

function Home() {
  return (
    <Flex h="100vh" justify="center" align="center">
      <Title order={1} c="white" lh="8rem">
        TRIVIA
        <br />
        PARTY
      </Title>
    </Flex>
  );
}

export default Home;

import { Button, Flex, Title } from "@mantine/core";

function Home() {
  return (
    <Flex h="100vh" justify="center" align="center" direction="column">
      <Title order={1} c="white" lh="8rem">
        TRIVIA
        <br />
        PARTY
      </Title>
      <Button color="orange.3" c="white" size="xl" radius="md" mt="5rem">
        CREATE LOBBY!
      </Button>
    </Flex>
  );
}

export default Home;

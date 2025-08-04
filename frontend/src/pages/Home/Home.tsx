import { ActionIcon, Button, Flex, Title, TextInput } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import styles from "./Home.module.css";

function Home() {
  return (
    <Flex
      h="100vh"
      justify="center"
      align="center"
      direction="column"
      gap="3rem"
    >
      <Title order={1} c="white" lh="8rem">
        TRIVIA
        <br />
        PARTY
      </Title>
      <Flex direction="column" align="center" gap="1rem">
        <Button color="orange.3" c="white" size="xl" radius="md">
          CREATE LOBBY!
        </Button>
        <Flex justify="center" align="center" gap="1rem">
          <TextInput
            size="lg"
            radius="md"
            placeholder="LOBBY CODE"
            maw="14rem"
            classNames={{
              input: styles.input,
            }}
          />
          <ActionIcon size="sm" radius="md" color="orange.3">
            <IconChevronRight color="black" strokeWidth="2" />
          </ActionIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;

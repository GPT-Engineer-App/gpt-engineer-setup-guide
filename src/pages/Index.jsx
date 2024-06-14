import { Container, Text, VStack, Button, Box } from "@chakra-ui/react";

const Index = () => {
  const deploy = (option) => {
    alert(`Deploying: ${option}`);
    // Implement deployment logic here
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Box mt={8}>
          <Text fontSize="xl" mb={4}>Deployment Options</Text>
          <VStack spacing={2}>
            <Button onClick={() => deploy('API')}>Deploy API</Button>
            <Button onClick={() => deploy('SDK')}>Deploy SDK</Button>
            <Button onClick={() => deploy('Plugin')}>Deploy Plugin</Button>
            <Button onClick={() => deploy('iOS')}>Deploy iOS</Button>
            <Button onClick={() => deploy('Android')}>Deploy Android</Button>
            <Button onClick={() => deploy('Third-Party')}>Deploy Third-Party</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
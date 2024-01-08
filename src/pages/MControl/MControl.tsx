import { Box, Button, Flex } from '@chakra-ui/react';
// import { GlassBox } from '../../components/GlassBox';

function MControlPage() {
  return (
    <Box bg="blue.900" height="100%" width="100%">
      <Flex direction={["column", "row"]} align={["flex-end", "flex-start"]} justify="space-between" height="100%">
        <Flex direction={["column", "row"]} width="50%">
          <Box width={["100%", "25%"]}>
            <p>a</p>
          </Box>
          <Box width={["100%", "50%"]}>
            <p>b</p>
          </Box>
          <Box width={["100%", "25%"]}>
            <p>c</p>
          </Box>
        </Flex>

        <Box width="50%">
          <p>d</p>
        </Box>
      </Flex>
    </Box>
  );
}

export default MControlPage;

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function MControlPage() {
  return (
    <Box>
      <Box bg="green.500" mb={4} p={4}>
        <Text>Hola</Text>
      </Box>
      <Box bg="transparent" mb={4} p={4}>
        <Text>MControl</Text>
      </Box>
      <Box bg="blue.500" p={4}>
        <Text>Hola</Text>
      </Box>
    </Box>
  );
}

export default MControlPage;

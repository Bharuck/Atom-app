import { Box, Text, VStack, HStack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import React, { useState } from 'react';

interface ServoControllerProps {
  name: string;
}

function ServoController({ name }: ServoControllerProps) {
  const [value, setValue] = useState(0);
  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    setValue(valueAsNumber);
  };

  return (
    <Box bg="blue.500" p={4}>
      <VStack spacing={4}>
        <HStack spacing={4}>
          <Text>{name}</Text>
          <NumberInput maxW='100px' value={value} onChange={handleChange}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Slider
          flex='1'
          focusThumbOnChange={false}
          value={value}
          onChange={handleChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize='sm' boxSize='32px' children={value} />
        </Slider>
      </VStack>
    </Box>
  );
}

export default ServoController;

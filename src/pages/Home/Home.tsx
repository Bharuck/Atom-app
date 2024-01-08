import { Box, Button, Flex } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box bg="red.500" height="100%" width="100%">
      <Flex direction={["column", "row"]} align={["flex-end", "flex-start"]} justify="space-between" height="100%">
        <Box bg="blue.500" p={4} flexBasis={["100%", "30%"]} height="100%">
          <Box
            borderBottomRightRadius="2xl" // redondea el borde inferior derecho
            borderColor="yellow.500" // establece el color del borde a amarillo
            borderWidth="2px" // establece el ancho del borde
            p={4} // padding
          >
            Atom v1.0
          </Box>
          <Button>hola</Button>
          <Button>hola 1</Button>
          <Button>hola 2</Button>
          <Button>hola 3</Button>
          <Button>hola 4</Button>
        </Box>
        <Box bg="green.500" p={4} flexBasis={["100%", "30%"]} height="100%">
          <Button>hola</Button>
          {/* Contenido del Componente 2 */}
        </Box>
      </Flex>
    </Box>
  );
}

export default HomePage;

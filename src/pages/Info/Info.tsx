// InfoPage.tsx
import { Grid, GridItem, Button, Text } from '@chakra-ui/react';
import BasicLayout from '../../components/layouts/BasicLayout'; // Ajusta la ruta según la ubicación real de tu archivo Layout.tsx


function InfoPage() {
  return (
    <BasicLayout>
      {/* Agregar elementos específicos a la Columna 1 */}
      <>
        <Text>Contenido en Columna 1</Text>
        <Button>Botón en Columna 1</Button>
        <Button> otro boton</Button>
        <Text>Contenido en Columna 1</Text>
        <Button>Botón en Columna 1</Button>
        <Button> otro boton</Button>
        <Text>Contenido en Columna 1</Text>
        <Button>Botón en Columna 1</Button>
      </>

      {/* Agregar elementos específicos a la Columna 2 */}
      <>
        <Text>Contenido en Columna 2</Text>
        <Button>Botón en Columna 2</Button>
        <Button>Botón Adicional en Columna 2</Button>
      </>

      {/* Agregar elementos específicos a la Columna 3 */}
      <>
        <Text>Contenido en Columna 3</Text>
        <Button>Botón en Columna 3</Button>
        <Button>Botón Adicional en Columna 3</Button>
        <Button>Otro Botón Adicional en Columna 3</Button>
      </>
    </BasicLayout>
  );
}

export default InfoPage;

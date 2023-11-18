// InfoPage.tsx
import { Button, Text } from '@chakra-ui/react';
import BasicLayout from '../../components/layouts/BasicLayout'; // Ajusta la ruta según la ubicación real de tu archivo Layout.tsx
import TeamMember from '../../components/TeamMember';

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
        <TeamMember
          name="Angel Renato Martell Tirado"
          imageUrl="https://media.licdn.com/dms/image/C4E03AQGY5bs4pg-Azg/profile-displayphoto-shrink_400_400/0/1636527306137?e=1705536000&v=beta&t=XPztnJ7koOWadJC1j_6pfSJeFEtOz71ZsaxU3rn3tog"
          youtubeUrl="url_de_facebook_del_miembro_1"
          twitterUrl="url_de_twitter_del_miembro_1"
          linkedinUrl="https://www.linkedin.com/in/angel-renato-martell-tirado-0647b3168/"
        />
      </>
    </BasicLayout>
  );
}

export default InfoPage;

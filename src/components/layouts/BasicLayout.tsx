import { ReactNode } from 'react';
import { Grid, GridItem, Stack } from '@chakra-ui/react';

interface LayoutProps {
  children: ReactNode[];
}

function BasicLayout({ children }: LayoutProps) {
  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap={6}
      p={4}
      bg='gray.200'
      height='100vh'
    >
      {/* Columna 1 por defecto */}
      <GridItem
        colSpan={[1, 2, 1]}
        bg='red.200'
        p={4}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Stack height='100%' overflowY='auto'>
          {children[0]}
        </Stack>
      </GridItem>

      {/* Columna 2 por defecto */}
      <GridItem
        colSpan={[1, 1, 1]}
        bg='green.200'
        p={4}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Stack height='100%' overflowY='auto'>
          {children[1]}
        </Stack>
      </GridItem>

      {/* Columna 3 por defecto */}
      <GridItem
        colSpan={[1, 2, 1]}
        bg='blue.200'
        p={4}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Stack height='100%' overflowY='auto'>
          {children[2]}
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default BasicLayout;

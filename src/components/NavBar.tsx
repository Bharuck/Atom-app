import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { GrStatusInfo } from "react-icons/gr";
import { GiAndroidMask } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { VscSettings } from "react-icons/vsc";
import { GiRobotGolem } from "react-icons/gi";

type IconType = typeof GrStatusInfo | typeof GiAndroidMask | typeof ImStatsDots | typeof VscSettings | typeof GiRobotGolem;

const Icons: Record<string, IconType> = {
  GrStatusInfo,
  GiAndroidMask,
  ImStatsDots,
  VscSettings,
  GiRobotGolem,
};

interface Route {
  path: string;
  name: string;
  iconName: string;
  component: React.ReactElement;
}

interface NavBarProps {
  routes: Route[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
  return (
    <Flex align="center" justify="center" position="fixed" bottom="5" w="100%">
      <Box
        p="2"
        backdropFilter="blur(15px)"
        bg="rgba(255, 255, 255, 0.1)"
        boxShadow="0 4px 12px 0 rgba(31, 38, 135, 0.37)"
        borderRadius="10px"
        border="1px solid rgba(255, 255, 255, 0.18)">
        {routes.map(route => (
          <Tooltip key={route.path} label={route.name} placement="top">
            <IconButton colorScheme='teal' variant='outline' as={Link} to={route.path} icon={React.createElement(Icons[route.iconName])} aria-label={route.name} mx={1} size="lg" />
          </Tooltip>
        ))}
      </Box>
    </Flex>
  );
}

export default NavBar;

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
      <Box>
        {routes.map(route => (
          <Tooltip key={route.path} label={route.name} placement="top">
            <IconButton as={Link} to={route.path} icon={React.createElement(Icons[route.iconName])} aria-label={route.name} mx={2} size="lg" />
          </Tooltip>
        ))}
      </Box>
    </Flex>
  );
}

export default NavBar;

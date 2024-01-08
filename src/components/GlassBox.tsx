import { Box, BoxProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface GlassBoxProps extends BoxProps {
  children: ReactNode;
}

export const GlassBox: FC<GlassBoxProps> = ({ children, ...props }) => {
  return (
    <Box {...props}
      p="2"
      backdropFilter="blur(15px)"
      bg="rgba(255, 255, 255, 0.1)"
      boxShadow="0 4px 12px 0 rgba(31, 38, 135, 0.37)"
      borderRadius="10px"
      border="1px solid rgba(255, 255, 255, 0.18)">
      {children}
    </Box>
  );
};
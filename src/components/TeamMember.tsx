import React from 'react';
import { Image, Text, IconButton, HStack, Stack, Box } from '@chakra-ui/react';
import { FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  description: string;
  imageUrl: string;
  youtubeUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  imageSide: 'left' | 'right';
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, description, imageUrl, youtubeUrl, twitterUrl, linkedinUrl, imageSide }) => {
  const image = <Image borderRadius="full" boxSize="80px" src={imageUrl} alt={name} />;
  const content = (
    <Box>
      <Text fontWeight="bold" >{name}</Text>
      <Text fontWeight="italic">{description}</Text>
      <HStack spacing={2}>
        {youtubeUrl && <IconButton as="a" href={youtubeUrl} colorScheme="facebook" icon={<FaYoutube />} aria-label="Youtube" />}
        {twitterUrl && <IconButton as="a" href={twitterUrl} colorScheme="twitter" icon={<FaTwitter />} aria-label="Twitter" />}
        {linkedinUrl && <IconButton as="a" href={linkedinUrl} colorScheme="linkedin" icon={<FaLinkedin />} aria-label="LinkedIn" />}
      </HStack>
    </Box>
  );

  return (
    <Stack direction={['column', 'row']} spacing={4}>
      {imageSide === 'left' ? (
        <>
          <Box flexBasis="25%">{image}</Box>
          <Box flexBasis="75%">{content}</Box>
        </>
      ) : (
        <>
          <Box flexBasis="75%">{content}</Box>
          <Box flexBasis="25%">{image}</Box>
        </>
      )}
    </Stack>
  );
}

export default TeamMember;

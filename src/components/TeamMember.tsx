import React from 'react';
import { Image, Text, Button, HStack, Stack } from '@chakra-ui/react';
import { FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  imageUrl: string;
  youtubeUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, imageUrl, youtubeUrl, twitterUrl, linkedinUrl }) => {
  return (
    <Stack>
      <Image borderRadius="full" boxSize="150px" src={imageUrl} alt={name} mb={4} />
      <Text fontWeight="bold" mb={2}>{name}</Text>
      <HStack spacing={2}>
        {youtubeUrl && <Button as="a" href={youtubeUrl} colorScheme="facebook" leftIcon={<FaYoutube />} />}
        {twitterUrl && <Button as="a" href={twitterUrl} colorScheme="twitter" leftIcon={<FaTwitter />} />}
        {linkedinUrl && <Button as="a" href={linkedinUrl} colorScheme="linkedin" leftIcon={<FaLinkedin />} />}
      </HStack>
    </Stack>
  );
}

export default TeamMember;

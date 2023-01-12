import React from 'react';
import { Button, Box } from '@chakra-ui/react';

const Header = ({changeLog, user}) => {
  return (
    <Box>
      <div>{user}</div>
      <Button onClick={changeLog}color='tomato'>LOGOUT</Button>
    </Box>
  )
};

export default Header;
import React from 'react';
import {Box, Button} from '@chakra-ui/react';

const ListedEntry=({entry, editEntry, deleteEntry}) => {
  return (
    <Box w='90%'>
      {entry.title}
      <Button onClick={() => editEntry(entry)}>Edit</Button>
      <Button onClick={() => deleteEntry(entry._id)}>Delete</Button>

    </Box>

  )
};

export default ListedEntry;
import React from 'react';
import {Box, Grid, Button} from '@chakra-ui/react';
import Entry from './Entry';
import ListedEntry from './ListedEntry';
import axios from 'axios';

const Portal = ({user}) => {
  const [userEntries, setUserEntries] = React.useState([]);
  const [selectedEntry, setSelectedEntry] = React.useState('');
  const [disableAdd, setDisableAdd] = React.useState(true);
  const fetchEntries = () => {
    axios.get(`/entries/${user}`).then((data) => {setUserEntries(data.data)})
  }
  const handleSaveEntryClick = (data) => {
    data.email = user;
    if (data.id) {
      updateEntry(data);
    } else {
      postEntry(data);
    }

  }
  const postEntry = (data) => {
    axios.post(`/entry`, data).then(fetchEntries);
  };
  const updateEntry = (data) => {
    axios.put(`/entry`, data).then(fetchEntries);
  };
  const editEntry = (entry) => {
    setSelectedEntry(entry);
  };
  const deleteEntry = (entryId) => {
    axios.delete(`/entry`, {params:{id: entryId}}).then(fetchEntries);
  };

  React.useEffect(() => {
    if (user) {
      fetchEntries();
    }

  }, [user]);

  React.useEffect(() => {
    if (selectedEntry) {
      if (selectedEntry._id) {
        setDisableAdd(false);
      } else {
        setDisableAdd(true);
      }
    }

  }, [selectedEntry])


  return (
    <Grid templateColumns='30% auto'>
      <Box bgColor='blue'>
        <Button isDisabled={disableAdd} onClick={() => setSelectedEntry('')}>
          Add Entry
        </Button>
        <Box>
          {userEntries.map((entry) => (<ListedEntry editEntry={editEntry} deleteEntry={deleteEntry} key={entry._id} entry={entry}/>))}
        </Box>
      </Box>
      <Box bgColor='tomato'><Entry handleSaveEntryClick={handleSaveEntryClick} selectedEntry={selectedEntry}/></Box>
    </Grid>
  )
};

export default Portal;
import React from 'react';
import {Box, Textarea, Button, Input} from '@chakra-ui/react';
import CKEditor from 'react-ckeditor-component';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Entry=({selectedEntry, handleSaveEntryClick}) => {
  const [taValue, setTaValue] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    if (title) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

  }, [title])

  React.useEffect(() => {
    if (selectedEntry) {
      setTaValue(selectedEntry.text);
      setTitle(selectedEntry.title);
    }
  }, [selectedEntry])

  const handleClick = () => {
    const data = {id: selectedEntry._id, title: title, text: taValue, updated: Date.now()};
    handleSaveEntryClick(data);

  }

  return (
   <Box display='flex' alignItems='center' flexDir='column'>
    <Box minWidth='95%'>
      <Input size='lg'focusBorderColor='transparent'placeholder='Enter Title...' value={title} onChange={(e) => setTitle(e.target.value)}/>
    </Box>


    <Box minWidth='95%'>
      <ReactQuill value={taValue} onChange={setTaValue} />
    </Box>

{/*
    <Textarea focusBorderColor='transparent' value={taValue} onChange={(e) => setTaValue(e.target.value)}>
    </Textarea> */}
    <Button isDisabled={isDisabled} onClick={handleClick}>Save Entry</Button>
   </Box>
  )
};

export default Entry;
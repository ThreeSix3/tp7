import React, { useState, useEffect } from 'react';
import { Grid, TextField, Alert, Typography } from '@mui/material';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxCharLimit = 100;

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxCharLimit) {
      setText(newText);
    }
  };

  return (
    <div style={{top:100}}>
      <TextField value={text} label="Ingrese su texto" onChange={handleChange} fullWidth variant='outlined' multiline rows={4} />
      <Typography variant="caption" align='right'>Caracteres: {charCount}/{maxCharLimit}</Typography>
      {charCount === maxCharLimit && <Alert severity='warning'>Limite de caracteres alcanzado</Alert>}
    </div>
  );
};

function App ()  {
  return (
     <Grid container justifyContent={"center"} alignItems={"center"} style={{minHeight: "100vh"}}> 
        <div>
          <Typography variant="h4" gutterBottom>Contador de caracteres</Typography>
          <CharacterCounter/>
        </div>
    </Grid>
  );
};

export default App;
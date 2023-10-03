import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import axios from 'axios';

function Create() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:3001/api/create', {
        itemName,
        itemDescription,
        itemPrice,
      });
      // Reset the input fields
      setItemName('');
      setItemDescription('');
      setItemPrice('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} mt={20}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h4" gutterBottom>
            Create New Item
          </Typography>
          <TextField
            label="Item Name"
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            label="Item Description"
            variant="outlined"
            fullWidth
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          />
          <TextField
            label="Item Price"
            variant="outlined"
            fullWidth
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
            onClick={handleCreate}
          >
            Create
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Create;

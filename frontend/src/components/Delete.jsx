import React from 'react';
import { useParams } from 'react-router-dom'; 

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';

function Delete() {
  const { id } = useParams(); 

  const handleDelete = async () => {
    try {await axios.delete(`http://localhost:3001/api/delete/${id}`); 
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Delete Item
      </Typography>
      <Typography variant="body1" paragraph>
        Are you sure you want to delete  item?
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Paper>
  );
}

export default Delete;
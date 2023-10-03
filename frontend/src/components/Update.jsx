import React, { useState, useEffect } from 'react';
import { useParams,useNavigate  } from 'react-router-dom'; 
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify

// { useParams } from 'react-router-dom';
function Update() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [item, setItem] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  useEffect(() => {
    const fetchItems = async () => {
      try {
       const response = await axios.get(`http://localhost:3001/api/read/${id}`);
       const itemsData= response.data;
       setItemName(itemsData.name)
        setItemDescription(itemsData.description)
        setItemPrice(itemsData.price)
        console.log(itemsData.name)
       
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleUpdate = async () => {
    try {
      const updatedData = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
      };
  
      await axios.put(`http://localhost:3001/api/update/${id}`, updatedData);
      toast.success('Item updated successfully');
      alert("Item updated successfully")
     navigate('/');
      setItem('');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h4" gutterBottom>
            Update Item
          </Typography>
          <TextField
            label="New Item Name"
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
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Update;

import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

function Read() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/read');
        setItems(response.data);

      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/api/delete/${itemId}`);
      // Update the items list after successful deletion
      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
      alert("Item deleted successfully")
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Item List
      </Typography>
      <List>
        {items.map((item, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={`Item Name: ${item.name}`}
                secondary={`Item Description: ${item.description}, Item Price: ${item.price}`}
              />
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/update/${item._id}`} // Link to the Update route with item ID as a parameter
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(item._id)} // Call handleDelete with item ID
              >
                Delete
              </Button>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default Read;

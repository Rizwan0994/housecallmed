import React from 'react';
import { Container, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const styles = {
    formpPaper: {
        padding: '20px',
        marginTop: '10px',
        marginBottom: '10px',
        color:"#09a4d8",
        borderRadius:"30px", 
        textAlign:"center"
    },
    };
    
const ScheduleForm = () => {
  return (
    <Container maxWidth="xs" >
      <Paper elevation={3} style={styles.formpPaper}>
        <Typography variant="h4" gutterBottom>
          Schedule
        </Typography>
        <form>
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Location</InputLabel>
            <Select label="Select Location" >
              <MenuItem value="location1">Pakistan</MenuItem>
              <MenuItem value="location2">India</MenuItem>
             
            </Select>
          </FormControl>
          <TextField fullWidth margin="normal" label="Name" />
          <TextField fullWidth margin="normal" label="Birthday (DD/MM/YY)" />
          <TextField fullWidth margin="normal" label="Phone" />
          <TextField fullWidth margin="normal" label="Email" />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            style={{ marginTop: '10px', borderRadius: '3px',textTransform:"none"}}
          >
            Schedule a Visit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ScheduleForm;

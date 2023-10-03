import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./EmailInputBar.css"
const EmailInputBar = ({ onSubmit ,label}) => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email.trim() !== '') {
      onSubmit(email);
      setEmail('');
    }
  };

  return (
    <div className="bar-div-media" style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={email}
        onChange={handleInputChange}
        style={{ flex: 1, marginRight: '10px', height: '40px', width: '320px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ backgroundColor: '#09a4d8', height: '55px', fontSize:'12px' }}
      >
        Send
      </Button>
    </div>
  );
};

export default EmailInputBar;

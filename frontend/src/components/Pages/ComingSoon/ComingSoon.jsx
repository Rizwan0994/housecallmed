// ComingSoonPage.js

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EmailInputBar from '../../UI/Bars/EmailInputBar';
import ImageCard from '../../UI/Cards/ImageCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import "./ComingSoon.css"

const ComingSoonPage = () => {
  const handleEmailSubmit = (email) => {
    //call api to send email
    alert(`Email submitted: ${email}`);
  };

  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        color: '#0f1c49',
       
      }}
    >
      <Typography variant="h3" gutterBottom>
        Coming Soon!
      </Typography>
      <Typography variant="subtitle2" gutterBottom color={'inherit'} style={{content:"justify"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br></br>eiusmod tempor incididunt ut labore et.
      </Typography>
      <EmailInputBar onSubmit={handleEmailSubmit} />
      <ImageCard
        imageUrl="https://i.postimg.cc/nz2qNbNR/Screenshot-2023-09-30-133915-removebg-preview.png"
        title=" Coming Soon!"
       
      />

      {/* Social Media Icons */}
    <div style={{ marginTop: '20px' }}>
      <FontAwesomeIcon
        icon={faLinkedin}
        size="2x" 
        style={{ marginRight: '20px', color:'#0C63BC' }}
      />
      <FontAwesomeIcon
        icon={faFacebook}
        size="2x"
        style={{ marginRight: '20px', color:'#3b5998' }}
      />
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        color='#C13584'
      />
    </div>
    </Container>
    
  );
};

export default ComingSoonPage;

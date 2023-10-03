import React from 'react';
import './Footer.css';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function Footer() {

    const handleEmailSubmit = (email) => {
        //call api to send email
        alert(`Email submitted: ${email}`);
    };

    return (
        <footer className='footer-style'>
            <div className='footer-linkContainer'>
                <div className='footer-links' style={{ marginRight: '200px' }}>
                    
                        <img
            src="/path-to-your-logo-image.png" 
            alt="HouseCall MD Logo"
            style={{ height: '40px', marginRight: '10px' }} 
          />
                    <div className='footer-typo-caption'>
                        <Typography variant='caption' >
                            Contact us today to schedule a visit and embark
                            on a healthcare journey that is centered around
                            your needs, goals, and preferences.Togather we can achieve optimal health and well-being.
                        </Typography>
                        <p > 1494 S ROBERTSON BLVD SUITE 200</p>
                        <p>LOS ANGELES, CA 90035</p>
                        <p>PHONE: 626-765-4321</p>
                        <p>Open 24 Hours, Monday - Sunday</p>
                    </div>


                </div>
                <div className='footer-links'>
                    <h4>Quick Links</h4>
                    <a href='#' className='footer-a'> Who We Are</a>
                    <a href='#' className='footer-a'> Our Mission</a>
                    <a href='#' className='footer-a'>Awards</a>
                    <a href='#' className='footer-a'>Success Story</a>
                    <a href='#' className='footer-a'>Experience</a>
                </div>
                {/* <div className='footer-links'>
                    <h4>Departments</h4>
                    <a href='#' className='footer-a'> Who We Are</a>
                    <a href='#' className='footer-a'> Our Mission</a>
                    <a href='#' className='footer-a'>Awards</a>
                    <a href='#' className='footer-a'>Success Story</a>
                    <a href='#' className='footer-a'>Experience</a>
                </div> */}
                <div className='footer-links-icon' style={{ marginTop: '30px', color: 'white' }}>

                    <IconButton sx={{ color: 'white', fontSize: 36 }} >
                        <Icon color='white' size="2x" >
                            <FacebookIcon />
                        </Icon>
                    </IconButton >
                    <IconButton sx={{ color: 'white' }}>
                        <Icon color='white'>
                            <InstagramIcon />
                        </Icon>
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                        <Icon color='white'>
                            <LinkedInIcon />
                        </Icon>
                    </IconButton>

                </div>


            </div>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)',}}>Stay up to date on the latest HouseCallMD news.</Typography>
            <TextField
            sx={{border: '1.5px solid white',color:'white', height:'50px', width:'400px', marginTop:'20px', borderRadius:'5px'}}
                variant="outlined"
                label="Email"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button variant="contained" onClick={handleEmailSubmit} 
                            sx={{ background: 'white' ,color:'black', padding:'13px', marginRight:'-15px',marginBottom:'1px',
                            '&:hover': {
                                backgroundColor: 'white', 
                                color: '#103365',
                              },}}>
                            Send
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
            <p className='footer-bottom'>© Copyright Housecall MD 2023. All Right Reserved. Designed and Developed by Octathorn Technologies</p>
        </footer>
    );
}

import React from 'react';
import Button from '@mui/material/Button';
const Style = {
    border: '1.5px solid #09a4d8',
    textTransform: 'none',
    fontweight: 'bold',
    margin: '10px',
    backgroundColor: 'white',
    color: '#09a4d8',
    width: '200px',
    height: '58px',
    textAlign: 'center',
    fontSize: '14px',
    '&:hover': { backgroundColor: '#09a4d8', color: 'white' }
}
const MyButton = ({ text, color, variant, onClick, startIcon, endIcon, disabled }) => {
    return (
        <Button
            variant={variant} //'contained', 'outlined', 'text'
            color={color} // 'primary', 'secondary'
            onClick={onClick}
            startIcon={startIcon && <startIcon />}
            endIcon={endIcon && <endIcon />}
            disabled={disabled}
            style={Style}
            sx={{

            }}
        >
            {text}
        </Button>
    );
};

export default MyButton;

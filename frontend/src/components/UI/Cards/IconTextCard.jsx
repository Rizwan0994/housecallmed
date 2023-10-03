import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CenteredCard = ({ icon, title, children }) => {
  return (
    <Card
      style={{
        width: 250,
        height: 250,
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color:'#0f1c49',
        fontStyle:'bold',
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          {icon && (
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{icon}</div>
          )}
          <Typography variant="h5" align="center">
            {title}
          </Typography>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CenteredCard;

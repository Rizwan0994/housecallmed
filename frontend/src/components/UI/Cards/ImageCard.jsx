// // ImageCard.js

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';


// const ImageCard = ({ imageUrl, title }) => {
//   return (
//     <Card sx={{ marginTop:'20px', paddingLeft:'70px',paddingRight:'70px'}}>
//       <CardMedia
//         component="img"
//         height="250"
//         image={imageUrl}
//         alt={title}
//       />
//     </Card>
//   );
// };

// export default ImageCard;


import React from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Link,
  Box,
} from '@mui/material';

function ImageCard() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{width:'20px'}}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <div>
            {/* <Link href="./tab-icon/tab-icon.png" rel="icon" type="image/x-icon"> */}
              <img  style={{borderRadius:'5px', width:'450px',height:'480px'}} src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvciUyMHBhdGllbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Tab Icon" />
            {/* </Link> */}
          </div>
        </Box>
      </Container>
    </>
  );
}

export default ImageCard;

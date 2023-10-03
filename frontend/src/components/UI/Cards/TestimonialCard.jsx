// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Card, CardContent, Typography, Avatar } from '@mui/material';

// const cards = [
//   {
//     id: 1,
//     name: 'John Doe',
//     date: 'Oct 2, 2023',
//     caption: 'Patient',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula eu lacus tristique, ac euismod sapien tincidunt.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     date: 'Oct 3, 2023',
//     caption: 'Patient',
//     text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
//   },
//   {
//     id: 3,
//     name: 'Alice Johnson',
//     date: 'Oct 4, 2023',
//     caption: 'Patient',
//     text: 'Vestibulum consectetur euismod est, eu euismod justo sagittis et. Fusce luctus bibendum erat.',
//   },
// ];

// const TestimonialCard = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2, 
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '50', 
//     swipeToSlide: true, 
//   };

//   return (
//     <Slider {...settings}>
//       {cards.map((card) => (
//         <Card
//           key={card.id}
//           style={{ width: 200, height: 200, margin: '10px 10px', border: '5px solid #ccc' }}
//         >
//           <CardContent>
//             <Avatar sx={{ width: 40, height: 40, backgroundColor: '#007bff' }}>
//               {card.name[0]}
//             </Avatar>
//             <Typography variant="subtitle2" color="textSecondary">
//               {card.name} | {card.date}
//             </Typography>
//             <Typography variant="caption" color="textSecondary">
//               {card.caption}
//             </Typography>
//             <Typography variant="body2" align="justify" style={{justifyContent:'center'}}>
//               {card.text}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Slider>
//   );
// };

// export default TestimonialCard;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';

const cards = [
    {
        id: 1,
        name: 'John Doe',
        date: ' | Oct 2, 2023',
        caption: 'Patient',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula eu lacus tristique, ac euismod sapien tincidunt.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        date: ' | Oct 3, 2023',
        caption: 'Patient',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula eu lacus tristique, ac euismod sapien tincidunt.',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        date: ' | Oct 4, 2023',
        caption: 'Patient',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ligula eu lacus tristique, ac euismod sapien tincidunt.',
    },
];

const TestimonialCard = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        swipeToSlide: true,
    };

    return (
        <Slider {...settings}>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    style={{ width: 300, height:400, margin: '0 10px', border: '5px solid #ccc' }}
                >
                    <CardContent>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid container
                                direction="row"
                                item>
                                <Avatar sx={{ width: 40, height: 40, backgroundColor: '#007bff' }}>
                                    {card.name[0]}
                                </Avatar>
                                <Typography variant="subtitle2" color="textSecondary">
                                    {card.name}
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary">
                                    {card.date}
                                </Typography>
                                {/* <Typography variant="caption" color="textSecondary">
                                    {card.caption}
                                </Typography> */}
                            </Grid>
                        </Grid>
                        <Typography variant="body2" align="justify" style={{ marginTop: '10px' }}>
                            {card.text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Slider>
    );
};

export default TestimonialCard;

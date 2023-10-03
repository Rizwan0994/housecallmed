import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const styles = {
    color: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    textalign: 'justify',
    paddingLeft: '300px',
    paddingRight: '300px',
    paddingTop: '10px',
    paddingbottom: '30px',
    color: "#fff" ,

}

const PageTitleCard = ({ title, description, caption, imageUrl }) => {

  return (
    <Card sx={{ position: "relative", maxWidth: 1300 }}>
      {/* Background Image */}
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={title}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* Title */}
        <Typography variant="h6" gutterBottom style={{ color: "#fff" }}>
          {title}
        </Typography>
        {/* Description */}
        <Typography variant="h6" color="text.secondary" style={{ color: "#0f1c49" }}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={styles}>
          {caption}
        </Typography>
      </div>
    </Card>
  );
};

export default PageTitleCard;

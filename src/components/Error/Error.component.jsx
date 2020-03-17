import React from "./node_modules/react";
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import Card from "./node_modules/@material-ui/core/Card";
import CardActionArea from "./node_modules/@material-ui/core/CardActionArea";
import CardContent from "./node_modules/@material-ui/core/CardContent";
import CardMedia from "./node_modules/@material-ui/core/CardMedia";
import Typography from "./node_modules/@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://th.bing.com/th/id/OIP.2UZPKc0Xbgy5QMDtHGNKGgHaEi?w=230&h=160&c=7&o=5&pid=1.7"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;

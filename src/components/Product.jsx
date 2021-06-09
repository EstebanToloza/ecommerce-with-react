import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(50)}
          </Typography>
        }
        title="Nike Shoes"
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/200/300?random=1"
        title="Nike Shoes"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Running shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AddShoppingCart fontSize="large" />
        </IconButton>
        <IconButton aria-label="Add to card">
          {Array(4)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem culpa illum dignissimos ullam. Animi, alias?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
    marginBottom: "1rem"
  },
  cardHeaderRoot: {
    overflow: 'hidden',
  },
  cardHeaderContent: {
    overflow: 'hidden',
  },
});

export default function CoffeeCard(props) {
  const { avatarUrl, title, price, description, imageUrl } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <CardHeader
          classes={{
            root: classes.cardHeaderRoot,
            content: classes.cardHeaderContent,
          }}
          avatar={
            <Avatar
              aria-label='recipe'
              className={classes.avatar}
              src={avatarUrl}
            />
          }
          action={
            <IconButton aria-label='settings'>
              <ShareRoundedIcon />
            </IconButton>
          }
          title={
            <Typography title={title} noWrap gutterBottom variant='h6' component='h4'>
              {title}
            </Typography>
          }
          subheader={price}
        />
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <Typography noWrap variant='body2'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>BUY NOW</Button>
        <Button size='small'>OFFER</Button>
      </CardActions>
    </Card>
  );
}

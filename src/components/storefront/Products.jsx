import React from 'react';
import { connect } from 'react-redux';
import { reduceCount } from '../../store/products';
import { addItem } from '../../store/cart';
import { addTocart } from '../../store/thunk';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  const classes = useStyles();

  function handleAddToCart(item) {
    props.addItem(item);
    if (item.inStock > 0) {
      // props.reduceCount(item);
      props.addTocart(item);
    }
  }

  return (
    <div className="cardMain">
      {console.log(props)}
      <h2 className="name">{props.categories.active.name}</h2>
      <h4 className="discription">{props.categories.active.description}</h4>

      <div className="cardContaner">
        {props.products.fillterd.map((item, idx) => {
          return (
            <div key={idx} className="myCard">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`https://source.unsplash.com/random?${item.name}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description?.slice(200, item.description.length)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Price : {item.price} | avilable : {item.inStock}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    ADD TO Cart
                  </Button>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = { reduceCount, addItem, addTocart };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
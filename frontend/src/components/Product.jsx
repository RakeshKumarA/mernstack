import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Spacer from 'react-add-space';

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    minHeight: 320,
    margin: '20px',
  },
  typoh5: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Product = ({ product }) => {
  const classes = useStyles();
  const history = useHistory();

  const onClickproduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => onClickproduct(product.id)}>
        <CardMedia
          component="img"
          alt={product.name}
          height="220"
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography variant="h6" className={classes.typoh5}>
            {product.name}
          </Typography>
          <Rating
            readOnly
            size="small"
            value={Number(product.rating)}
            precision={0.5}
          />
          <Spacer amount={2} />

          <Typography variant="body1" component="span">
            {product.numReviews} reviews
          </Typography>
          <Typography variant="h5">$ {product.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;

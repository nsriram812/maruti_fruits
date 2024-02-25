import React from 'react';
import { SubHeading,MenuItem } from '../../components';
import './Products.css';
import styles from './Products.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => (
  <div className="app__products flex__center section_padding" id="menu">
    <div className="app__products-title">
    
    <h1 className="headtext__cormorant">Our Products</h1>
    </div>
    <div className="app__products-names">
    <div className="product-container">
    <Card sx={{ ...inStyle.card }}>
        <CardMedia
           sx={{ ...inStyle.cardMedia }}
          image="https://5.imimg.com/data5/UG/SV/MY-5734036/aseptic-and-canned-totapuri-mango-pulp-500x500.jpg"
          title="Totapure Mango pulp"
        />
        <CardContent>
        <Typography variant="h4" sx={{ ...inStyle.typography }}>
  Totapure Mango pulp
</Typography>
        </CardContent>
      </Card>
    </div>
    <div className="product-container">
    <Card sx={{ ...inStyle.card }}>
        <CardMedia
          sx={{ ...inStyle.cardMedia }}
          image="https://5.imimg.com/data5/SELLER/Default/2021/7/FC/UM/MJ/14274066/canned-red-guava-pulp-500x500.jpg"
          title="Pink Guava Pulp"
        />
        <CardContent>
        <Typography variant="h4" sx={{ ...inStyle.typography }}>
          Pink Guava Pulp
        </Typography>
        </CardContent>
      </Card>
    </div>
    <div className="product-container">
      <Card sx={{ ...inStyle.card }}>
        <CardMedia
          sx={{ ...inStyle.cardMedia }}
          image="https://5.imimg.com/data5/OE/NI/LK/SELLER-71247028/chili-powder-500x500.jpg"
          title="Alphanso Mango Pulp"
        />
        <CardContent>
        <Typography variant="h4" sx={{ ...inStyle.typography }}>
          Alphanso Mango Pulp
          </Typography>
        </CardContent>
      </Card>
    </div>
    <div className="product-container">
    <Card sx={{ ...inStyle.card }}>
        <CardMedia
          sx={{ ...inStyle.cardMedia }}
          image="https://5.imimg.com/data5/LE/HY/CL/SELLER-8304929/tomato-paste.jpg"
          title="Tomato Puree    "
        />
        <CardContent>
        <Typography variant="h4" sx={{ ...inStyle.typography }}>
          Tomato Puree
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
  </div>
);

const inStyle = {
  card: {
    width: 300,
    height: 300,
    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },
  },
  cardMedia: {
    height: 250,
  },
  typography: {
    fontSize: '1.2rem',
    color: 'grey',
    fontWeight: '700',
    fontStretch: 'condensed',
    textAlign: 'center',
  },
};


export default Products;

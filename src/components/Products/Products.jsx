import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles.js'

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: './images/running-shoes.jpg'},
    {id: 2, name: 'MacBook', description: 'Apple MacBook', price: '$10', image: './images/macbook.jpg'},
]


const Products = () => {
    const classes = useStyles()
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4} >
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product  product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;
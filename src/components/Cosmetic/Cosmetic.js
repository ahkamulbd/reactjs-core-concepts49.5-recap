import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        console.log('Item added', id);
    }

    const addToCartWithParameter = () => addToCart(id);
    return (
        <div className='product'>
            {/* <h2>Buy asap: {props.cosmetic.name}</h2>
            <p>Price: $ {props.cosmetic.price}</p> */}
            <h2>Buy asap: {name}</h2>
            <p>Price: $ {price}</p>
            <p><small>Cosmetic ID: {id}</small></p>
            <button onClick={addToCartWithParameter}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;
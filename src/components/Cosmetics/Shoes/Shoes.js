import React from 'react';
import { multiply } from '../../../utilities/calculate';

const Shoes = () => {
    const first = 60;
    const second = 50;
    const result = multiply(first, second);
    return (
        <div>
            <h3>This is my Shoe Store</h3>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;
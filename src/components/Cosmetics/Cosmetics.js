import React from 'react';
import { add } from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h1>This is my Cosmetic Store</h1>
            <p>Total Sell per day: {total}</p>

        </div>
    );
};

export default Cosmetics;
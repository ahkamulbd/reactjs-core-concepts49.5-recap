import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    // const cosmetics = [
    //     { id: 1, name: "alta", price: 100 },
    //     { id: 2, name: "calta", price: 200 },
    //     { id: 3, name: "malta", price: 300 },
    //     { id: 4, name: "talta", price: 400 },
    //     { id: 5, name: "zalta", price: 500 }
    // ]
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    })
    return (
        <div>
            <h1>This is my Cosmetic Store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;
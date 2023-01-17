import React from 'react';
import Feature from '../Feature/Feature';

const Price = ({ option }) => {
    const { name,features, price } = option;
    return (
        <div className='bg-indigo-500 m-6 p-6 text-white rounded-md'>
            <h3 className='text-2xl'>{name}</h3>
            <p><span className='text-5xl'>{price}</span><span className='text-1xl'>/month</span></p>
            {
                features.map((feature, index) => <Feature feature = {feature} key= {index}></Feature>)
            }
            <button className='bg-green-400 p-2 w-full mt-5 rounded-lg font-bold'>Buy Now</button>
        </div>
    );
};

export default Price;
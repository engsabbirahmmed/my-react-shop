import React from 'react';
import Price from '../Price/Price';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: "Free", price: 0, features: [
                'Awesome feature',
                'Free for 1 month',
                'Unnecessary feature',
                'Free for new customer',
                'Do not use feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Everything of Free Feature',
                'Awesome feature',
                'Unbelievable feature',
                'Extra feature',
                'Do not use feature'
            ]
        },
        {
            id: 3, name: 'Platinum', price: 19.99, features: [
                'Everything of Free Feature',
                'Awesome feature',
                'Unbelievable feature',
                'Extra Feature',
                'Do not use feature'
            ]
        },
        {
            id: 4, name: 'Premium', price: 29.99, features: [
                'More Dhamaka Feature',
                'Awesome feature',
                'Unbelievable feature',
                'More Extra feature',
                'Do not use feature'
            ]
        }
    ]
    return (
        <div>
            <h2 className='text-4xl bg-indigo-500 p-6 text-white font-bold mt-6 w-3/4 rounded m-auto'>Best deal for you</h2>
            <div className='grid md:grid-cols-4 grid-gap-4 m-4 '>
                {
                    pricingOption.map(option => <Price key={option.id} option={option}></Price>)
                }
            </div>
        </div>
    );
};

export default Pricing;
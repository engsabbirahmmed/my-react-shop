import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { XAxis, BarChart, Bar, YAxis, Tooltip } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {

        /* -----------*******---------*/
        // fetch system
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(Response => Response.json())
        //     .then(data => console.log(data.data))

        /* -----------*******---------*/

        // axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedPhone = data.data.data;
                const phoneData = loadedPhone.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseFloat(parts[1])
                    const singlePhone = {
                        name: phone.name,
                        price: price
                    }
                    return singlePhone
                })
                setPhones(phoneData)
            })
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold my-16'>Phone Price Chart</h1>
            <BarChart width={500} height={300} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis className='p-6 gap-8' dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;


/* 
axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const loadedPhone = data.data.data;
        const phoneData = loadedPhone.map(phone => {
            const parts = phone.slug.split('-')
            const price = parseFloat(parts[1])
            const singlePhone = {
                name: phone.phone_name,
                price: price
            };
            return singlePhone;
        });
        setPhones(phoneData);
    }) */
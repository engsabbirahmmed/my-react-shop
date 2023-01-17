import React from 'react';

const Link = ({ route }) => {
    const { name, path } = route;
    return (
            <ul className='mr-12 p-2 bg-purple-600'>
                <a href={path}>{name}</a>
            </ul>
    );
};

export default Link;
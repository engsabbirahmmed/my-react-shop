import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Shop', path: '/shop' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-purple-600'>
            <div  onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon/> : <Bars3Icon />
                }
            </div>
            <ul className={`md:flex md:static justify-center absolute ${open ? 'top-6' : 'top-[-300px]'} duration-500 ease-out bg-purple-600 w-full text-2xl font-semibold`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
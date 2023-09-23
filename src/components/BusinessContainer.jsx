import React from 'react';
import BusinessCard from './BusinessCard'; // Import your BusinessCard component here

const businesses = [
    {
        id: 1,
        thumbnail: 'https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        owner: 'John Doe',
        name: 'ABC Corporation',
        city: 'New York',
    },
    {
        id: 2,
        thumbnail: 'https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Jane Smith',
        name: 'XYZ Enterprises',
        city: 'Los Angeles',
    },
    {
        id: 3,
        thumbnail: 'https://images.pexels.com/photos/2182982/pexels-photo-2182982.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Robert Johnson',
        name: 'PQR Inc.',
        city: 'Chicago',
    },
    {
        id: 4,
        thumbnail: 'https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Emily Davis',
        name: 'LMN Co.',
        city: 'San Francisco',
    },
    {
        id: 5,
        thumbnail: 'https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Michael Wilson',
        name: 'EFG Ltd.',
        city: 'Miami',
    },
    {
        id: 6,
        thumbnail: 'https://images.pexels.com/photos/2887207/pexels-photo-2887207.jpeg?auto=compress&cs=tinysrgb&w=1600',
        owner: 'Sarah Brown',
        name: 'HIJ Industries',
        city: 'Houston',
    },
];

const BusinessContainer = () => {
    return (
        <div className="container max-w-[1200px] w-full px-5 mx-auto py-20">
            <h1 className=' font-bold py-10 text-3xl'>Find Business</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {businesses.map((business) => (
                    <BusinessCard key={business.id} data={business} />
                ))}
            </div>
        </div>
    );
};

export default BusinessContainer;

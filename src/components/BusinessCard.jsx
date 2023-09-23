import React from 'react';
import { FaStar } from 'react-icons/fa';

const BusinessCard = ({ data }) => {
    const { thumbnail, owner, name, city } = data;

    return (
        <div className="w-full h-full rounded-lg flex flex-col gap-5">
            <img
                className="w-full h-full rounded-lg"
                src={thumbnail}
                alt="Business Owner"
            />
            <div className="flex justify-between px-2">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-sm text-gray-600">{city}</p>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;

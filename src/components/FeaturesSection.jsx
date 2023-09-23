import React from 'react';
import { FaCogs, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import SectionBox from './SectionBox';

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaCogs />,
            title: 'Feature 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia.',
        },
        {
            icon: <FaChartLine />,
            title: 'Feature 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia.',
        },
        {
            icon: <FaMobileAlt />,
            title: 'Feature 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia.',
        },
    ];

    return (
        <section className="py-16 px-5">
            <div className="container max-w-[1200px] w-full mx-auto text-center">
                <SectionBox title={"Features"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-5 rounded-xl shadow-2xl">
        <div className="text-4xl text-red-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default FeaturesSection;



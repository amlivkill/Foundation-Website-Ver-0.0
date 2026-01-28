import React from 'react';
import { Sprout, Mountain, Droplets } from 'lucide-react';

const projects = [
    {
        title: "Organic Farming Initiative",
        category: "Agriculture",
        description: "Training 500+ farmers in Tehri Garhwal on organic cultivation techniques and market linkage.",
        icon: Sprout,
        status: "Ongoing"
    },
    {
        title: "Water Conservation Drive",
        category: "Environment",
        description: "Rejuvenating natural springs and implementing rainwater harvesting in 10 villages.",
        icon: Droplets,
        status: "Completed"
    },
    {
        title: "Himalayan Biodiversity",
        category: "Conservation",
        description: "Documentation and preservation of indigenous plant species critical to the ecosystem.",
        icon: Mountain,
        status: "Planning"
    }
];

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Initiatives</h1>
                <p className="text-lg text-gray-600">Driving impact through targeted interventions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="items-center justify-center bg-primary-50 h-48 flex">
                            <project.icon className="h-16 w-16 text-primary-400" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-semibold uppercase tracking-wide text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                                        project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                            'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

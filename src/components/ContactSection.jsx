import React from 'react';

const ContactSection = () => {
    return (
        <section className=" py-16">
            < div className="container max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-5" >
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                    <p className='text-gray-500 mb-10'>Feel Free to contact us anytime.</p>
                    <p className="text-gray-600 leading-10">
                        Address: 123 Main St, Cityville<br />
                        Phone: (555) 555-5555<br />
                        Email: info@example.com
                    </p>
                </div>

                <div className="md:w-1/2 p-5">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </ div>
        </section >
    );
};

export default ContactSection;

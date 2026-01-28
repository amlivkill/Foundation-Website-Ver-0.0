import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <ChatBot />
            <Footer />
        </div>
    );
};

export default Layout;

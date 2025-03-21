import React from 'react';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-xl">My Next.js App</h1>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-gray-800 text-white p-4">
                <p>© 2023 My Next.js App</p>
            </footer>
        </div>
    );
};

export default Layout;
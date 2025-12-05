"use client"
import { useEffect } from 'react';
import "./globals.css";
import SwitchTab from '@/components/pages/common/dark-light';

// 1. IMPORT THEME 2 COMPONENTS
// **Adjust these paths as needed to match where your HeaderTwo and FooterTwo files are located**
import HeaderTwo from '@/components/layout/headers/header-two'; 
import FooterTwo from '@/components/layout/footers/footer-two'; 

// 🎯 ADD THIS LINE: IMPORT THE CHATBOT COMPONENT
import ChatbotWidget from '@/components/ChatbotWidget'; 

export default function RootLayout({ children }) {
    useEffect(() => {
        // This ensures Bootstrap JS runs only on the client side after mounting
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
                <link rel='icon' type='image/png' href='../favicon.png' />
            </head>
            <body>
                <HeaderTwo />
                
                <SwitchTab /> 
                
                <main>
                    {children}
                </main>
                
                <FooterTwo />
                
                {/* 🎯 THIS COMPONENT IS NOW RECOGNIZED */}
                <ChatbotWidget /> 
            </body>
        </html>
    );
}
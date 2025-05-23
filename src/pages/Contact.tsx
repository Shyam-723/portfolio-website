import React, { useEffect } from 'react';
import Header from '../components/Header';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Your Name';
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Contact</h1>
          
          <div className="text-center">
            <p className="text-xl text-gray-600">
              This page is coming soon. Check back later to connect with me!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold">PTMS</h2>
          <p className="text-sm mt-2">
            Crafting memorable experiences, one journey at a time.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex space-x-6 text-sm font-semibold">
          <a href="/" className="hover:text-pink-300 transition duration-200">Home</a>
          <a href="/about" className="hover:text-pink-300 transition duration-200">About</a>
          <a href="/contact" className="hover:text-pink-300 transition duration-200">Contact</a>
          <a href="/support" className="hover:text-pink-300 transition duration-200">Support</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-purple-500 pt-4">
        &copy; {new Date().getFullYear()} PTMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import footerLogo from '../../assets/frontend_assets/logo.png'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        // <div className='grid md:grid-cols-3 place-items-center space-y-6  p-10 bg-gray-600'>
        //     <div className='space-y-4 '>
        //         <img src={footerLogo} alt="footer logo" />
        //         <p className='text-gray-300'>Experience the joy of fresh, chef-prepared meals delivered with care. Whether it’s breakfast, lunch, or dinner — we’ve got you covered!</p>
        //         <div className='flex items-center space-x-4'>  
        //             <FaFacebook className='border rounded-full p-1 border-gray-200 text-3xl'></FaFacebook>
        //             <FaTwitter className='border rounded-full p-1 border-gray-200 text-3xl'></FaTwitter>
        //             <FaLinkedin className='border rounded-full p-1 border-gray-200 text-3xl'></FaLinkedin>
        //         </div>   
        //     </div>

        //     <div>
        //       <h2 className='text-2xl font-bold mb-4 text-white'>Company</h2>
        //        <div className='text-gray-300 space-y-2'>
        //          <p>Home</p>
        //         <p>About Us</p>
        //         <p>Delevary</p>
        //         <p>Privacy Policy</p>
        //        </div>
        //     </div>

        //     <div className='space-y-3.5'>
        //           <h2 className='text-2xl font-bold  text-white'>Get in Touch</h2>
        //           <div className='text-gray-300'>
        //             <p>+880 1384950386</p>
        //           <p>potato@hub.com</p>
        //           </div>
        //     </div>
        // </div>
        <div className="bg-gray-800 text-gray-300 p-6 md:p-10 mt-5">
  <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
    {/* Logo & Description */}
    <div className="space-y-4 text-center md:text-left">
      <img src={footerLogo} alt="footer logo" className="mx-auto md:mx-0 w-32" />
      <p>
        Experience the joy of fresh, chef-prepared meals delivered with care.
        Whether it’s breakfast, lunch, or dinner — we’ve got you covered!
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <FaFacebook className="border border-gray-500 rounded-full p-1 text-3xl hover:text-white hover:border-white transition" />
        <FaTwitter className="border border-gray-500 rounded-full p-1 text-3xl hover:text-white hover:border-white transition" />
        <FaLinkedin className="border border-gray-500 rounded-full p-1 text-3xl hover:text-white hover:border-white transition" />
      </div>
    </div>

    {/* Company Links */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-semibold mb-4 text-white">Company</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About Us</a></li>
        <li><a href="#" className="hover:text-white">Delivery</a></li>
        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="text-center md:text-left space-y-3">
      <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
      <p>+880 1384950386</p>
      <p>potato@hub.com</p>
    </div>
  </div>
</div>
    );
};

export default Footer;
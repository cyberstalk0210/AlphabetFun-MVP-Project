import React from 'react';

const AlphabetFunFooter = () => {
  return (
    <footer className="bg-green-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">AlphabetFun</h3>
          <div className="flex justify-center md:justify-start space-x-2">
            {/* <img src="https://via.placeholder.com/40" alt="Certified" className="w-10 h-10" />
            <img src="https://via.placeholder.com/40" alt="Certified" className="w-10 h-10" />
            <img src="https://via.placeholder.com/40" alt="Certified" className="w-10 h-10" /> */}
          </div>
        </div>

        {/* School Locations */}
        <div>
          <h3 className="text-lg font-bold mb-2">School</h3>
          <ul className="space-y-1">
            <li>India</li>
            <li>West Bengal</li>
            <li>Telangana</li>
            <li>Uttar Pradesh</li>
            <li>Gujarat</li>
            <li>Tamil Nadu</li>
            <li>Rajasthan</li>
            <li>Karnataka</li>
            <li>Madhya Pradesh</li>
            <li>Kerala</li>
            <li>Id store</li>
          </ul>
        </div>

        {/* Math Topics */}
        <div>
          <h3 className="text-lg font-bold mb-2">Math</h3>
          <ul className="space-y-1">
            <li>Numbers and Operations</li>
            <li>Geometry</li>
            <li>Logic and Patterns</li>
            <li>Problem Solving</li>
            <li>Measurement and Data</li>
            <li>Attention and Memory</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li>Phone: +91-8065408088</li>
            <li>Mon-Sat: 12:30-20:30</li>
          </ul>
        </div>

        {/* Additional Info */}
        <div>
          <p className="mb-2">6 RAFFLES QUAY #14-06 SINGAPORE (048580)</p>
          <div className="flex justify-center md:justify-start space-x-2">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Children’s Privacy Policy</a> | <a href="mailto: ind.service@cretaClassName.com" className="hover:underline">Email</a>
          </div>
          <div className="mt-4 flex justify-center md:justify-start">
            <img src="https://via.placeholder.com/40" alt="WhatsApp" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AlphabetFunFooter;
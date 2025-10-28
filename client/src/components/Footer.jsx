import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 px-4">



        {/* Contacts */}
        <div>
          <h2 className="font-bold text-lg mb-2">CONTACTS</h2>
          <ul className="space-y-1 text-sm">
            <li>CALL: (+265) 991 690 867</li>
            <li>EMAIL: tech-corner@gmail.com</li>
            <li>LOCATION: Zomba, Malawi</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tech-Corner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

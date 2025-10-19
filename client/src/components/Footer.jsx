import React from "react";

const Vasco = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 px-4">
        {/* Useful Links */}
        <div>
          <h2 className="font-bold text-lg mb-2">USEFUL LINKS</h2>
          <ul className="space-y-1">
            <li><a href="/HomePage" className="hover:text-blue-600">Home</a></li>
            <li><a href="/Contacts" className="hover:text-blue-600">Contacts</a></li>
            <li><a href="/About" className="hover:text-blue-600">About</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-bold text-lg mb-2">NEWSLETTER</h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="border border-gray-400 rounded-2xl p-2 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="mt-2 text-sm text-gray-500">The only trusted tech company</p>
        </div>

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

export default Vasco;

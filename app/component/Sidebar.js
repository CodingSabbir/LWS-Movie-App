import React from 'react';

const Sidebar = () => {
    return (
        <div>
             <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="space-y-4  border-gray-200 pb-6 text-sm font-medium text-gray-900">
              <li className="bg-[#cffafe] p-2 rounded-md font-bold">
                <a href="#">Totes</a>
              </li>
              <li className="font-bold">
                <a href="#">Backpacks</a>
              </li>
              <li className="font-bold">
                <a href="#">Travel Bags</a>
              </li>
              <li className="font-bold">
                <a href="#">Hip Bags</a>
              </li>
              <li className="font-bold">
                <a href="#">Laptop Sleeves</a>
              </li>
            </ul>
            
           
          
          </form>
        </div>
    );
};

export default Sidebar;
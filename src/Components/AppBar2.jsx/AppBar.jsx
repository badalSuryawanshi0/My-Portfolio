import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', path: '/home'},
  { name: 'Contact', path: '/contact' },
];

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);  //for hamburgur  menu below MD
  const [activeItem, setActiveItem] = useState('Home'); //use check which section is open and highlight them
  const [isScrolled, setIsScrolled] = useState(false);  // as name suggest check whether scrolled or not

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <span className={`text-xl font-bold  transition-colors duration-300  ${
                isScrolled ? 'text-indigo-600' : 'text-white'
              }`}>
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => {
                      handleItemClick(item.name); 
                      
                    }}
                    className={`flex items-center  mx-3 rounded-md text-sm font-medium transition-colors duration-700 ${
                      activeItem === item.name
                        ? 'text-indigo-600'
                        : isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
                    }`}
                  >
                    <Link
                            key={item.name}
                            to={item.path}
                            
                            role="menuitem"
                          >
                            {item.name}
                          </Link>
                    
                  </button>
                
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3  rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-gray-400'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>




      
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute right-0 rounded-xl mt-1 bg-white  md:hidden">
          <div className="    px-1  pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setIsOpen(!isOpen)
                    handleItemClick(item.name);
                  
                  
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                    activeItem === item.name
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                 {item.name}
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

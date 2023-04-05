import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full  shadow-xl py-4 bg-[#99CDA9] fixed top-0">
      <NavLink to={'/'}>
        <h1 className="text-3xl font-bold text-center">TechTrends⚡</h1>
      </NavLink>
    </div>
  );
};

export default Header;

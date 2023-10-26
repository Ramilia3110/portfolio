import React from "react";
import { FiCode } from "react-icons/fi"; // Replace with your preferred icon

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <FiCode size={24} /> {/* Replace with your preferred icon */}
      <span className="text-xl font-bold">Your Logo</span>
    </div>
  );
};

export default Logo;

import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end gap-8 max-w-lvw p-8">
      <ul className="flex flex-row gap-8 p-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;

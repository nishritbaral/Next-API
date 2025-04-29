import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end gap-8 max-w-lvw p-8">
      <ul className="flex flex-row gap-8 p-4">
        <Link href="/home">
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-28 flex items-center justify-around bg-yellow-500">
      <Link to="/">
        <h1 className="font-bold text-2xl">Github Api</h1>
        <img
          className="w-12 h-12 m-auto rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFSIO_dsJJiOX3Sntwxpw6lUIJKI0ueBlRpcQ3q57xVOw4-bCAQ2eX0v_5v2sf5CIiNA&usqp=CAU"
          alt="Github"
        />
      </Link>
    </header>
  );
};

export default Header;

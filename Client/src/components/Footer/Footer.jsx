import React from "react";
const Footer = () => {
  return (
    <div className="absolute text-sm text-gray-200 bottom-0 left-0 w-full p-1 text-center">
      {" "}
      © {new Date().getFullYear()} Team Airavat.

    </div>
  );
};
export default Footer;

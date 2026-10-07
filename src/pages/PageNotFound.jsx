import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function PageNotFound() {
  return (
    <div className="min-h-[calc(100vh-135px)] flex flex-col items-center justify-center text-center">


      <img
        src="https://png.pngtree.com/png-clipart/20210704/original/pngtree-error-404-page-not-found-website-png-image_6501259.jpg"
        className="w-80 h-80 object-contain"/>

      <h1 className="text-3xl font-bold text-gray-700 mt-4">
        Page Not Found
      </h1>

      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

    </div>
  );
}

export default PageNotFound;
import React from "react";
import { Link } from "react-router-dom";

const Admin = ({ navigateHome }) => {
  return (
    <div className="text-center mt-20 ">
      {/* <h1 className='text-3xl border border-black w-full mx-auto '>Admin Panal</h1> */}
      <div className=" flex flex-wrap ml-20 ">
        <Link to="/add">
          <button className="p-5 ml-5 mt-3 bg-red-600 text-red-300 font-bold">
            Add Questions
          </button>
        </Link>
        <Link to="/delete">
          <button className="p-5 ml-5 mt-3 bg-red-600 text-red-300 font-bold">
            Delete Questions
          </button>
        </Link>
        <button
          onClick={navigateHome}
          className="bg-white text-black border font-bold text-2xl px-4 ml-5"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Admin;

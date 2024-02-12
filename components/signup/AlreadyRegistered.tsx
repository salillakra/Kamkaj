import React from "react";
import Link from "next/link";

export const AlreadyRegistered = () => {
  return (
    <div className="">
      {" "}
      <div className="flex items-center mt-4 mb-4 justify-center">
        <div className="border-t text-white w-32"></div>
        <div className="mx-4 text-gray-500 text-sm">Already a user?</div>
        <div className="border-t text-white w-32"></div>
      </div>
      <div className="text-center space-x-1">
        <span className="text-gray-400 text-sm ">Click here </span>
        <Link
          href="/login"
          className="text-primary text-sm underline-offset-4 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">Job Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
      </div>
    </nav>
  );
}
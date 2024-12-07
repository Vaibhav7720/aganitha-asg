/* eslint-disable react/prop-types */
import { CloudSun } from "lucide-react";

const Navbar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("search");
    onSearch(input.value);
    input.value = "";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <CloudSun className="h-8 w-8 text-white mr-2" />
          <h1 className="text-white text-2xl font-bold">SkyCast</h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-96">
          <input
            type="text"
            name="search"
            placeholder="Search location..."
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

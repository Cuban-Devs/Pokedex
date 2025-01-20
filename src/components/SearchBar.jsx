import { FaSearch } from "react-icons/fa"

export function SearchBar() {
  return (
    <div className="text-xs bg-white bg-opacity-10 px-4 py-2 rounded-full flex items-center">
      
      <div className="mr-3">
        <FaSearch className="text-gray-500" />
      </div>

      <input
        type="text"
        className="bg-transparent text-white flex-grow"
        placeholder="Search Pokémon..."
      />
    </div>
  )
}
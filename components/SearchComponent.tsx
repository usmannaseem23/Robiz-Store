
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      // Perform search action here
      console.log('Searching for:', query);
      // Example: Fetch data from an API or filter a list
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto mt-5">
      <input
        type="text"
        placeholder="Search Results"
        value={query}
        onChange={handleInputChange}
        className="border border-gray-300 text-lg p-3 bg-myWhite rounded-l-lg outline-none w-full sm:w-auto"
      />
      <button
        onClick={handleSearch}
        className="bg-myBlackHead hover:bg-myBlackHead/80 text-white p-3 rounded-r-lg flex items-center justify-center h-full sm:h-12"
      >
        <CiSearch className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>
    </div>
  );
}

export default SearchComponent;

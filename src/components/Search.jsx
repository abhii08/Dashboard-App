import React from 'react';
import { useRecoilState } from 'recoil';
import { searchState } from '../state/atoms';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);

  return (
    <div className="mb-6">
      <div className="relative max-w-md mx-auto">
        <AiOutlineSearch className="absolute left-3 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search anything..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[500px] h-8 pl-10 pr-20 py-2 border border-blue-300 rounded-md bg-sky-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Search;

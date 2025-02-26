const SearchBar = () => {
  return (
    <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full  w-[255px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-[#718EBF]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M9 17A8 8 0 109 1a8 8 0 000 16z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search for something"
        className="bg-transparent outline-none text-gray-400 placeholder-[#8BA3CB] w-full"
      />
    </div>
  )
}

export default SearchBar

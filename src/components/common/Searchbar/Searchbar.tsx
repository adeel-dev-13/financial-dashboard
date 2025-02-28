const SearchBar = ({ width }: { width: string }) => {
  return (
    <div
      className={`flex gap-2 w-full items-center bg-gray-100 px-4 py-2 rounded-full max-w-[${width}]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-grey"
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
        className={`bg-transparent outline-none text-[15px] font-[400] placeholder-placeholder w-full max-w-[${width}] mind-w-[${width}]`}
      />
    </div>
  )
}

export default SearchBar

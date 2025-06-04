
function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M9 15L12 9L15 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              d="M9 18H15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-800">AI Interview</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Start Session
        </button>
        <button className="rounded-md border border-blue-500 px-4 py-2 font-medium text-blue-500 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
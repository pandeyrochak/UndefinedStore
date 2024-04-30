const LoadingUI = () => {
  return (
    <div className="container-center flex items-center gap-4 justify-center">
      <svg
        className="animate-spin h-8 w-8 mr-3 text-cyan-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.5"></path>
      </svg>
      <span className="text-2xl">Loading </span>
    </div>
  )
}

export default LoadingUI

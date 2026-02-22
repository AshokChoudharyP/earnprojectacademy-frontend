const Loader = ({ fullScreen = false }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "min-h-screen" : "py-10"
      }`}
    >
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Loader;
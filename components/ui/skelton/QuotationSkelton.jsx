function QuotationSkelton() {
  return (
    <div className="container sm:my-12 mx-auto bg-slate-200 sm:shadow-lg rounded-md px-6 py-10 animate-pulse">
      <div className="flex flex-col py-1">
        <div className="h-12 bg-gray-300 rounded w-96 mx-auto mb-16"></div>
        <div className="flex items-center gap-x-12 w-full">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
          <div className="h-8 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="flex items-center gap-x-12 w-full mt-8">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
          <div className="h-8 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="h-8 bg-gray-300 rounded mt-4"></div>
      </div>
      <div className="flex flex-col space-y-4 py-1 mt-16">
        <div className="flex items-center gap-x-12 w-full">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
          <div className="h-8 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default QuotationSkelton;

export const SkeletonRestaurantItem = () => {
  return (
    <div className="w-auto h-auto bg-white space-y-2 animate-pulse">
      <div className="w-auto h-auto bg-white space-y-2 ">
        <div className="w-full h-44 object-cover bg-slate-400"></div>

        <div className="bg-gray-200 h-4 w-40 rounded"></div>
        <div className="flex items-center">
          <div className="bg-gray-200 h-4 w-40 rounded"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-gray-200 h-4 w-10 rounded"></div>

          <div className="bg-gray-200 h-4 w-10 rounded"></div>
        </div>
        <button className="w-full mt-3 bg-blue-900 text-center p-1">
          <div className="centered bg-gray-200 h-4 w-10 rounded"></div>
        </button>
      </div>
    </div>
  );
};

export const SkeletonDetail = () => {
  return (
    <div className="w-auto h-auto bg-white space-y-2 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:w-full lg:h-full h-80 w-full object-cover bg-slate-500"></div>
        <div className="space-y-4 p-4 md:p-7 lg:p-10 overflow-y-auto">
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 h-4 w-10 rounded"></div>

            <div className="bg-gray-200 h-4 w-40 rounded"></div>
          </div>
          <div className="space-y-2 border-b py-3">
            <div className="bg-gray-200 h-4 w-40 rounded"></div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 h-4 w-10 rounded"></div>
              <div className="bg-gray-200 h-4 w-10 rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">Review</h1>
            <div className="border p-4 rounded-md">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full mr-3 bg-slate-500"></div>
                <div>
                  <div className="bg-gray-200 h-4 w-40 rounded"></div>

                  <div className="bg-gray-200 h-4 w-40 rounded"></div>
                </div>
              </div>
              <div className="bg-gray-200 h-4 w-40 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

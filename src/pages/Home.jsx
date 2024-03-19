const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-red-400 gap-5 p-5">
        <div className="flex flex-col w-full h-full bg-blue-500 relative">
          <div className="absolute w-1/2 h-1/2 bg-orange-300 top-0 left-0"></div>
          <div className="absolute w-3/4 h-3/4 bg-red-300 bottom-0 right-0"></div>
        </div>
        <div className="w-full h-full bg-blue-500"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full h-full bg-red-400 p-5 md:py-5 md:px-40">
        {/* card1 */}
        <div className="flex flex-col items-center w-full h-80 ">
          <div className="w-full h-2/3 bg-orange-300"></div>
          <div className="w-3/4 h-1/3 bg-white -mt-10 hover:-mt-40 hover:h-2/3"></div>
        </div>
        {/* card2 */}
        <div className="flex flex-col items-center w-full h-80 ">
          <div className="w-full h-2/3 bg-orange-300"></div>
          <div className="w-3/4 h-1/3 bg-white -mt-10 hover:-mt-40 hover:h-2/3"></div>
        </div>
        {/* card3 */}
        <div className="flex flex-col items-center w-full h-80 ">
          <div className="w-full h-2/3 bg-orange-300"></div>
          <div className="w-3/4 h-1/3 bg-white -mt-10 hover:-mt-40 hover:h-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen bg-red-400 p-5 gap-5">
        <div className="flex flex-col w-full h-1/4 bg-blue-500"></div>
        <div className="flex flex-col w-full h-3/4 bg-blue-500 gap-5 md:flex-row md:p-5">
          <div className="flex flex-col w-full h-full bg-orange-300 gap-5 md:w-3/5">
            <div className="flex flex-row w-full h-1/5 bg-white"></div>
            <div className="flex flex-row w-full h-4/5 bg-white"></div>
          </div>
          <div className="flex flex-col w-full h-full bg-orange-300 md:w-2/5"></div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen bg-red-400 p-5 gap-5">
        <div className="flex flex-col w-full h-1/4 bg-blue-500"></div>
        <div className="flex flex-col w-full h-3/4 bg-blue-500 gap-5 md:flex-row md:p-5 ">
          <div className="flex flex-col w-full h-full bg-white">
            <div className="flex flex-col bg-orange-300 w-full h-5/6"></div>
          </div>
          <div className="flex flex-col w-full h-full bg-white">
            <div className="flex flex-col bg-orange-300 w-full h-5/6"></div>
          </div>
          <div className="flex flex-col w-full h-full bg-white">
            <div className="flex flex-col bg-orange-300 w-full h-5/6"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-fit bg-red-400 p-5 gap-5">
        <div className="flex flex-col w-full h-40 bg-blue-500"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full h-fit p-5 gap-5 md:px-40">
          {/* card1 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card2 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card3 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card4 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card5 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card6 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card7 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card8 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card9 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card10 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card11 */}
          <div className="w-full h-80 bg-blue-500"></div>
          {/* card12 */}
          <div className="w-full h-80 bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

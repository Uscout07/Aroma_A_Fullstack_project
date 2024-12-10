

export default function Last() {
  return (
    <div className=" relative flex flex-col justify-center items-center max-lg:mb-10">
    <section className="text-purple-950 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4 text-purple-950">
            Join our mailing list for updates and offers!
          </h1>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 sm:items-end items-start">
          <div className="relative font-cinzel flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-purple-950"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative flex-grow w-full">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-purple-950"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-purple-900 font-cinzel font-bold py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
    <img className="md:w-1/2 w-3/4 h-1/2 drop-shadow-2xl max-md:pb-5" src='./assets/LastSecimage.png'/>
    </div>
   
  )
}

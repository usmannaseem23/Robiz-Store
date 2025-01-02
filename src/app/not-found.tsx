import { CiSearch } from "react-icons/ci";
 

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full h-[80vh] place-items-center  bg-myWhite px-6 py-24 lg:mb-8 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* <p className="text-base font-semibold text-indigo-600"></p> */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-myBlackHead sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-6 text-base leading-7 text-myBlackPara">
            {" "}
            Please check the URL or return to the homepage.
          </p>
                
          <div className="flex justify-center items-center max-w-md mx-auto mt-6">
            <input
              type="text"
              placeholder="Search Results"
              className="border border-myBlackPara/20 text-lg p-3 bg-myWhite rounded-l-lg outline-none"
            />
            <button  className="bg-myBlackHead hover:bg-myBlackHead/80 text-white p-3 rounded-r-lg flex items-center justify-center h-full">
              <CiSearch className="h-8 w-9" />
            </button>
          </div>

          <p className="mt-10 text-myBlackPara">Or</p>

          <div className="mt-10 flex items-center justify-center gap-x-2">
            <a
              href="/"
              className="rounded-md bg-myBlackHead mx-0 px-3.5 py-2.5 text-sm font-semibold text-myWhite shadow-sm hover:bg-transparent hover:text-myBlackHead duration-300 focus-visible:outline focus-visible:outline-2 "
            >
              Go back home
            </a>
            <a
              href="/contact"
              className="text-sm mx-0 font-semibold px-3.5 py-2.5  text-myBlackHead hover:text-myWhite hover:bg-myBlackHead duration-300"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

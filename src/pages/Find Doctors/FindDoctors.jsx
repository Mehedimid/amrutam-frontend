import { IoLocation } from "react-icons/io5";

const FindDoctors = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <div className="bg-[#EAF2EA] p-6 md:p-10">
        <h1 className="text-center text-xl md:text-3xl font-semibold">
          Find expert Doctors for an In-clinic session here{" "}
        </h1>
        <div className="mt-5 flex flex-wrap gap-7 justify-center items-center">
          {/* select location start  */}
          <div className="flex justify-center items-center">
            <IoLocation className="w-6 md:w-10 h-6 md:h-10 text-primary mr-2" />
            <select className="select border border-primary w-full max-w-xs">
              <option disabled selected>
                Select Location
              </option>
              <option>Auto</option>
              <option>Dark mode</option>
              <option>Light mode</option>
            </select>
          </div>
          {/* select location ends  */}

         {/* search bar  */}
          <div>
            <label className="input border border-primary flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          {/* search bar end  */}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctors;

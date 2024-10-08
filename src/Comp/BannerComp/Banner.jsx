import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Banner = ({ book }) => {
  const { coverImage } = book;
  return (
    <div className="flex justify-around items-center carousel-item w-full animate-fade-left animate-once animate-duration-600 animate-delay-400">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl lg:text-3xl font-bold w-72">
          Books to freshen up your bookshelf
        </h1>
        <div className=" mt-4">
          <Link
            to={"/listed_books"}
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-success transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-success group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              View The List
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img src={coverImage} alt="" className="w-[200px] lg:w-[300px] md:w-[200px]"/>
      </div>
    </div>
  );
};

Banner.propTypes = {
  book: PropTypes.object,
};

export default Banner;

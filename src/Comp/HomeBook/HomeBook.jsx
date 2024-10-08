import PropTypes from "prop-types";
import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeBook = ({ book }) => {
  const { name, coverImage, genre, author, tags, ratings, isbn13 } = book;
  return (
    <div>
      <Link to={`/book/${isbn13}`}>
        <div className="card bg-base-100 w-72 lg:w-96 h-[26rem] shadow-xl animate-flip-up  animate-once animate-duration-500 animate-delay-200">
          <figure className="px-10 pt-10">
            <img
              src={coverImage}
              alt={name}
              className="rounded-xl min-h-[200px] max-h-[201px]"
            />
          </figure>
          <div className="card-body p-6 text-left">
            <ul className="flex gap-1 mb-2">
              {tags.slice(1, 3).map((element, i) => (
                <li key={i}>
                  <button className="tags lg:hidden">
                    {element.slice(0, 9)}
                  </button>
                  <button className="tags hidden lg:inline">{element}</button>
                  {/* <button className="tags">{element.slice(0,9)}</button> */}
                </li>
              ))}
            </ul>
            <h1 className="text-left font-bold text-xl">{name}</h1>
            <p>By: {author}</p>
            <hr className="border-dashed" />
            <div className="flex justify-between">
              <ul className="flex gap-1">
                {genre.slice(1, 2).map((element, i) => (
                  <li key={i}>
                    <button className="">{element}</button>
                  </li>
                ))}
              </ul>
              <div>
                <p className="flex gap-1 items-center">
                  <span>{ratings}</span>
                  <IoStarOutline />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

HomeBook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default HomeBook;

import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline, IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Book = ({ book, addToWatchListBook, isWatchListBook }) => {
  const {
    name,
    author,
    tags,
    coverImage,
    publicationYear,
    publisher,
    totalPages,
    genre,
    ratings,
    isbn13,
  } = book;
  return (
    <div
      className={` flex flex-col md:flex-row items-center gap-4 border rounded-2xl p-9 bg-[#1d232a] drop-shadow-2xl`}
    >
      <div className="border w-96 h-96 rounded-2xl flex justify-around items-center">
        <img width={"200px"} src={coverImage} alt="" />
      </div>
      <div className="grid gap-3 md:p-9">
        <h1 className="text-3xl font-bold text-black">{name}</h1>
        <h2>By: {author}</h2>
        <p className="">
          <span className="text-black font-bold">Tags: </span>
          <span>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="hover:underline hover:underline-offset-4"
              >
                #{tag}
              </span>
            ))}
          </span>
        </p>
        <p className="flex items-center gap-1">
          <CiLocationOn />
          <span> Year of Publishing: {publicationYear}</span>
        </p>
        <p className="flex items-center gap-8">
          <span className="flex items-center gap-1">
            <IoPeopleOutline />
            <span>Publisher:{publisher}</span>
          </span>
          <span className="flex items-center gap-1">
            <IoBookOutline />
            <span>Pages:{totalPages}</span>
          </span>
        </p>
        <hr className="border-dashed" />
        <p className="flex gap-1">
          <span>Genres:</span>
          <span className="flex gap-1">
            {genre.map((genreName, i) => (
              <Link
                to={genreName}
                key={i}
                className="underline underline-offset-4 hover:underline-offset-8"
              >
                {genreName}
              </Link>
            ))}
          </span>
        </p>
        <div className="flex gap-2">
          <button className="btn rounded-3xl bg-amber-300 text-amber-600">
            Rating: {ratings}
          </button>
          <Link to={`/book/${isbn13}`}>
            <button className="rounded-3xl btn btn-success text-white">
              View Details
            </button>
          </Link>
          <Link>
            <button
              onClick={() => {
                addToWatchListBook(book, isWatchListBook, isWatchListBook);
              }}
              className={`btn rounded-3xl text-white ${
                isWatchListBook ? "btn-error" : "btn-info"
              }`}
            >
              {isWatchListBook ? "Remove from Wantlist" : "Add to Wantlist"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  addToWatchListBook: PropTypes.func,
  isWatchListBook: PropTypes.bool,
  isWatchListBookBtn: PropTypes.bool,
  watchListBookObj: PropTypes.array,
  NO: PropTypes.number,
};

export default Book;

import PropTypes from "prop-types";
import Book from "./Book";

const BookListType = ({
  books,
  isWatchListBook,
  setIsWatchListBook,
  watchListBookObj,
  addToWatchListBook,
}) => {
  return (
    <div className="relative">
      <div className="flex bg-[#1d232a] mb-10 sticky top-[70px] z-50">
        <p
          onClick={() => setIsWatchListBook(false)}
          className={` ${
            isWatchListBook ? "border-b" : "border border-b-0"
          } rounded-t-xl p-2 w-[100px]`}
        >
          Books
          <sup className="bg-slate-500 w-6 p-1 rounded-full">
            {books.length}
          </sup>
        </p>
        <div
          className={` ${
            isWatchListBook ? "border border-b-0" : "border-b"
          } rounded-t-xl p-2 `}
        >
          <p onClick={() => setIsWatchListBook(true)} className="w-[140px]">
            Watchlist Books
            <sup className="bg-slate-500 w-6 p-1 rounded-full">
              {watchListBookObj.length}
            </sup>
          </p>
        </div>
        <div className=" border-b w-full "></div>
      </div>
      <div className={`relative grid gap-10 ${isWatchListBook ? "hidden" : ""} `}>
        {books.map((book, i) => (
          <Book
            key={`${i}${book.isbn13}`}
            NO={i}
            book={book}
            addToWatchListBook={addToWatchListBook}
            isWatchListBook={isWatchListBook}
            watchListBookObj={watchListBookObj}
          />
        ))}
      </div>
      <div className={`relative grid gap-10 ${isWatchListBook ? "" : "hidden"} `}>
        {watchListBookObj.map((book,i) => (
          <Book
            key={`WatchList${book.isbn13}`}
            NO={i}
            book={book}
            addToWatchListBook={addToWatchListBook}
            isWatchListBook={isWatchListBook}
            watchListBookObj={watchListBookObj}
          />
        ))}
      </div>
    </div>
  );
};

BookListType.propTypes = {
  isWatchListBook: PropTypes.bool.isRequired,
  setIsWatchListBook: PropTypes.func.isRequired,
  addToWatchListBook: PropTypes.func.isRequired,
  books: PropTypes.array,
  watchListBookObj: PropTypes.array,
};

export default BookListType;

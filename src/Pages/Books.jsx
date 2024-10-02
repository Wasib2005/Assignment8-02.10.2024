import { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import BookListType from "../Comp/BookList/BookListType";
import { saveToLS, takeFromLS } from "../CommonFile/LocalStorage";

const Books = () => {
  const booksData = useLoaderData();

  const [sortValue, setSortValue] = useState(1);

  const [books, setBooks] = useState(booksData);
  const [watchListBookId, setWatchListBookId] = useState([]);
  const [watchListBookObj, setWatchListBookObj] = useState([]);

  const [detailsOn, setdetailsOn] = useState(false);
  const [isWatchListBook, setIsWatchListBook] = useState(false);
  saveToLS("watchListBookId", watchListBookId);

  const addToWatchListBook = (book, isWatchListBook) => {
    const isInWatchListObj = watchListBookObj.some(
      (element) => element.isbn13 === book.isbn13
    );
    if (isWatchListBook) {
      localStorage.removeItem("watchListBookId");
    }
    if (!isInWatchListObj) {
      setWatchListBookId([...watchListBookId, book.isbn13]);
      setWatchListBookObj([...watchListBookObj, book]);
    } else if (isWatchListBook) {
      setWatchListBookId((prevIds) =>
        prevIds.filter((element) => element !== book.isbn13)
      );
      setWatchListBookObj((prevBooks) =>
        prevBooks.filter((element) => element.isbn13 !== book.isbn13)
      );
    } else {
      console.log("add");
    }
  };

  useEffect(() => {
    setWatchListBookId(takeFromLS("watchListBookId"));
  }, []);

  useEffect(() => {
    const storedWatchList = takeFromLS("watchListBookId");
    if (storedWatchList) {
      setWatchListBookId(storedWatchList);
      const tempBooks = books.filter((book) =>
        storedWatchList.includes(book.isbn13)
      );
      setWatchListBookObj(tempBooks);
    }
  }, [books]);

  useEffect(() => {
    if (sortValue === 1) {
      setBooks(books);

      setdetailsOn(false);
    } else if (sortValue === 2) {
      const tempBook = books.sort((bookA, bookB) =>
        bookA.name.localeCompare(bookB.name)
      );
      setBooks(tempBook);
      setdetailsOn(false);
    } else if (sortValue === 3) {
      const tempBook = books.sort(
        (bookA, bookB) => bookB.ratings - bookA.ratings
      );
      setBooks(tempBook);
      setdetailsOn(false);
    } else if (sortValue === 4) {
      const tempBook = books.sort(
        (bookA, bookB) => bookB.totalPages - bookA.totalPages
      );
      setBooks(tempBook);
      setdetailsOn(false);
    } else if (sortValue === 5) {
      const tempBook = books.sort(
        (bookA, bookB) => bookB.publicationYear - bookA.publicationYear
      );
      setBooks(tempBook);
      setdetailsOn(false);
    }
  }, [sortValue]);
  return (
    <div className="">
      <div className="mb-28">
        <h1 className="text-3xl font-bold h-20 flex justify-around items-center">
          Books
        </h1>
        <div className="flex  justify-around">
          <div className="text-center absolute bg-slate-300 text-black rounded-2xl z-[100]  ">
            <button
              onClick={() => setdetailsOn(!detailsOn)}
              className="flex text-white text-xl items-center btn bg-green-700 rounded-xl w-48 "
            >
              {detailsOn ? <IoIosArrowUp /> : <IoIosArrowDown />} Sort By
            </button>
            <ul className={detailsOn ? "" : "hidden"}>
              <li
                onClick={() => setSortValue(1)}
                className=" mt-2 p-2 hover:opacity-70 hover:bg-slate-600 hover:rounded-xl"
              >
                <Link className="flex items-center gap-1 justify-center">
                  {sortValue === 1 ? <GiCheckMark /> : <></>}
                  <span>Default</span>
                </Link>
              </li>
              <li
                onClick={() => setSortValue(2)}
                className=" mt-2 p-2 hover:opacity-70 hover:bg-slate-600 hover:rounded-xl"
              >
                <Link className="flex items-center gap-1 justify-center">
                  {sortValue === 2 ? <GiCheckMark /> : <></>}
                  <span>Name</span>
                </Link>
              </li>
              <li
                onClick={() => setSortValue(3)}
                className=" mt-2 p-2 hover:opacity-70 hover:bg-slate-600 hover:rounded-xl"
              >
                <Link className="flex items-center gap-1 justify-center">
                  {sortValue === 3 ? <GiCheckMark /> : <></>}
                  <span>Rating</span>
                </Link>
              </li>
              <li
                onClick={() => setSortValue(4)}
                className="mt-2 p-2 hover:opacity-70 hover:bg-slate-600 hover:rounded-xl"
              >
                <Link className="flex items-center gap-1 justify-center">
                  {sortValue === 4 ? <GiCheckMark /> : <></>} Numberpages
                </Link>
              </li>
              <li
                onClick={() => setSortValue(5)}
                className="mt-2 p-2 hover:opacity-70 hover:bg-slate-600 hover:rounded-xl"
              >
                <Link className="flex items-center gap-1 justify-center">
                  {sortValue === 5 ? <GiCheckMark /> : <></>}Publication Year
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <BookListType
          isWatchListBook={isWatchListBook}
          setIsWatchListBook={setIsWatchListBook}
          books={books}
          watchListBookObj={watchListBookObj}
          addToWatchListBook={addToWatchListBook}
        />
      </div>
    </div>
  );
};

export default Books;

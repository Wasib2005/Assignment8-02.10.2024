import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveToLS, takeFromLS } from "../CommonFile/LocalStorage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function BookDetails() {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((element) => {
    // Convert both values to strings for consistent comparison
    return String(element.isbn13) === String(bookId);
  });
  const {
    name,
    author,
    tags,
    ratings,
    totalPages,
    publicationYear,
    publisher,
    overview,
    coverImage,
    language,
    genre,
    summary,
    isbn13,
    numberOfEditions,
  } = book;

  const [watchListBookId, setWatchListBookId] = useState([]);
  const [readBookID, setReadBookID] = useState([]);

  const WishlistBtnHandle = () => {
    if (!watchListBookId.includes(isbn13) && !readBookID.includes(isbn13)) {
      const tempWatchList = [...watchListBookId, isbn13];
      setWatchListBookId(tempWatchList);
      saveToLS("watchListBookId", tempWatchList);
      toast.success(`${name} has been added in wishlist`);
    } else if (readBookID.includes(isbn13)) {
      toast.warn(`${name} has been Already added in Read Books List`);
    } else if (watchListBookId.includes(isbn13)) {
      toast.error(`${name} has been Already added in wishlist`);
    }
  };
  const ReadBtnHandle = () => {
    if (!readBookID.includes(isbn13)) {
      // Book not in list, add it
      const tempReadList = [...readBookID, isbn13];
      setReadBookID(tempReadList);
      saveToLS("readBookID", tempReadList);
      toast.success(`${name} has been added to the Read Books List`);
      const tempWishList = watchListBookId.filter((id) => id !== isbn13);
      setWatchListBookId(tempWishList);
      saveToLS("watchListBookId", tempWishList);
      if (tempWishList.length===0){
        localStorage.removeItem("watchListBookId")
      }
    } else {
      // Book is in the list, remove it
      const tempReadList = readBookID.filter((id) => id !== isbn13);
      setReadBookID(tempReadList);
      saveToLS("readBookID", tempReadList);
      toast.error(`${name} has been removed from the Read Books List`);
      if (tempReadList.length === 0) {
        localStorage.removeItem("readBookID");
      }
    }
  };

  useEffect(() => {
    setWatchListBookId(takeFromLS("watchListBookId"));
    setReadBookID(takeFromLS("readBookID"));
  }, []);

  return (
    <div className="md:flex md:gap-10 items-center">
      <div>
        <img className=" rounded-2xl" src={coverImage} alt={name} />
      </div>
      <div className="md:w-[55%] grid gap-1 md:gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black">
          {name}
        </h1>
        <p>By : {author}</p>
        <hr />
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
        <hr />

        <p>
          <span className="text-black  font-bold">Overview : </span> {overview}
        </p>
        <p>
          <span className="text-black  font-bold">Summary : </span> {summary}
        </p>
        <p className="">
          <span className="text-black font-bold ">Tags: </span>
          <span className="flex gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="hover:underline hover:underline-offset-4 tags"
              >
                #{tag}
              </span>
            ))}
          </span>
        </p>
        <hr />
        <div className=" flex justify-around">
          <div className="grid gap-1">
            <p>
              Number of Pages :{" "}
              <span className="text-black font-bold">{totalPages}</span>
            </p>
            <p>
              Publisher :{" "}
              <span className="text-black font-bold">{publisher}</span>
            </p>
            <p>
              Year of Publication :{" "}
              <span className="text-black font-bold">{publicationYear}</span>
            </p>
            <p>
              Ratings : <span className="text-black font-bold">{ratings}</span>
            </p>
          </div>
          <div className="grid gap-1">
            <p>
              Number Of Editions:{" "}
              <span className="font-bold text-black">{numberOfEditions}</span>
            </p>
            <p>
              Language: <span className="font-bold text-black">{language}</span>
            </p>
            <p>
              Isbn13: <span className="font-bold text-black">{isbn13}</span>
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <Link to={-1}>
            <button className="btn btn-outline btn-info">Go back</button>
          </Link>
          <Link onClick={() => ReadBtnHandle()}>
            <button
              className={`btn btn-outline ${
                readBookID.includes(isbn13) ? "btn-error" : "btn-success"
              }`}
            >
              {readBookID.includes(isbn13) ? "Unread" : "Read"}
            </button>
          </Link>
          <Link onClick={() => WishlistBtnHandle()}>
            <button className="btn  btn-info text-white">Wishlist</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;

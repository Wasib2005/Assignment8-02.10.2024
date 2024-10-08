import PropTypes from "prop-types";
import HomeBook from "./HomeBook";
const HomeBooks = ({ bookData: booksData }) => {
  return (
    <div className="mt-40 text-center">
      <h1 className="text-3xl font-bold mb-9">Books</h1>
      <div className=" grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
        {booksData.slice(14,23).map((book, i) => (
          <HomeBook book={book} key={i} />
        ))}
      </div>
    </div>
  );
};

HomeBooks.propTypes = {
  bookData: PropTypes.array.isRequired,
};

export default HomeBooks;

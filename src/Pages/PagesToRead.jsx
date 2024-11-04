import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { takeFromLS } from "../CommonFile/LocalStorage";
import { PieChart } from "@mui/x-charts";

const PagesToRead = () => {
  const books = useLoaderData();
  const [readListBookId, setReadListBookId] = useState([]);
  const [readListBookObj, setReadListBookObj] = useState([]);
  const [chartReadListBookObj, setChartReadListBookObj] = useState([]);
  const [watchListBookId, setWatchListBookId] = useState([]);
  const [watchListBookObj, setWatchListBookObj] = useState([]);
  const [chartWatchListBookObj, setChartWatchListBookObj] = useState([]);

  useEffect(() => {
    const storedReadList = takeFromLS("readBookID");
    if (storedReadList) {
      setReadListBookId(storedReadList);
      const tempBooks = books.filter((book) =>
        storedReadList.includes(book.isbn13)
      );
      setReadListBookObj(tempBooks);
    }
  }, [books]);

  useEffect(() => {
    setChartReadListBookObj(
      readListBookObj.map((book, index) => ({
        id: index,
        label: book.name,
        value: book.totalPages,
      }))
    );
  }, [readListBookObj]);

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
    setChartWatchListBookObj(
      watchListBookObj.map((book, index) => ({
        id: index,
        label: book.name,
        value: book.totalPages,
      }))
    );
  }, [watchListBookObj]);

  return (
    <div className="flex justify-center h-[100vh] border items-center">
      <div className="flex flex-col justify-center items-center">
        <PieChart
          series={[
            {
              data: chartReadListBookObj,
              innerRadius: 80,
              outerRadius: 150,
              paddingAngle: 1,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              cx: 150,
              cy: 150,
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              highlightScope: { fade: "global", highlight: "item" },
            },
          ]}
          width={400}
          height={400}
        />
        <h3 className="text-3xl">Your Read List</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <PieChart
          series={[
            {
              data: chartWatchListBookObj,
              innerRadius: 80,
              outerRadius: 150,
              paddingAngle: 1,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              cx: 150,
              cy: 150,
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              highlightScope: { fade: "global", highlight: "item" },
            },
          ]}
          width={400}
          height={400}
        />
        <h3 className="text-3xl">Your Wishlist</h3>
      </div>
    </div>
  );
};

export default PagesToRead;

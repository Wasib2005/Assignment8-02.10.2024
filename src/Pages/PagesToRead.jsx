import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { takeFromLS } from "../CommonFile/LocalStorage";
import { PieChart } from "@mui/x-charts";

const PagesToRead = () => {
  const books = useLoaderData();
  const [readListBookId, setReadListBookId] = useState([]);
  const [readListBookObj, setReadListBookObj] = useState([]);
  const [chartReadListBookObj, setChartReadListBookObj] = useState([]);

  useEffect(() => {
    setReadListBookId(takeFromLS("readBookID"));
  }, []);

  useEffect(() => {
    const storedReadList = takeFromLS("readBookID");
    if (storedReadList) {
      setReadListBookId(storedReadList);
      const tempBooks = books.filter((book) =>
        storedReadList.includes(book.isbn13)
      );
      setReadListBookObj(tempBooks);
    }
  }, []);

  useEffect(() => {
    setChartReadListBookObj(
      readListBookObj.map((book, index) => ({
        id: index,
        label: book.name,
        value: book.totalPages,
      }))
    );
  }, [readListBookObj]);

  console.log(chartReadListBookObj);

  return (
    <div className="flex justify-center h-[100vh] border items-center">
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
            highlightScope: { fade: 'global', highlight: 'item' },
          },
        ]}
        width={400}
        height={400}
      />
    </div>
  );
};

export default PagesToRead;

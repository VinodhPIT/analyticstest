import React, { useState, useEffect } from "react";
import Select from "react-select";


const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CustomerConversion = ({token}) => {

  

  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const options = years.map((year) => ({ value: year, label: year }));
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const selectedOption = { value: selectedYear, label: selectedYear };

  const handleChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  useEffect(() => {
    fetchData(selectedYear ,token);
  }, [selectedYear]);

  const renderTableRow = (title, key) => (
    <tr key={title}>
      <th className="main_col_title">{title}</th>
      {registered.map((el) => (
        <td key={el.month}>
          {el[key === "offer pending" ? "offer_pending" : key]}
        </td>
      ))}
    </tr>
  );

  const calculatePercentage = (registered, contacted, offerPending) => {
    const sum = registered + contacted + offerPending;
    return (sum / 3).toFixed(2);
  };

  const monthHeaders = months.map((month, index) => (
    <th key={index}>{month}</th>
  ));

  return (
    <div className="db_card block_bg_white">
      
    </div>
  );
};

export default CustomerConversion;

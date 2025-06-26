import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EpicDateSelector({ date, setDate }) {
  const today = new Date();

  return (
    <div className="text-white flex gap-4 font-orbitron items-center mb-6">
      <label htmlFor="datepicker" className="block mb-1 text-sm lg:text-2xl text-purple-400">📅 Select a Date:</label>
      <DatePicker
        selected={new Date(date)}
        onChange={(date) => setDate(date.toISOString().split("T")[0])}
        maxDate={today}
        dateFormat="dd/MM/yyyy"
        className="px-4 py-2 bg-gray-900 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-60 font-orbitron"
        calendarClassName="bg-black text-white border border-purple-700 rounded-md p-2 font-orbitron"
        wrapperClassName="shadow-lg"
        todayButton="Today"
        showPopperArrow={false}
      />
    </div>
  );
}
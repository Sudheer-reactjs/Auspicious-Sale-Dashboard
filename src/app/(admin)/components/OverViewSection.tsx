"use client";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { EarningsIcon, EditBid, ProjectHireIcon, ResponsesIcon, TotalBids } from "@/utils/svgicons";

export default function OverviewSection() {
  const [totalBids, setTotalBids] = useState(240); // Default value
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs()); // Allow null

  const handleSave = () => {
    setIsEditing(false); // Exit edit mode
  };

  // Define min and max dates to restrict the year range
  const maxDate = dayjs(); // Current date
  const minDate = dayjs().subtract(20, "year"); // One year in the past

  return (
    <div className="p-3 md:p-7 bg-white rounded-2xl flex items-center flex-col justify-between">
      <div className="w-full flex items-center justify-between gap-4 mb-10 flex-wrap ">
        <h3 className="text-lg font-semibold">Overview</h3>
         {/* Date Picker Filters */}
        <div className="flex items-center gap-4 max-w-[300px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
             {/* Month Picker */}  
             <DatePicker
              label="Month"
              openTo="month"
              views={["month"]}
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              minDate={minDate} // Restrict to past year
              maxDate={maxDate} // Restrict to current month
            />
            {/* Year Picker */}
            <DatePicker
              className="border-[#000] input-custom"
              label="Year"
              openTo="year"
              views={["year"]}
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              minDate={minDate} // Restrict to past year
              maxDate={maxDate} // Restrict to current year
            />
           
          </LocalizationProvider>
        </div>
      </div>

      <div className="flex items-center justify-between w-full flex-wrap gap-8">
        {/* Total Bids */}
        <div className="cursor-pointer" onClick={() => setIsEditing(true)}>
        <div className="flex items-center gap-[10px] md:gap-[20px] relative">
              {/* Edit Icon */}
              <span className="cursor-pointer absolute right-[-15px] top-[-15px]">
                <EditBid />
              </span>
              <div className="relative top-[2px]">
              <TotalBids />
              </div>
              {isEditing ? (
                <input
                  type="number"
                  value={totalBids}
                  onChange={(e) => setTotalBids(Number(e.target.value))}
                  onBlur={handleSave} // Save on blur
                  className="border border-gray-300 rounded p-1 w-[120px] min-h-[50px] text-[20px] font-RalewayBold text-[#10375C]"
                />
              ) : (
                <span className="font-RalewayBold text-[26px] md:text-[40px] text-[#10375C]">{totalBids}</span>
              )}
            </div>
            <p className="text-[#1C2329] text-[12px]">Total Bids</p>
          </div>

        {/* Number of Responses */}
        <div>
          <div className="flex items-center gap-[10px] md:gap-[20px]">
            <div className="relative top-[2px]">
                <ResponsesIcon />
             </div>
            <span className="text-[26px] md:text-[40px] font-RalewayBold text-[#10375C]">120</span>
          </div>
          <p className="text-[#1C2329] text-[12px]">No of Responses</p>
        </div>

        {/* Project Hired */}
        <div>
          <div className="flex items-center gap-[10px] md:gap-[20px]">
          <div className="relative top-[2px]">
            <ProjectHireIcon />
            </div>
            <span className="text-[26px] md:text-[40px] font-RalewayBold text-[#10375C]">120</span>
          </div>
          <p className="text-[#1C2329] text-[12px]">Project Hired</p>
        </div>

        {/* Earnings */}
        <div>
            <div className="flex items-center gap-[10px] md:gap-[20px]">
            <div className="relative top-[2px]">
           <EarningsIcon />
           </div>
           <span className="text-[26px] md:text-[40px] font-RalewayBold text-[#10375C]">$5,300</span>
          </div>
          <p className="text-[#1C2329] text-[12px]">Earnings</p>
        </div>
      </div>
 
     
    </div>
  );
}

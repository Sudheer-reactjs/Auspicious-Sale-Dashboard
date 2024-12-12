"use client";
import { DeleteIcon, EditIcon, NextLabel, PreviousLabel } from '@/utils/svgicons';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';

interface RecentProjectsProps {}

const RecentLeads: React.FC<RecentProjectsProps> = () => {
  const staticProjects = [
    { 
      _id: '1',
      clienttName: 'dddd',
      projectName: 'Project Alpha',
      projectStartDate: '2024-01-01',
      projectEndDate: '2024-06-01',
    },
    {
      _id: '2',
      clienttName: 'dddd',
      projectName: 'Project Beta',
      projectStartDate: '2024-02-01',
      projectEndDate: '2024-07-01',
    },
    { 
      _id: '3',
      clienttName: 'dddd',
      projectName: 'Project Gamma',
      projectStartDate: '2024-03-01',
      projectEndDate: '2024-08-01',
    },
    // Add more static projects as needed
  ];

  const total = staticProjects.length;
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  // Pagination Logic
  const displayedProjects = staticProjects.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (
    <>
      <div className="p-3 md:p-7 bg-white rounded-2xl flex items-center flex-col justify-between">
        <div className="w-full flex items-center justify-between gap-4 mb-10 flex-wrap">
          <h3 className="text-lg font-semibold">Overview</h3>
        </div>

        <div className="table-common overflo-custom w-full">
          <table>
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Image</th>
                <th>Name of the project</th>
                <th>Starting Date</th>
                <th>Estimated End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedProjects.length > 0 ? (
                displayedProjects.map((row) => (
                  <tr key={row._id}>
                    <td>{row._id}</td>
                    <td>
                      {row.clienttName}
                    </td>
                    <td>{row.projectName}</td>
                    <td>{row.projectStartDate}</td>
                    <td>{row.projectEndDate}</td>
                    <td>
                      <div className="flex items-center gap-[6px]">
                        <button onClick={() => alert(`Edit ${row._id}`)}>
                          <EditIcon />
                        </button>
                        <button onClick={() => alert(`Delete ${row._id}`)}>
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="w-full flex justify-center p-3 items-center"
                    colSpan={6}
                  >
                    <p className="text-center">No data found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="text-right mt-4 w-full">
          <ReactPaginate
            previousLabel={<PreviousLabel />}
            nextLabel={<NextLabel />}
            breakLabel={'...'}
            pageCount={Math.ceil(total / rowsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={'inline-flex mt-[34px] gap-1'}
            pageClassName={
              'text-[#3C3F88] border border-{#F1F1F1} bg-white rounded-full'
            }
            pageLinkClassName={
              'grid place-items-center h-10 w-10 inline-block'
            }
            activeClassName={'!bg-[#1657FF] active rounded-full text-white'}
            previousClassName={'leading-[normal]'}
            previousLinkClassName={
              'grid place-items-center h-10 w-10 inline-block border border-{#F1F1F1} bg-white rounded-full'
            }
            nextLinkClassName={
              'grid place-items-center h-10 w-10 inline-block border border-{#F1F1F1} bg-white rounded-full'
            }
            disabledClassName={'opacity-50 cursor-not-allowed'}
          />
        </div>
      </div>
    </>
  );
};

export default RecentLeads;

import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ totalPages, page, setPage, position }) {
  const classes =
    position === "top"
      ? "flex justify-center mt-[1.5rem] md:mt-0 md:ml-auto"
      : "flex";
  const pageCount = totalPages > 100 ? 100 : totalPages;
  let currentPage = page - 1
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };
  return (
    <div className={classes}>
      <ReactPaginate
        containerClassName={
          "flex items-center text-[hsla(0,0%,100%,.7)] overflow-x-auto text-[.875rem] list-none " +
          (position === "bottom" ? "m-[0_auto] md:m-[0_0_0_auto]" : "m-0")
        }
        pageClassName="mr-[0.5rem]"
        pageLinkClassName="w-[2rem] h-[2rem] hover:text-white flex justify-center items-center rounded-[8px] transition-colors duration-[.1s] no-underline outline-0 "
        disabledClassName="pointer-events-none text-[hsla(0,0%,100%,.3)] cursor-auto"
        breakClassName="mr-[0.5rem]"
        breakLinkClassName="w-[2rem] h-[2rem] hover:text-white flex justify-center items-center rounded-[8px] transition-colors duration-[.1s] no-underline outline-0"
        previousClassName="mr-[0.5rem]"
        previousLinkClassName="w-[2rem] h-[2rem] hover:text-white flex justify-center items-center rounded-[8px] transition-colors duration-[.1s] no-underline outline-0"
        nextLinkClassName="w-[2rem] h-[2rem] hover:text-white flex justify-center items-center rounded-[8px] transition-colors duration-[.1s] no-underline outline-0"
        activeLinkClassName="text-white bg-[#2d2c32] "
        previousLabel={
          <svg
            viewBox="0 0 6 10"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.35.894a.296.296 0 010 .43L1.673 5l3.675 3.675a.296.296 0 010 .43l-.467.468a.296.296 0 01-.43 0L.094 5.215a.296.296 0 010-.43L4.452.427a.296.296 0 01.43 0l.467.467z"
            ></path>
          </svg>
        }
        nextLabel={
          <svg
            viewBox="0 0 6 10"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.35 4.785a.296.296 0 010 .43L.99 9.573a.296.296 0 01-.43 0l-.467-.467a.296.296 0 010-.43L3.769 5 .094 1.325a.296.296 0 010-.43L.56.426a.296.296 0 01.43 0L5.35 4.785z"
            ></path>
          </svg>
        }
        pageCount={pageCount || 100}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
      />
    </div>
  );
}

export default Pagination;

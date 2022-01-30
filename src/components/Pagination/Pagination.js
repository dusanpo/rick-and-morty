import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Pagination({ pageCount, changePage }) {
  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        renderOnZeroPageCount={null}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Pagination;

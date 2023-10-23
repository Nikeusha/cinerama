import React from "react";
import MovieCard from "../components/MovieCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { useSearchMovieQuery } from "../redux/movieApi";

function Search() {
  const value = useLocation().state;
  const [page, setPage] = useState(1);
  const { data, isLoading, isSuccess } = useSearchMovieQuery({ value, page });
  return (
    <section className="flex flex-col flex-grow-[1] pt-[3.5rem] bg-[#16151a] xl:pt-[4.375rem] ">
      <div className="py-[3rem] px-0">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="text-center mb-[2rem] md:flex md:justify-between ">
            <h2 className="text-[1.625rem] font-semibold">
              Search results for <em>{`«${value}»`}</em>
            </h2>
            {data?.total_pages > 1 && (
              <Pagination
                totalPages={data?.total_pages}
                page={page}
                setPage={setPage}
                position={"top"}
              />
            )}
          </div>
          {isLoading && (
            <div className="h-[18rem] sm:h-[28rem] flex justify-center items-center">
              <div className="Spinner-spinner w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] "></div>
            </div>
          )}
          {isSuccess && (
            <ul className="mb-[1rem] flex flex-wrap mx-[-15px] list-none">
              {data?.results?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
          {data?.total_pages > 1 && (
            <Pagination
              totalPages={data?.total_pages}
              page={page}
              setPage={setPage}
              position={"bottom"}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;

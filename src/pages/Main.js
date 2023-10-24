import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useGetAllMoviesQuery } from "../redux/movieApi";
import Select from "react-select";
import { animatedComponents, options } from "../utils/reactSelect";
import Pagination from "../components/Pagination";

function Main() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading, isSuccess } = useGetAllMoviesQuery({ genre, page });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGenre(selectedOptions.map((option) => option.value).join(","));
    setPage(1)
  };

  const handleSelect = (selected) => {
    setSelectedOptions(selected);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedOptions([]);
    setPage(1)
    setGenre("");
  };

  console.log(data);
  return (
    <main className="flex flex-col flex-grow-[1] pt-[3.5rem] bg-[#16151a] xl:pt-[4.375rem] ">
      <div className="flex items-center min-h-[10rem] bg-[rgba(45,44,50,.5)] ">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <form
            onReset={handleReset}
            onSubmit={handleSubmit}
            className="py-[2rem] px-0 "
          >
            <div className="flex flex-wrap mx-[-15px] ">
              <div className="relative w-full px-[15px] flex-[0_0_100%] max-w-full md:flex-[0_0_50%] md:max-w-[50%] lg:flex-[0_0_33.3333333%] lg:max-w-[33.3333333%] mb-[1rem] ">
                <div id="filter">
                  <label
                    className="inline-block text-[.875rem] text-[hsla(0,0%,100%,.5)] m-[0_0_0.3rem_0.5rem] select-none "
                    htmlFor="genres"
                  >
                    Genres
                  </label>
                  <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    components={animatedComponents}
                    options={selectedOptions?.length === 3 ? [] : options}
                    placeholder="All"
                    value={selectedOptions}
                    isMulti
                    isSearchable={true}
                    onChange={handleSelect}
                    noOptionsMessage={() =>
                      selectedOptions?.length === 3
                        ? "Maximum 3 genres"
                        : "Not found"
                    }
                  />
                </div>
              </div>
              <div className="relative w-full px-[15px] mb-[1rem] self-end lg:ml-[33.33333333%] lg:flex-[0_0_33.33333333%] lg:max-w-[33.33333333%]">
                <div className="flex justify-end">
                  <button
                    type="reset"
                    disabled={selectedOptions.length === 0}
                    className="inline-block mr-[1rem] disabled:pointer-events-none disabled:opacity-[.5] text-[#16151a] bg-[#ffff4d] border border-solid border-[#ffff4d] outline-none text-[.875rem] tracking-wider py-[0.3rem] px-[1.5rem] font-semibold rounded-[4px] transition-all duration-300 hover:bg-[#16151a] hover:text-[#ffff4d] "
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={selectedOptions.length === 0}
                    className="inline-block disabled:pointer-events-none disabled:opacity-[.5] text-[#16151a] bg-[#ffff4d] border border-solid border-[#ffff4d] outline-none text-[.875rem] tracking-wider py-[0.3rem] px-[1.5rem] font-semibold rounded-[4px] transition-all duration-300 hover:bg-[#16151a] hover:text-[#ffff4d] "
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="relative py-[2rem] px-0 flex-grow-1 ">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="text-center mb-[2rem] md:flex md:justify-between ">
            <h2 className="text-[1.625rem] font-semibold">Movies</h2>
            <Pagination
              totalPages={data?.total_pages}
              page={page}
              setPage={setPage}
              position={"top"}
            />
          </div>
          {isLoading && (
            <div className="h-[18rem] sm:h-[28rem] flex justify-center items-center">
              <div className="Spinner-spinner w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] "></div>
            </div>
          )}
          {isSuccess && (
            <ul className="mb-[1rem] flex flex-wrap mx-[-15px] list-none">
              {data?.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
          <Pagination
            totalPages={data?.total_pages}
            page={page}
            setPage={setPage}
            position={"bottom"}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;

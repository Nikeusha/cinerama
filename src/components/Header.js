import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchMovieQuery } from "../redux/movieApi";
import SuggestedCard from "./SuggestedCard";
import { useDebounce } from "../utils/useDebounce";

function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [skip, setSkip] = useState(true);
  const navigate = useNavigate();
  const value = useDebounce(searchValue.trim(), 700);
  const { data, isLoading, isFetching, isSuccess } =
    useSearchMovieQuery({ value, page: 1 }, { skip });
  const movies =
    data?.results?.length > 3 ? data?.results?.slice(0, 3) : data?.results;

  const handleChange = (e) => {
    if (skip) setSkip(false);
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim().length > 0 && data?.results?.length > 0) {
      navigate(
        { pathname: "search", search: `?query=${searchValue}` },
        { state: searchValue }
      );
      setToggleSearch(false);
      setSearchValue("");
    }
  };

  useEffect(() => {
    if (toggleSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggleSearch]);

  return (
    <header className="w-full bg-[#16151a] fixed z-[10] after:w-full after:h-full after:content-[''] after:absolute after:top-0 after:left-0 after:shadow-[0_10px_30px_rgba(0,0,0,.3)] after:z-[-1] ">
      <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] ">
        <nav className="desktop-menu relative flex justify-between items-center min-h-[4.375rem] text-[.875rem] font-semibold">
          <button className="flex xl:hidden items-center outline-0 select-none z-[25]">
            <svg
              viewBox="0 0 20 14"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M0-3h20v20H0z"></path>
                <g fill="#FFF">
                  <rect width="20" height="2" rx="1"></rect>
                  <rect y="6" width="18" height="2" rx="1"></rect>
                  <rect
                    stroke="#FFF"
                    x="0.5"
                    y="12.5"
                    width="13"
                    height="1"
                    rx="0.5"
                  ></rect>
                </g>
              </g>
            </svg>
          </button>
          <Link
            to="/"
            className={
              "w-[150px] h-[25px] outline-none flex-shrink-0 no-underline " +
              (!toggleSearch ? "xl:inline-block" : "hidden xl:inline-block")
            }
          >
            <svg
              viewBox="0 0 165 26"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M0 0h20.675v25.821H0V0zm13.273 1.832c-6.32 0-11.443 4.96-11.443 11.079 0 6.118 5.123 11.078 11.443 11.078 2.003 0 3.885-.499 5.522-1.374v-3.737a8.401 8.401 0 01-5.522 2.045c-4.571 0-8.277-3.587-8.277-8.012 0-4.426 3.706-8.013 8.277-8.013 2.122 0 4.057.774 5.522 2.045V3.206a11.687 11.687 0 00-5.522-1.374zM22.513 0h6.432v25.821h-6.432V0zm1.771 1.832V23.99h2.756V1.832h-2.756zM30.783 0h20.215v25.821H30.783V0zM32.6 23.989h2.744V9.449l13.723 14.54V1.832h-2.745v14.771L32.601 1.833v22.156zM52.836 0h12.865v25.821H52.836V0zm11.035 21.219h-6.404v-6.924h6.404v-2.77h-6.404V4.603h6.404v-2.77h-9.148V23.99h9.148v-2.77z"
                  fill="#FFF"
                ></path>
                <path
                  d="M67.53 0h18.39v25.821H67.53V0zm8.8 1.832h-7.032V23.99h2.756v-9.694h1.384l6.884 9.694h3.675l-6.963-9.719c2.56-.35 4.847-2.599 4.847-6.219 0-3.949-2.554-6.219-5.551-6.219zM113.507 0h25.746v25.821h-25.746V0zm1.926 23.989h3.172l1.692-12.832 6.197 12.832 6.198-12.832 1.692 12.832h3.171l-3.594-22.157-7.467 15.357-7.466-15.357-3.595 22.157zM141.092 0H165v25.821h-23.908V0zm11.956 1.93L142.926 23.99h3.39l2.409-5.797h8.646l2.409 5.797h3.39L153.048 1.93zM87.76 0h23.907v25.821H87.76V0zm11.896 1.93L89.534 23.99h3.39l2.409-5.797h8.646l2.409 5.797h3.39L99.656 1.93z"
                  fill="#FFFF4D"
                ></path>
                <path
                  d="M72.054 4.602h2.509c2.664 0 4.136 1.402 4.136 3.491 0 2.09-1.308 3.202-4.111 3.202h-2.534V4.602z"
                  fill="#FFFF4D"
                ></path>
                <path
                  d="M102.992 15.816L99.656 7.79l-3.336 8.026h6.672zM156.384 15.816l-3.336-8.026-3.336 8.026h6.672z"
                  fill="#FFFF67"
                ></path>
              </g>
            </svg>
          </Link>
          {toggleSearch && (
            <>
              <div
                onClick={() => setToggleSearch(false)}
                className="bg-[rgba(0,0,0,.9)] fixed w-full h-full top-0 left-0 z-[20] "
              ></div>
              <div className="w-full flex-grow-1 px-[1.5rem] relative z-[25]">
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#2d2c32] relative rounded-[4px] "
                >
                  <input
                    type="text"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Поиск"
                    className="w-full text-[1rem] placeholder:text-[15px] placeholder:tracking-[0.05rem] placeholder:text-[#ffffff63] placeholder:font-medium focus-visible:border-[#16151a] focus-visible:shadow-[0_0_2px_1px_#fff] font-semibold text-[#fff] py-[0.4rem] pl-[1rem] pr-[3rem] border-none bg-transparent focus:ring-0 ring-0 "
                  />
                  {(isLoading || isFetching) && (
                    <div className="absolute top-[50%] right-[1rem] translate-y-[-50%]">
                      <div className="Spinner-spinner w-[1.2rem] h-[1.2rem] "></div>
                    </div>
                  )}
                </form>
                <div className="suggested-dropdown fixed top-[3.5rem] left-[2%] sm:absolute sm:top-full sm:left-[1.5rem] sm:p-[0.6rem_0_0] ">
                  {value.trim().length > 0 && data?.results?.length > 0 ? (
                    <>
                      <ul className="list-none rounded-[4px_4px_0_0] overflow-hidden ">
                        {movies?.map((movie) => (
                          <SuggestedCard
                            key={movie.id}
                            movie={movie}
                            setToggleSearch={setToggleSearch}
                          />
                        ))}
                      </ul>
                      <Link
                        to={{
                          pathname: "search",
                          search: `?query=${searchValue.trim()}`,
                        }}
                        state={value}
                        onClick={() => setToggleSearch(false)}
                        className="flex justify-between hover:text-[#16151a] hover:bg-[#ffff4d] items-center py-[0.5rem] px-[1rem] text-white rounded-[0_0_4px_4px] bg-[#1d1c20] no-underline outline-0 "
                      >
                        {"Все результаты "}
                        <svg
                          viewBox="0 0 17 12"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="12"
                        >
                          <path d="M15 .001L9.6 0v1.2H15c.331 0 .6.27.6.601V6.6a.6.6 0 01-.6.6H2.297L5.04 4.455l-.848-.848L0 7.8 4.2 12l.848-.848L2.297 8.4H15c.993 0 1.8-.807 1.8-1.8V1.801c0-.992-.808-1.8-1.8-1.8z"></path>
                        </svg>
                      </Link>
                    </>
                  ) : (
                    value.trim().length > 0 &&
                    isSuccess && (
                      <div className="h-[3rem] flex items-center justify-center rounded-[4px_4px] text-[hsla(0,0%,100%,.7)] bg-[#2d2c32] ">
                        Not found
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
          <div className="xl:ml-auto flex flex-[0_0_auto] ">
            <div className="flex xl:mr-[1rem] z-[25] ">
              <button
                onClick={() => setToggleSearch(!toggleSearch)}
                className="flex items-center outline-0 border-none "
              >
                {toggleSearch ? (
                  <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h20v20H0z"></path>
                      <path
                        d="M10 8.872l5.639-5.638a.797.797 0 011.127 1.127L11.128 10l5.638 5.639a.797.797 0 11-1.127 1.127L10 11.128l-5.639 5.638a.797.797 0 11-1.127-1.127L8.872 10 3.234 4.361A.797.797 0 014.36 3.234L10 8.872z"
                        fill="currentColor"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.947 13.771l4.808 4.809a.833.833 0 01-1.18 1.175l-4.808-4.804a8.384 8.384 0 01-5.338 1.906A8.428 8.428 0 010 8.43a8.428 8.428 0 1114.947 5.342zM1.673 8.43c0 3.722 3.029 6.75 6.756 6.75 3.722 0 6.755-3.028 6.755-6.75 0-3.723-3.033-6.756-6.755-6.756A6.763 6.763 0 001.673 8.43z"
                      fill="#fff"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <Link
              to="/"
              className="hidden xl:inline-block text-[#16151a] bg-[#ffff4d] border border-solid border-[#ffff4d] outline-none text-[.875rem] py-[0.5rem] px-[1.5rem] font-semibold rounded-[4px] transition-all duration-300 hover:bg-[#16151a] hover:text-[#ffff4d] no-underline "
            >
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

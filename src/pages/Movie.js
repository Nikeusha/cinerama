import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../redux/movieApi";

function Movie() {
  const { id } = useParams();
  const { data: movie, isSuccess } = useGetMovieDetailsQuery(id);
  const [date, setDate] = useState();

  useEffect(() => {
    if (isSuccess) {
      setDate(new Date(movie?.release_date).getFullYear());
    }
  }, [isSuccess]);

  return (
    <section className="flex flex-col flex-grow-[1] pt-[3.5rem] bg-[#16151a] xl:pt-[4.375rem]">
      <div className="relative p-0 z-0 md:py-[0.3rem] bg-[rgba(45,44,50,.5)]">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] overflow-hidden after:content-[''] after:absolute after:top-[-3rem] after:left-[-3rem] after:right-[-3rem] after:bottom-0 after:z-[-1] after:shadow-[inset_0_0_2px_2px_rgba(0,0,0,.5)_,inset_0_0_15px_3px_rgba(0,0,0,.5)] ">
          <div
            className="w-full h-full bg-[rgba(45,44,50,.5)] bg-no-repeat bg-[50%] bg-cover blur-[30px] brightness-[.5] "
            style={{
              backgroundImage: `url(${movie?.backdrop_path})`,
            }}
          ></div>
        </div>
        <div className="w-full px-0 md:px-[1rem] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="w-full pb-[56.25%] relative ">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
              <div className="mb-[1rem] hidden md:block">
                <button className="inline-flex items-center outline-0 hover:scale-[1.1] transition-transform duration-[.25s] ">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] "
                  >
                    <path
                      d="M32 2C15.432 2 2 15.431 2 32c0 16.569 13.432 30 30 30 16.568 0 30-13.431 30-30C62 15.431 48.568 2 32 2z"
                      stroke="#ffff4d"
                      strokeWidth="3"
                    ></path>
                    <path
                      d="M42.369 33.59l-15 9.375a1.876 1.876 0 01-2.869-1.59v-18.75a1.874 1.874 0 012.869-1.59l15 9.375a1.877 1.877 0 010 3.18z"
                      fill="#ffff4d"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="w-full font-semibold text-center ">
                <h1 className="text-white text-[1.6rem] overflow-hidden text-ellipsis whitespace-normal ">
                  {movie?.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[3rem] pb-[2rem]">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div>
            <div className="flex flex-wrap mx-[-15px] ">
              <div className="relative w-full px-[15px] mb-[0.5rem] md:mb-0 flex-[0_0_66.66666667%] max-w-[66.66666667%] sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.3333333%] md:max-w-[33.3333333%] lg:flex-[0_0_25%] lg:max-w-[25%] ">
                <img
                  src={movie?.poster_path}
                  alt="Movie poster"
                  className="movie-poster-shadow w-full h-auto rounded-[4px]"
                />
              </div>
              <div className="relative w-full px-[15px] sm:flex-[0_0_100%] sm:max-w-[100%] md:flex-[0_0_66.66666667%] md:max-w-[66.66666667%] lg:flex-[0_0_75%] lg:max-w-[75%]">
                <div className="mb-[1rem]">
                  <h2 className="text-[1.5rem] font-semibold">
                    {movie?.title}
                  </h2>
                  <h3 className="text-[1.1rem] mt-[0.1rem] text-[hsla(0,0%,100%,.5)] ">
                    {movie?.original_title}
                  </h3>
                </div>
                <div className="mb-[0.8rem] flex items-center font-light">
                  <div className="mr-[1rem] flex items-center font-light">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      className="mr-[0.5rem]"
                    >
                      <g fill="#FC0" fillRule="evenodd">
                        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM3.333 7.333v5.037h1.482V7.333H3.333zm4.348 0L7.35 9.686l-.206-1.28c-.06-.41-.117-.768-.172-1.073h-1.86v5.037h1.257l.004-3.325.53 3.325h.894l.502-3.4.005 3.4h1.253V7.333H7.68zm4.048 5.037c.312 0 .546-.017.701-.05a.924.924 0 00.391-.181.681.681 0 00.222-.357c.043-.152.068-.454.068-.906V9.107c0-.476-.018-.796-.047-.958a.905.905 0 00-.218-.443c-.116-.132-.285-.228-.508-.286-.222-.058-.585-.087-1.217-.087h-.973v5.037h1.58zm1.975 0h1.185l.074-.382c.106.128.224.223.352.287.128.064.32.095.468.095a.9.9 0 00.536-.16.7.7 0 00.287-.38c.04-.146.06-.368.06-.666V9.769c0-.3-.006-.496-.02-.588a.67.67 0 00-.411-.505 1.163 1.163 0 00-.451-.08c-.15 0-.343.03-.471.088a1.036 1.036 0 00-.35.267V7.333h-1.26v5.037z"></path>
                        <path d="M15.185 11.218c0 .244-.008.399-.024.463s-.087.097-.14.097c-.053 0-.088-.031-.106-.093a2.043 2.043 0 01-.026-.426V9.924c0-.23.008-.374.023-.431.016-.057.05-.086.102-.086.053 0 .125.033.144.098.018.066.027.205.027.418v1.295zM11.742 8.24c.052.03.085.077.099.141.014.064.022.21.022.438v1.953c0 .335-.022.54-.065.616-.044.076-.16.113-.347.113V8.195c.142 0 .24.015.291.045z"></path>
                      </g>
                    </svg>
                    {movie?.vote_average?.toFixed(1)}
                  </div>
                  <div className="mr-[1rem] flex items-center font-light">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      className="mr-[0.5rem]"
                    >
                      <path
                        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-8.667a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM6 8.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zm0 8a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zm8-8a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zm0 8a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"
                        fill="#FF791A"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    {movie?.vote_average?.toFixed(1)}
                  </div>
                  {movie?.adult && (
                    <div className="p-[0.3rem] rounded-[8px] border border-solid border-[#2d2c32] ">
                      18+
                    </div>
                  )}
                </div>
                <div className="mb-[1.5rem] font-light">
                  <div className="mb-[0.5rem]">
                    <span className="text-[#c6c6c6]">Year:</span>
                    <span className="inline-block font-normal ml-[0.3rem]">
                      {date}
                    </span>
                  </div>
                  <div className="mb-[0.5rem]">
                    <span className="text-[#c6c6c6]">Country:</span>
                    {movie?.production_countries?.map(
                      (counrty, index, array) => (
                        <span
                          key={index}
                          className="inline-block font-normal ml-[0.3rem]"
                        >
                          {counrty.name === "United States of America"
                            ? "USA"
                            : counrty.name}
                          {array.length - 1 === index ? "" : ","}
                        </span>
                      )
                    )}
                  </div>
                  <div className="mb-[0.5rem]">
                    <span className="text-[#c6c6c6]">Genre:</span>
                    {movie?.genres?.map((genre, index, array) => (
                      <Link
                        to={`/filter/${genre?.id}`}
                        state={genre}
                        key={genre.id}
                        className="font-normal ml-[0.3rem] inline-block border border-transparent xl:hover:border-b-white xl:hover:border-b xl:hover:border-solid transition-[border-bottom] duration-[.3s] no-underline outline-0"
                      >
                        {genre.name}
                        {array.length - 1 === index ? "" : ","}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-[0.8rem] text-[.89rem] text-[#c6c6c6] font-light">
                    {movie?.overview}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;

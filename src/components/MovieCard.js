import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MOVIE_GENRES } from "../utils/movieGenres";

function MovieCard({ movie }) {
  const [isHover, setIsHover] = useState(false);
  const date = movie?.release_date
    ? new Date(movie.release_date).getFullYear()
    : "";
  const genre = MOVIE_GENRES.find((g) => g.id === movie.genre_ids[0]);

  return (
    <li className="mb-[1.5rem] relative w-full px-[15px] max-w-[50%] flex-[0_0_50%] sm:flex-[0_0_33.3333333%] sm:max-w-[33.3333333%] md:flex-[0_0_25%] md:max-w-[25%] lg:flex-[0_0_20%] lg:max-w-[20%] xl:flex-[0_0_16.666666667%] xl:max-w-[16.666666667%] ">
      <div className="block w-full relative transition-colors duration-[.2s] hover:text-white text-[hsla(0,0%,100%,.8)] ">
        <div
          className="relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link
            to={`/watch/${movie.id}`}
            className="w-full block relative rounded[0.5rem] overflow-hidden origin-bottom transition-all ease-in duration-[.2s] md:hover:scale-[1.05] no-underline outline-0 "
          >
            <div className="rounded-[0.6rem] pb-[141.93548387096774%] relative w-full">
              <img
                className="rounded-[0.6rem] object-cover absolute block top-0 left-0 w-full h-full "
                src={movie.poster_path}
                alt={movie.title}
              />
              <div className="block absolute top-0 left-0 w-full h-full ">
                {isHover && (
                  <div className="absolute hidden md:flex md:justify-center md:items-center left-0 top-0 w-full h-full rounded-[0.5rem] bg-[rgba(0,0,0,0.8)] ">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="min-w-[3rem] w-[25%] text-[#ffff4d] h-auto"
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
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
        <div className="block pt-[0.3rem]">
          <Link
            to="/watch"
            state={movie.id}
            className="text-[1rem] font-semibold outline-0 mb-[0.2rem] overflow-hidden text-ellipsis whitespace-normal no-underline "
          >
            {movie.title.trim().length > 30
              ? movie.title.slice(0, 39) + "..."
              : movie.title}
          </Link>
          <p className="text-[.8rem] font-light text-[hsla(0,0%,100%,.7)] overflow-hidden text-ellipsis whitespace-normal ">
            <span className="inline-block border border-transparent">
              {date}
            </span>
            {" / "}
            <Link
              to={`/filter/${genre?.id}`}
              state={genre}
              className="inline-block border border-transparent hover:border-b-white hover:border-b hover:border-solid transition-[border-bottom] ease-[ease] delay-0 duration-[200ms] no-underline outline-0"
            >
              {genre?.name}
            </Link>
          </p>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;

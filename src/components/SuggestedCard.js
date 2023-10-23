import React from "react";
import { Link } from "react-router-dom";
import { MOVIE_GENRES } from "../utils/movieGenres";

function SuggestedCard({ movie, setToggleSearch }) {
  const date = new Date(movie.release_date).getFullYear();
  const genre = MOVIE_GENRES.find((g) => g.id === movie.genre_ids[0]);
  return (
    <li>
      <Link
        to={`watch/${movie?.id}`}
        onClick={() => setToggleSearch(false)}
        className="py-[0.8rem] px-[1rem] hover:bg-[#413f48] flex items-center border-none bg-[#2d2c32] outline-0 no-underline"
      >
        <img
          className="hidden md:movie-poster-shadow md:block md:w-[3.2rem] md:h-[4.55rem] md:object-cover "
          src={movie.poster_path}
          alt="Movie poster"
        />
        <div className="flex-grow-[1] pr-[1rem] text-white md:pl-[0.8rem] lg:text-[hsla(0,0%,100%,.8)] ">
          <div className="mb-[0.3rem] lg:transition-colors lg:duration-[.3s] ">
            <h2 className="text-[.9375rem]">{movie.title}</h2>
          </div>
          <div className="text-[.6875rem] font-light text-[hsla(0,0%,100%,.8)]">
            {date} / {genre?.name}
          </div>
        </div>
        <div className="flex-[0_0_auto] text-[hsla(0,0%,100%,.8)] ">
          <div className="mb-[0.5rem] flex items-center">
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="mr-[0.5rem]"
            >
              <g fill="#FC0" fillRule="evenodd">
                <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM3.333 7.333v5.037h1.482V7.333H3.333zm4.348 0L7.35 9.686l-.206-1.28c-.06-.41-.117-.768-.172-1.073h-1.86v5.037h1.257l.004-3.325.53 3.325h.894l.502-3.4.005 3.4h1.253V7.333H7.68zm4.048 5.037c.312 0 .546-.017.701-.05a.924.924 0 00.391-.181.681.681 0 00.222-.357c.043-.152.068-.454.068-.906V9.107c0-.476-.018-.796-.047-.958a.905.905 0 00-.218-.443c-.116-.132-.285-.228-.508-.286-.222-.058-.585-.087-1.217-.087h-.973v5.037h1.58zm1.975 0h1.185l.074-.382c.106.128.224.223.352.287.128.064.32.095.468.095a.9.9 0 00.536-.16.7.7 0 00.287-.38c.04-.146.06-.368.06-.666V9.769c0-.3-.006-.496-.02-.588a.67.67 0 00-.411-.505 1.163 1.163 0 00-.451-.08c-.15 0-.343.03-.471.088a1.036 1.036 0 00-.35.267V7.333h-1.26v5.037z"></path>
                <path d="M15.185 11.218c0 .244-.008.399-.024.463s-.087.097-.14.097c-.053 0-.088-.031-.106-.093a2.043 2.043 0 01-.026-.426V9.924c0-.23.008-.374.023-.431.016-.057.05-.086.102-.086.053 0 .125.033.144.098.018.066.027.205.027.418v1.295zM11.742 8.24c.052.03.085.077.099.141.014.064.022.21.022.438v1.953c0 .335-.022.54-.065.616-.044.076-.16.113-.347.113V8.195c.142 0 .24.015.291.045z"></path>
              </g>
            </svg>
            {movie.vote_average.toFixed(1)}
          </div>
          <div className="flex items-center">
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="mr-[0.5rem]"
            >
              <path
                d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-8.667a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM6 8.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zm0 8a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zm8-8a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zm0 8a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"
                fill="#FF791A"
                fillRule="evenodd"
              ></path>
            </svg>
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default SuggestedCard;

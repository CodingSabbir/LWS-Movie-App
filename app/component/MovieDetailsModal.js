import React from "react";
import { FaCartShopping } from "react-icons/fa6";
function MovieDetailsModal({ movie, onClose,onAddToCard }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="bg-black opacity-50 fixed inset-0"
          onClick={onClose}
        ></div>
        <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg mx-auto z-10">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{movie.movie_name}</h2>
            <p className="text-lg text-gray-600 mb-2">
              Director: {movie.director}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Producer: {movie.producer}
            </p>

            <img
              src={movie.poster}
              alt={`${movie.movie_name} Poster`}
              className="w-full h-32 max-w-xs mx-auto mb-4"
            />

            <p className="text-gray-700 mb-4">{movie.description}</p>
          </div>
          <button onClick={()=>onAddToCard(movie)} className="flex items-center gap-2 font-semibold bg-[#f43f5e] text-white p-2 rounded-sm">
            <FaCartShopping className="text-xl" /> Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsModal;

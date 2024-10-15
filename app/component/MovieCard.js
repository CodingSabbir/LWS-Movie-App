

'use client';
import React, { useContext, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import movie from "../data/MovieData";
import Rating from './Rating';
import MovieDetailsModal from './MovieDetailsModal';
import { MovieContext } from './Moviecontext';

const MovieCard = () => {
    const [showModal, setShowModal] = useState(false);  // State for showing/hiding the modal
    const [selectedMovie, setSelectedMovie] = useState(null);  // State for tracking the selected movie
    const {cardData , setCardData}=useContext(MovieContext)

    // Function to close the modal
    function handleModalClose() {
        setSelectedMovie(null);  // Clear selected movie
        setShowModal(false);  // Hide modal
    }

    // Function to select a movie and show the modal
    function handleMovieSelection(item) {
        setSelectedMovie(item);  // Set the selected movie
        setShowModal(true);  // Show the modal
    }
    function handleAddToCard(item){
        console.log(item)
    const found= cardData.find((CardItem)=>{
        return   CardItem.id === item.id  
        }) 
        if(!found){
            setCardData([...cardData,item])
        }else{
            console.log(`error ${item.movie_name}`)
        }
    }
 

    return (
        <div>
            <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        movie.map((item, id) => (
                            <div 
                               
                                key={id} 
                                className="bg-gray-50 border shadow-md overflow-hidden rounded-lg cursor-pointer relative"
                            >
                                {/* Wishlist Icon */}
                                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                                        <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                                    </svg>
                                </div>

                                {/* Movie Poster */}
                                <div  onClick={() => handleMovieSelection(item)}  className="h-[260px] overflow-hidden mx-auto">
                                    <img src={item.poster} alt={`${item.movie_name} poster`} />
                                </div>

                                {/* Movie Details */}
                                <div className="p-6 bg-white">
                                    <h3 className="text-lg font-bold text-gray-800">{item.movie_name}</h3>
                                    <h4 className="text-lg text-gray-800 font-bold mt-2">{item.runtime}</h4>
                                    <p className="text-gray-600 text-sm mt-2">{item.producer}</p>

                                    <div className='flex items-center justify-between py-3'>
                                        <div className='flex gap-3'>
                                            <Rating value={item.ratings} />
                                        </div>
                                        <button onClick={()=>handleAddToCard(item)} className='flex items-center gap-2 font-semibold bg-[#f43f5e] text-white p-2 rounded-sm'>
                                            <FaCartShopping className='text-xl' /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Movie Details Modal */}
            {showModal && (
                <MovieDetailsModal 
                    movie={selectedMovie}  
                    onClose={handleModalClose} 
                    onAddToCard={handleAddToCard}
                />
            )}
        </div>
    );
};

export default MovieCard;

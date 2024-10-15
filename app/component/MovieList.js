'use client'
import Header from "./Header";
import MovieCard from "./MovieCard";
import Sidebar from "./Sidebar";
import { MovieContext } from "./Moviecontext";
import { useState } from "react";

export default function MovieList() {
 const [cardData, setCardData]=useState([])
  return (
<>
<MovieContext.Provider value={{cardData , setCardData}}>
<div className="bg-white">
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
     <Header/>
      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
         <Sidebar/>
          {/* Product grid */}
          <div className="lg:col-span-3">
            <MovieCard/>
          </div>
        </div>
      </section>
    </main>
 
</div>
</MovieContext.Provider>
</>
  )
}

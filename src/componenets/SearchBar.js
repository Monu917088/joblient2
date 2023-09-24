import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full flex justify-center my-3 z-[0] '>
        
           
            
            <input className='w-2/3 border  border-gray-400 p-2 rounded-l-full' type ="text" placeholder="search job"/>



            <button className='border border-gray-400 p-2 rounded-r-full'>search </button>
            
    </div>
  )
}

export default SearchBar
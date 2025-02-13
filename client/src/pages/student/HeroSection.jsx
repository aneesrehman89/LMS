import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center '>
      <div className='mx-w-3xl mx-auto'>
         <h1 className='text-white font-bold text-4xl mb-4'>Find the best course for you</h1>
         <p className='text-gray-200 dark:text-gray-400 mb-8'>Discover, Learn, and Upskill with our wide range of courses</p>
         <form action="" className='flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
          <input type="text"
          placeholder='Search Courses'
          className='w-full flex-grow border-none focus-visible:ring-0 focus:outline-none text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500 px-4'
          />
          <button className='bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700
          dark:hover:bg-blue-800'>Search</button>
         </form>
         <button className='bg-white text-blue-500 dark:bg-gray-800 rounded-full hover:bg-gray-200 px-6 py-2'>Explore Courses</button>
      </div>
    </div>
  )
}

export default HeroSection

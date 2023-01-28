import React from 'react'
import ItemType from '../../types/ItemType'
import { Link } from 'react-router-dom'

const SingleItem: React.FC<ItemType> = ({
  image,
  title,
  id,
  description,
  price,
}): JSX.Element => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4 overflow-hidden hover:shadow-md'>
      <Link to={`/items/${id}`}>
        <img
          className='rounded-t-lg h-32 w-full object-contain object-center hover:scale-105'
          src={image}
          alt={title}
        />
      </Link>
      <div className='p-5'>
        <Link to={`/items/${id}`}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-500'>
            {title}
          </h5>
        </Link>
        <p className='mb-3 font-normal truncate text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <p className='mb-3 font-bold truncate text-gray-700 dark:text-gray-400'>
          ${price}
        </p>
        <Link
          to={`/items/${id}`}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Buy
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default SingleItem

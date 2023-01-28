import React, { useMemo } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

interface CategoryFilterProps {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  category,
  setCategory,
}): JSX.Element => {
  const { data: categories } = useQuery('categories', () => {
    return axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => res.data)
      .catch((err) => console.log(err))
  })

  const memoizedCategories = useMemo(() => {
    return categories
  }, [categories])

  return (
    <div className='w-80'>
      <select
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {memoizedCategories?.map((category: string, idx: number) => {
          return (
            <option
              key={idx}
              value={category}
              className='first-letter:capitalize'
            >
              {category}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default CategoryFilter

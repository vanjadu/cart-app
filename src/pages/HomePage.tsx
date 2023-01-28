import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '../components/Loader'
import ItemType from '../types/ItemType'
import SingleItem from '../components/SingleItem'
import Search from '../components/Search'
import CategoryFilter from '../components/CategoryFilter'

export default function HomePage() {
  const { data: items, isLoading } = useQuery('items', () =>
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => res.data)
      .catch((err) => console.log(err))
  )

  const memoizedItems = useMemo(() => items, [items])

  const [search, setSearch] = useState<string>('')

  const filteredItems = memoizedItems?.filter((item: ItemType) => {
    if (search === '') {
      return item
    } else if (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    ) {
      return item
    }

    return null
  })

  const [category, setCategory] = useState<string>('')

  const filteredByCategory = category
    ? filteredItems?.filter((item: ItemType) => item.category === category)
    : filteredItems

  const filteredItemsBySearchAndCategory = filteredByCategory || filteredItems

  return (
    <div className='container mx-auto flex flex-col items-center py-6'>
      <h1 className='text-2xl opacity-75'>Our products</h1>
      <div className='flex flex-col items-center gap-8'>
        <Search search={search} setSearch={setSearch} />
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>
      <div className='flex justify-center items-start flex-wrap mx-auto mt-8 gap-6'>
        {isLoading ? (
          <Loader />
        ) : (
          filteredItemsBySearchAndCategory.map((item: ItemType) => (
            <SingleItem key={item.id} {...item} />
          ))
        )}
      </div>
    </div>
  )
}

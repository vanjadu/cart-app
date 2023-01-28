import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Loader from '../components/Loader'
import Button from '../components/Button'

export default function SinglePage() {
  const { id } = useParams<{ id: string }>()

  const { data: item, isLoading } = useQuery(['item', id], () => {
    return axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  })

  const memoizedItem = useMemo(() => {
    return item
  }, [item])

  const { addItem, removeItem } = useCart()

  const handleAddToCart = () => {
    addItem(memoizedItem)
  }

  const handleRemoveFromCart = () => {
    removeItem(memoizedItem?.id)
  }

  return (
    <section className='h-4/5'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        {isLoading ? (
          <div className='mx-auto w-full flex items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 gap-4 mt-8'>
              <img
                className='w-full rounded-lg'
                src={memoizedItem?.image}
                alt={memoizedItem?.title}
              />
            </div>
            <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
              <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                {memoizedItem?.title}
              </h2>
              <p className='mb-2'>
                Category:{' '}
                <span className='capitalize font-semibold'>
                  {memoizedItem?.category}
                </span>
              </p>
              <p className='mb-4'>{memoizedItem?.description}</p>
              <p className='font-bold'>${memoizedItem?.price}</p>
              <div className='flex items-center mt-4'>
                <Button text='Add to cart +' click={handleAddToCart} />
                <Button
                  text='Remove from cart -'
                  click={handleRemoveFromCart}
                  secondary
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

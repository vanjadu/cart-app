// display items from the react-use-cart in the cart page
import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function CartPage() {
  const { isEmpty, totalUniqueItems, cartTotal, items, removeItem } = useCart()

  const handleRemoveItem = (id: string) => {
    removeItem(id)
  }

  return (
    <div className='relative overflow-x-auto mt-8 px-8'>
      {isEmpty ? (
        <h1>The cart is empy</h1>
      ) : (
        <>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Product name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Item ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  Count
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    <Link
                      to={`/items/${item.id}`}
                      className='hover hover:text-blue-500'
                    >
                      {item.title}
                    </Link>
                  </th>
                  <td className='px-6 py-4'>{item.id}</td>
                  <td className='px-6 py-4'>{item.category}</td>
                  <td className='px-6 py-4'>{item.quantity}</td>
                  <td className='px-6 py-4'>${item.price}</td>
                  <td className='px-6 py-4'>
                    <Button
                      text='Remove from cart'
                      click={() => handleRemoveItem(item.id)}
                      secondary
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='container w-full mx-auto'>
            <div className='flex flex-col items-center justify-end px-4 py-6 mx-auto md:flex-row'>
              <div className='flex items-center justify-between w-full mb-4 md:w-auto md:mb-0 gap-8'>
                <p className='text-xl font-bold text-gray-80'>
                  Total items: {totalUniqueItems}
                </p>
                <p className='text-xl font-bold text-gray-80'>
                  Total price: ${cartTotal}
                </p>
                <Link to='/checkout'>
                  <Button text='Checkout' />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

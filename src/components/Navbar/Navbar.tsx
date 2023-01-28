import React from 'react'
import { Link } from 'react-router-dom'
// we should display the cart items count and total price in the navbar with react-use-cart
import { useCart } from 'react-use-cart'

const Navbar = (): JSX.Element => {
  const { totalUniqueItems, cartTotal } = useCart()

  return (
    <div className='container flex justify-center items-center gap-4 mx-auto h-20'>
      <Link to='/' className='text-xl font-semibold hover:text-blue-500'>
        Home
      </Link>
      <Link to='/cart' className='text-xl font-semibold hover:text-blue-500'>
        Cart ({totalUniqueItems})(${cartTotal})
      </Link>
    </div>
  )
}

export default Navbar

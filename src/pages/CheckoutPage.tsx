import { useCart } from 'react-use-cart'

export default function CheckoutPage() {
  const { totalUniqueItems, cartTotal, items } = useCart()

  return (
    <div className='container flex flex-col items-center text-center mx-auto mt-8'>
      <h1 className='text-4xl font-bold text-blue-500 mb-2'>Checkout</h1>
      <p className='text-lg font-semibold'>Items: {totalUniqueItems}</p>
      <p className='text-lg font-semibold'>Total: {cartTotal}</p>
      <p className='text-lg font-semibold mt-10'>Your cart items:</p>
      <ul className='w-full'>
        {items.map((item) => (
          <li key={item.id} className='text-lg font-semibold mt-4'>
            {item.title} - {item.price} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

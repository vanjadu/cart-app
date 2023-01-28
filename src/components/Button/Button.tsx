import React from 'react'

interface ButtonProps {
  text: string
  secondary?: boolean
  click?: () => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  click,
  secondary,
}): JSX.Element => {
  let buttonClass

  if (secondary) {
    buttonClass =
      'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
  } else {
    buttonClass =
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
  }

  return (
    <button type='button' className={buttonClass} onClick={click && click}>
      {text}
    </button>
  )
}

export default Button

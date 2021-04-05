interface ButtonProps {
  children: string
  handleClick?: () => void
  disabled?: boolean
}

const Button = ({
  children,
  disabled,
  handleClick = () => undefined,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center w-24 p-1 px-2 text-gray-600 uppercase bg-gray-300 rounded outline-none cursor-pointer  ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:text-gray-700 hover:bg-gray-400'
      }`}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}

export { Button }

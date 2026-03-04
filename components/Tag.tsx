import clsx from 'clsx'
import { AllHTMLAttributes } from 'react'

interface TagProps extends AllHTMLAttributes<HTMLSpanElement> {
  classes?: string
  color?: string
  tone?: string
  children: string | JSX.Element
}

const Tag = ({
  classes = '',
  color = 'blue',
  children,
  ...props
}: TagProps) => {
  let colorClasses = ''
  switch (color) {

    case 'purple':
      colorClasses = clsx(
        'bg-purple-500 ring-purple-600',
        'hover:bg-purple-600'
      )
      break

    case 'red':
      colorClasses = clsx(
        'bg-red-500 ring-red-600',
        'hover:bg-red-600'
      )
      break

    case 'yellow':
      colorClasses = clsx(
        'bg-yellow-500 ring-yellow-600',
        'hover:bg-yellow-600'
      )
      break

    case 'green':
      colorClasses = clsx(
        'bg-green-600 ring-green-700',
        'hover:bg-green-700'
      )
      break

    case 'blue':
      colorClasses = clsx(
        'bg-blue-500 ring-blue-600',
        'hover:bg-blue-600'
      )
      break

    case 'gray':
      colorClasses = clsx(
        'bg-gray-600 ring-gray-700',
        'hover:bg-gray-700'
      )
      break

    case 'amber':
      colorClasses = clsx(
        'bg-amber-800 ring-amber-900',
        'hover:bg-amber-900'
      )
      break

    case 'black':
      colorClasses = clsx(
        'bg-slate-800 ring-gray-700 dark:bg-slate-800',
        'hover:bg-black hover:dark:bg-black'
      )
      break

    default:
      break
  }

  return (
    <span
      className={clsx(
        'px-2 py-1 rounded-md text-white text-xs font-semibold cursor-default keep-word',
        classes,
        colorClasses,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Tag

import clsx from 'clsx'
import { AllHTMLAttributes } from 'react'

interface TagProps extends AllHTMLAttributes<HTMLDivElement> {
  classes?: string
}

const Separator = ({
  classes = '',
  children,
  ...props
}: TagProps) => {
  return (
    <div
      className={clsx(
        // 'h-px my-4 bg-black dark:bg-white',
        'inline-block w-full mt-6 mb-4 border-t-2 border-black dark:border-white ',
        classes,
      )}
      {...props}
    ></div>
  )
}

export default Separator

import { IconX } from 'components/Icons'

export interface AlertSmallProps {
  children: React.ReactNode | string
  type: 'danger' | 'warn' | 'success' | 'info'
  setMessage: () => void
  className?: string
}

const AlertSmall = ({
  children,
  type,
  setMessage,
  className
}: AlertSmallProps) => {
  const styleAlert = {
    danger: 'bg-red-500 dark:bg-red-600 text-gray-50 dark:text-gray-200',
    warn: 'bg-orange-400 dark:bg-orange-500 text-white dark:text-gray-200',
    success: 'bg-green-500 dark:bg-green-600 text-white dark:text-gray-100',
    info: 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-100'
  }

  return (
    <div
      className={`flex p-2 w-full rounded-sm
        ${styleAlert[type]} ${className}
      `}
    >
      <p className="w-full">{children}</p>
      <button type="button" onClick={setMessage} title="close">
        <IconX size={4} />
      </button>
    </div>
  )
}

export default AlertSmall

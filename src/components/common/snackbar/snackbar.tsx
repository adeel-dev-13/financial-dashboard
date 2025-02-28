import { IoClose } from 'react-icons/io5'
import React, { useState, useEffect } from 'react'
import { SnackbarType } from '../../../utils/types'

interface SnackbarProps {
  message: string
  type?: SnackbarType
  duration?: number
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type = 'info',
  duration = 3000
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  const typeStyles: Record<SnackbarType, string> = {
    success: 'bg-green-500 border-green-700',
    error: 'bg-red-500 border-red-700',
    warning: 'bg-yellow-500 border-yellow-700',
    info: 'bg-blue-500 border-blue-700'
  }

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center px-4 py-3 text-white border-l-4 shadow-lg rounded-md ${typeStyles[type]}`}
    >
      <span>{message}</span>
      <button className="ml-4 text-white" onClick={() => setVisible(false)}>
        <IoClose className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Snackbar

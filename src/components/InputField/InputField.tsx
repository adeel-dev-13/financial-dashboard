import React from 'react'

interface InputFieldProps {
  label: string
  type: string
  placeholder: string
  defaultValue?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  defaultValue
}) => {
  return (
    <div className="space-y-2 md:max-w-[418px]">
      <label className="text-gray-600 mb-2">{label}</label>
      <input
        type={type}
        className="w-full md:max-w-[418px] p-2 border border-offwhite rounded-[15px] placeholder-[#718EBF]"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default InputField

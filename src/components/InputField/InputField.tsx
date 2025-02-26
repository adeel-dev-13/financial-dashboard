import React from 'react'

interface InputFieldProps {
  label: string
  type: string
  placeholder: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  defaultValue,
  onChange
}) => {
  return (
    <div className="space-y-4 md:max-w-[418px]">
      <label className="text-light-black">{label}</label>
      <input
        type={type}
        className="w-full mt-2 text-[15px] font-[400] md:max-w-[418px] p-2 border border-offwhite rounded-[15px] placeholder-grey"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  )
}

export default InputField

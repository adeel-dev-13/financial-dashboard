import React from 'react'

interface InputFieldProps {
  label: string
  type: string
  placeholder: string
  inputValue: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  inputValue,
  placeholder,
  onChange
}) => {
  return (
    <div className="space-y-4 md:max-w-[418px]">
      <label className="text-light-black">{label}</label>
      <input
        value={inputValue}
        type={type}
        className="w-full mt-2 text-[15px] font-[400] md:max-w-[418px] pt-2 pb-2 pl-3 pr-3 border border-offwhite rounded-[15px] placeholder-grey"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default InputField

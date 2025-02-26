import { EditIcon } from '../Icons'
import { Profile } from '../../assets'
import React, { useState } from 'react'
import { FormValues } from '../../../types'
import InputField from '../InputField/InputField'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { profileFields } from '../../utils/constants'
import { validationSchema } from '../../utils/schema'

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile')
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>(Profile)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema)
  })

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const onSubmit = () => {
    if (selectedImage) {
      const formData = new FormData()
      formData.append('profilePicture', selectedImage)
    }
  }

  return (
    <div className="max-w-[1110px] mx-auto overflow-hidden pt-3">
      <div className="bg-white p-[30px] rounded-[25px] shadow-md mt-6">
        <div className="flex border-b border-border-dark  mt-4 mb-10 relative">
          {['Edit Profile', 'Preferences', 'Security'].map((tab) => (
            <button
              key={tab}
              className={`p-0 md:py-2 md:px-4 mx-4 font-[500] text-[13px] transition-all relative ${
                activeTab === tab
                  ? 'text-light-black rounded-b-xl pb-2'
                  : 'text-grey'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-t-xl"></div>
              )}
            </button>
          ))}
        </div>

        {activeTab === 'Edit Profile' && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
              <div className="relative ml-14">
                <img
                  src={preview}
                  alt="Profile"
                  className="w-[90px] h-[90px] rounded-full min-w-[90px] object-cover"
                />
                <label className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-light-black text-white rounded-full flex items-center justify-center cursor-pointer">
                  <EditIcon />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <div className="mt-4 md:mt-0 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  {profileFields.map((value, index) => (
                    <div key={index}>
                      <Controller
                        name={value.name as keyof FormValues}
                        control={control}
                        rules={{ required: 'This field is required' }}
                        render={({ field }) => (
                          <InputField
                            type={value.type}
                            label={value.label}
                            placeholder={value.placeholder}
                            defaultValue={value.defaultValue}
                            {...field}
                          />
                        )}
                      />
                      {errors[value.name as keyof FormValues] && (
                        <p className="text-red text-sm mt-1">
                          {errors[value.name as keyof FormValues]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-end">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-[15px] min-w-[190px] 
                    hover:ring-2 hover:ring-gray-600 transition-all duration-300 ease-in-out"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {activeTab !== 'Edit Profile' && (
          <div className="mt-6 text-gray-500 text-center">
            <p>{activeTab} settings will be added here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SettingsPage

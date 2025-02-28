import { Profile } from '../../../assets'
import { EditIcon } from '../../common/Icons'
import React, { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Snackbar from '../../common/snackbar/snackbar'
import { profileFields } from '../../../utils/constants'
import { validationSchema } from '../../../utils/schema'
import InputField from '../../common/InputField/InputField'
import { FormValues, SnackbarType } from '../../../utils/types'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setUserProfile } from '../../../redux/reducer/applicationSlice'

const SettingsPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const [snackbar, setSnackbar] = useState<{
    message: string
    type: SnackbarType
  } | null>(null)
  const [activeTab, setActiveTab] = useState('Edit Profile')
  const { userProfile } = useAppSelector((state) => state.userReducer)
  const [preview, setPreview] = useState<string>(userProfile?.image || Profile)

  const showSnackbar = (message: string, type: SnackbarType) => {
    setSnackbar({ message, type })
    setTimeout(() => setSnackbar(null), 3000)
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      image: userProfile?.image,
      city: userProfile?.city || '',
      email: userProfile?.email || '',
      country: userProfile?.country || '',
      yourName: userProfile?.yourName || '',
      userName: userProfile?.userName || '',
      password: userProfile?.password || '',
      postalCode: userProfile?.postalCode || '',
      dateOfBirth: userProfile?.dateOfBirth || '',
      presentAddress: userProfile?.presentAddress || '',
      permanentAddress: userProfile?.permanentAddress || ''
    }
  })

  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      try {
        const base64Image = await convertToBase64(file)
        setPreview(base64Image)
        dispatch(setUserProfile({ ...userProfile, image: base64Image }))
      } catch (error) {
        console.error('Error converting image:', error)
      }
    }
  }

  useEffect(() => {
    if (userProfile?.image) {
      setPreview(userProfile.image)
    } else {
      setPreview(Profile)
    }
  }, [userProfile])

  const onSubmit = (data: FormValues) => {
    dispatch(setUserProfile({ ...data, image: preview }))
    showSnackbar('Profile edited successfully!', 'success')
  }

  return (
    <div className="max-w-[1110px] mx-auto overflow-hidden px-4 bg-light-bg">
      <div className="bg-white p-[12px] md:p-[30px] rounded-[25px] shadow-md mt-6">
        <div className="flex border-b border-border-dark mt-4 mb-10 relative">
          {['Edit Profile', 'Preferences', 'Security'].map((tab) => (
            <button
              key={tab}
              className={`p-0 pb-1 md:py-2 md:px-4 mx-4 font-[500] text-[13px] cursor-pointer transition-all relative ${
                activeTab === tab
                  ? 'text-light-black rounded-b-xl'
                  : 'text-grey'
              }`}
              onClick={() => setActiveTab(tab)}
              aria-label={`Switch to ${tab} tab`}
              aria-selected={activeTab === tab}
              role="tab"
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
              <div className="relative ml:0 md:ml-14">
                <img
                  src={preview}
                  alt="Profile Picture"
                  className="w-[90px] h-[90px] rounded-full min-w-[90px] object-cover"
                />
                <label
                  className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-light-black text-white rounded-full flex items-center justify-center cursor-pointer"
                  aria-label="Upload new profile picture"
                >
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
                            inputValue={field.value || ''}
                            placeholder={value.placeholder}
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
                    className="bg-black cursor-pointer text-white px-6 py-2 rounded-[15px] min-w-[190px] hover:ring-2 hover:ring-gray-600 transition-all duration-300 ease-in-out"
                    aria-label="Save profile changes"
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

        {snackbar && (
          <Snackbar message={snackbar.message} type={snackbar.type} />
        )}
      </div>
    </div>
  )
}

export default SettingsPage

import { EditIcon } from '../Icons'
import React, { useState } from 'react'
import { Profile } from '../../assets'
import InputField from '../InputField/InputField'
import { profileFields } from '../../utils/constants'

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile')

  return (
    <div className="max-w-[1110px] mx-auto overflow-hidden pt-3">
      <div className="bg-white p-[30px] rounded-[25px] shadow-md mt-6">
        <div className="flex border-b mt-4 mb-10 relative">
          {['Edit Profile', 'Preferences', 'Security'].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-6 mx-4 font-[500] text-[16px] transition-all relative ${
                activeTab === tab
                  ? ' text-light-black rounded-b-xl pb-2'
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
          <div>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
              <div className="relative ml-14">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-[90px] h-[90px] rounded-full min-w-[90px]"
                />
                <button className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center">
                  <EditIcon />
                </button>
              </div>

              <div className="mt-4 md:mt-0 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profileFields.map((field, index) => (
                    <InputField
                      key={index}
                      label={field.label}
                      type={field.type}
                      placeholder={field.placeholder}
                      defaultValue={field.defaultValue}
                    />
                  ))}
                </div>

                <div className="mt-6 text-end">
                  <button className="bg-black text-white px-6 py-2 rounded-[15px] min-w-[190px]">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
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

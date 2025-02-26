import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  yourName: yup.string().required('Name is required'),
  userName: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[@$!%*?&]/, 'Must contain at least one special character')
    .required('Password is required'),
  dateOfBirth: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date format must be YYYY-MM-DD')
    .test('is-valid-date', 'Date must be in the past', (value) => {
      if (!value) return false
      const selectedDate = new Date(value)
      return selectedDate < new Date()
    })
    .required('Date of birth is required'),
  presentAddress: yup.string().required('Present address is required'),
  permanentAddress: yup.string().required('Permanent address is required'),
  city: yup.string().required('City is required'),
  postalCode: yup
    .string()
    .matches(/^\d{5}$/, 'Postal code must be exactly 5 digits')
    .required('Postal code is required'),
  country: yup.string().required('Country is required')
})

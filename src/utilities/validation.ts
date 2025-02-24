import { object, string, mixed } from 'yup'

const nameRegExp = /^[A-Za-z\s]*$/

export const newsLetter = object().shape({
  name: string()
    .matches(nameRegExp, { message: 'Please enter valid name.' })
    .min(3, 'Name Must be 3 Characters Long.')
    .max(30, 'Name must be maximum 30 characters long.')
    .required('Please enter your name.'),
  email: string()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
})

export const contactForm = object().shape({
  name: string()
    .matches(nameRegExp, { message: 'Please enter valid name.' })
    .min(3, 'Name Must be 3 Characters Long.')
    .max(30, 'Name must be maximum 30 characters long.')
    .required('Please enter your name.'),
  email: string()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  company_name: string().max(40, 'Max 40 Characters are Allowed.'),
  message: string().required('Please enter your message.'),
  phone_number: string().required('Please enter your phone number.'),
})
export const quotationForm = object().shape({
  name: string()
    .matches(nameRegExp, { message: 'Please enter valid name.' })
    .min(3, 'Name Must be 3 Characters Long.')
    .max(30, 'Name must be maximum 30 characters long.')
    .required('Please enter your name.'),
  email: string()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  company_name: string().max(40, 'Max 40 Characters are Allowed.'),
  message: mixed(),
  phone_number: string().required('Please enter your phone number.'),
})

export const careerForm = object().shape({
  name: string()
    .matches(nameRegExp, { message: 'Please enter valid name.' })
    .min(3, 'Name Must be 3 Characters Long.')
    .max(30, 'Name must be maximum 30 characters long.')
    .required('Please enter your name.'),
  email: string()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  message: string().required('Please enter your message.'),
  phone_number: string().required('Please enter your phone number.'),
  experience: string().required('Please enter your experience.'),
})

export const careerFormFooter = object().shape({
  name: string()
    .matches(nameRegExp, { message: 'Please enter valid name.' })
    .min(3, 'Name Must be 3 Characters Long.')
    .max(30, 'Name must be maximum 30 characters long.')
    .required('Please enter your name.'),
  email: string()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  phone_number: string().required('Please enter your phone number.'),
  experience: string().required('Please enter your experience.'),
  technology: string().required('Please select technology.'),
})

export const handleFileValidation = (file: any) => {
  let validationStatus = {
    errorFlag: false,
    errorMessage: '',
  }
  if (file === null) {
    validationStatus = {
      errorFlag: true,
      errorMessage: 'Please upload your resume.',
    }
  }
  const fileSizeKiloBytes = file?.size / 1024
  if (fileSizeKiloBytes > 5120) {
    validationStatus = {
      errorFlag: true,
      errorMessage: 'FIle Is Too Large (Max file Size 5MB)',
    }
  }
  if (file?.type !== 'application/pdf' && file !== null) {
    validationStatus = {
      errorFlag: true,
      errorMessage: 'Please enter only Pdf file.',
    }
  }
  return validationStatus
}

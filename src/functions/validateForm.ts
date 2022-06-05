export type validateFormProps = {
  validate: () => boolean
  error: string
}[]

export default function validateForm(data: validateFormProps) {
  let message = ''
  let isValid = true

  data.forEach((el) => {
    if (isValid) {
      isValid = el.validate()
      message = el.error ? el.error : 'Preencha o campo.'
    }
  })

  return { message, isValid }
}

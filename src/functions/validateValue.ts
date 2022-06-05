type DataProps = {
  validate: () => boolean
  value: string
  error: string
}

export default function validValue(el: DataProps) {
  if (!el.value) {
    return false
  }

  return true
}

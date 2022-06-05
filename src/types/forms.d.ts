export type ButtonType = {
  children: React.ReactNode | string
  type?: 'button' | 'submit' | 'reset'
}

export type InputType = {
  id: string
  onChange: (value: React.FormEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
  type?: 'text' | 'number' | 'email' | 'password' | 'search'
  autoComplete?: 'on' | 'off'
}

export type OptionType = {
  children: string | React.ReactNode
  id: number
  onClick: (id: number) => void
}

export type ImageType = {
  alt: string
  src: string
}

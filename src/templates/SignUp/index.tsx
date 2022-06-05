import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import { IconLockClosed, IconMail, IconUser } from 'components/Icons'
import Input from 'components/Forms/Input'

import * as S from './styles'
import Button from 'components/Forms/Button'
import useForm from 'hooks/useForm'
import AlertSmall from 'components/Alert/Small'
import validateForm from 'functions/validateForm'
import validValue from 'functions/validateValue'

interface SignUpProps {
  className?: string
}

type DataProps = {
  validate: () => boolean
  value: string
  error: string
}

const SignUp = ({ className }: SignUpProps) => {
  const [message, setMessage] = useState('')
  const router = useRouter()
  const nameSignUp = useForm('text')
  const emailSignUp = useForm('email')
  const passwordSignUp = useForm('password')
  const passwordConfirmSignUp = useForm('password')
  const data: DataProps[] = [
    nameSignUp,
    emailSignUp,
    passwordSignUp,
    passwordConfirmSignUp
  ]

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (data.every((e) => validValue(e))) {
      data.push({
        validate: () => {
          return passwordSignUp.value === passwordConfirmSignUp.value
        },
        value: '',
        error: 'As senhas não se coincidem.'
      })

      const { isValid, message } = validateForm(data)

      if (!isValid) {
        setMessage(message)
      } else {
        router.push('/home')
      }
    }
  }

  return (
    <S.Container className={`bg-gray-50 dark:bg-gray-800 rounded ${className}`}>
      <S.Head>
        <h2
          className={`text-4xl font-semibold text-indigo-600 dark:text-indigo-500`}
        >
          Cadastrar
        </h2>
      </S.Head>

      <form action="" onSubmit={handleSubmit}>
        <S.Body>
          <Input
            id="nameSignUp"
            type="text"
            placeholder="Nome"
            icon={<IconUser size={4} />}
            color="indigo"
            outline={true}
            orderReverse={true}
            {...nameSignUp}
          />

          <Input
            id="emailSignUp"
            type="email"
            placeholder="Email"
            icon={<IconMail size={4} />}
            color="indigo"
            outline={true}
            orderReverse={true}
            {...emailSignUp}
          />

          <Input
            id="passwordSignUp"
            type="password"
            placeholder="Senha"
            icon={<IconLockClosed size={4} />}
            color="indigo"
            outline={true}
            orderReverse={true}
            {...passwordSignUp}
          />

          <Input
            id="passwordConfirmSignUp"
            type="password"
            placeholder="Confirme senha"
            icon={<IconLockClosed size={4} />}
            color="indigo"
            outline={true}
            orderReverse={true}
            {...passwordConfirmSignUp}
          />
        </S.Body>

        <S.Footer>
          {message && (
            <AlertSmall
              type="warn"
              setMessage={() => setMessage('')}
              className="mb-7"
            >
              {message}
            </AlertSmall>
          )}

          <Button
            size="custom"
            color="indigo"
            type="submit"
            className="px-12 py-3 text-2xl font-semibold"
            isDisabled={!data.every((e) => validValue(e))}
          >
            Cadastrar
          </Button>

          <p className={`dark:text-gray-50 mt-5 text-center`}>
            Já tem uma conta?{' '}
            <Link href="/login/signIn">
              <a
                className={`font-medium text-indigo-600 hover:text-indigo-500`}
              >
                Entre aqui
              </a>
            </Link>
          </p>
        </S.Footer>
      </form>
    </S.Container>
  )
}

export default SignUp

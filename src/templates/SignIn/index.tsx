import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import { IconLockClosed, IconMail } from 'components/Icons'
import Input from 'components/Forms/Input'

import * as S from './styles'
import Button from 'components/Forms/Button'
import AlertSmall from 'components/Alert/Small'
import useForm from 'hooks/useForm'
import validateForm from 'functions/validateForm'
import validValue from 'functions/validateValue'

interface SignInProps {
  className?: string
}

const SignIn = ({ className }: SignInProps) => {
  const [message, setMessage] = useState('')
  const emailSignIn = useForm('email')
  const passwordSignIn = useForm('password')
  const router = useRouter()
  const data = [emailSignIn, passwordSignIn]

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (data.every((e) => validValue(e))) {
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
        <h2 className={`text-4xl font-semibold text-purple-500`}>Entrar</h2>
      </S.Head>

      <form action="" onSubmit={handleSubmit}>
        <S.Body>
          <Input
            id="emailSignIn"
            type="email"
            placeholder="Email"
            icon={<IconMail size={4} />}
            color="purple"
            outline={true}
            orderReverse={true}
            {...emailSignIn}
          />

          <Input
            id="passwordSingIn"
            type="password"
            placeholder="Senha"
            icon={<IconLockClosed size={4} />}
            color="purple"
            outline={true}
            orderReverse={true}
            {...passwordSignIn}
          />
        </S.Body>

        <S.Footer className="px-10">
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
            color="purple"
            type="submit"
            className="px-12 py-3 text-2xl font-semibold"
            isDisabled={!data.every((e) => validValue(e))}
          >
            Entrar
          </Button>

          <p className={`dark:text-gray-50 mt-5 text-center`}>
            Não tem uma conta?{' '}
            <Link href="/login/signUp">
              <a
                className={`font-medium text-purple-600 hover:text-purple-500`}
              >
                Registre-se
              </a>
            </Link>
          </p>
        </S.Footer>
      </form>
    </S.Container>
  )
}

export default SignIn

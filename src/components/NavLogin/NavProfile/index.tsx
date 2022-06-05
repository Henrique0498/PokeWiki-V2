import { IconChevronDown } from 'components/Icons'
import { useMedia } from 'hooks/useMedia'
import Button from 'components/Forms/Button'
import ImageCustom from 'components/Forms/ImageCustom'
import useAuth from 'hooks/useAuth'

import * as S from './styles'

interface NavProfileProps {
  onClick: () => void
}

const NavProfile = ({ onClick }: NavProfileProps) => {
  const { match } = useMedia('(min-width: 1024px)')
  const { user } = useAuth()

  return (
    <S.Container
      className={`h-11 relative flex items-center cursor-pointer rounded
        bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200
      `}
      onClick={onClick}
    >
      <div
        className={`w-11 h-11 border-animation
          flex justify-center items-center rounded
        `}
      >
        <ImageCustom
          alt={`foto do usuário ${user?.name}`}
          src={user?.imageProfile ?? ''}
          layout="fill"
          className={`w-10 h-10 rounded overflow-hidden bg-gray-50 dark:bg-gray-900`}
          objectFit="cover"
        />
      </div>

      <div className={`font-medium flex items-center ${match ? 'pl-2' : ''}`}>
        <h6 className={`max-w-full overflow-hidden`}>
          {match && user?.name.split(' ')[0]}
        </h6>

        <Button
          size="custom"
          color="transparent"
          className={`flex justify-center items-center
            p-2 rounded-r ${match ? 'ml-1' : ''}
          `}
        >
          <IconChevronDown size={5} />
        </Button>
      </div>
    </S.Container>
  )
}

export default NavProfile

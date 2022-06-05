import Link from 'next/link'

import ImageCustom from 'components/Forms/ImageCustom'
import {
  IconBerryNotFound,
  IconPokemonNotFound,
  IconPunch,
  IconQuestionCircle
} from 'components/Icons'
import { TdType } from 'types/table'
import { ImageType } from 'types/forms'

import * as S from './styles'

interface TdProps {
  page: string
  body: TdType[][]
}

type DivProps = {
  link: string
  className: string
  children: React.ReactNode
}

const Td = (data: TdProps) => {
  function getColor() {
    switch (data.page) {
      case 'berry':
        return 'green'
      case 'item':
        return 'purple'
      case 'move':
        return 'red'
      default:
        return 'blue'
    }
  }

  function getIcon() {
    switch (data.page) {
      case 'pokemon':
        return <IconPokemonNotFound className="text-gray-200" />
      case 'berry':
        return <IconBerryNotFound className="text-gray-50" />
      case 'item':
        return <IconQuestionCircle className="text-gray-200" />
      case 'move':
        return <IconPunch className="text-gray-200" />
      default:
        return <IconQuestionCircle className="text-gray-200" />
    }
  }

  function renderTds(td: TdType, i: number) {
    const { link = '', image, value, className = 'py-4 px-6', effect } = td

    return (
      <S.Td
        key={`tableBodyTd${data.page + i}`}
        className={`capitalize`}
        color={getColor()}
      >
        {renderLinkOrDiv({
          link,
          className,
          children: renderEffect(renderChildren(image, value), effect)
        })}
      </S.Td>
    )
  }

  function renderEffect(value: React.ReactNode, effect?: string) {
    return effect ? (
      <div className={effect}>
        <div className="flex-shrink-0">{value}</div>
      </div>
    ) : (
      value
    )
  }

  function renderChildren(image?: ImageType, value?: React.ReactNode) {
    return image ? (
      image.src ? (
        <ImageCustom
          width={data.page === 'pokemon' ? 48 : 32}
          height={data.page === 'pokemon' ? 48 : 32}
          src={image.src}
          alt={image.alt}
          className="flex justify-center items-center"
        />
      ) : (
        getIcon
      )
    ) : (
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {value}
      </div>
    )
  }

  function renderLinkOrDiv(fData: DivProps) {
    return fData.link ? (
      <Link href={fData.link}>
        <a>
          <div className={`h-full flex items-center ${fData.className}`}>
            {fData.children}
          </div>
        </a>
      </Link>
    ) : (
      <div className={fData.className}>{fData.children}</div>
    )
  }

  return (
    <>
      {data.body.map((tr, i) => (
        <tr
          key={`tableBodyTr${data.page + i}`}
          className={`hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          {tr.map((td, i) => renderTds(td, i))}
        </tr>
      ))}
    </>
  )
}

export default Td

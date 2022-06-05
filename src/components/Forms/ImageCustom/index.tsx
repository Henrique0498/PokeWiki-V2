import { useState } from 'react'
import Image from 'next/image'

import Pokebola from 'components/Pokebola'
import { ImageType } from 'types/forms'

import * as S from './styles'

export interface ImageProps extends ImageType {
  width?: number
  height?: number
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
  className?: string
  title?: string
  unoptimized?: boolean
  objectFit?:
    | 'cover'
    | 'contain'
    | 'fill'
    | 'inherit'
    | 'none'
    | 'revert'
    | 'scale-down'
    | 'unset'
}

const ImageCustom = ({ className, src, alt, ...image }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true)

  const color = {
    dark: {
      top: 'rgba(239, 68, 68)',
      middle: 'rgb(255, 255, 255)',
      button: 'rgba(156, 163, 175)'
    },
    light: {
      top: 'rgba(239, 68, 68)',
      middle: 'rgb(255, 255, 255)',
      button: 'rgba(156, 163, 175)'
    }
  }

  function handleLoad() {
    setSkeleton(false)
  }

  function getSize(width?: number, height?: number) {
    let size = '100%'

    if (height && width) {
      if (height > width) {
        size = width * 0.4 + 'px'
      } else {
        size = height * 0.4 + 'px'
      }
    }

    return size
  }

  return (
    <S.Container className={`relative ${className ?? 'w-full h-full'}`}>
      {skeleton && (
        <div className={`skeleton absolute w-full h-full`}>
          <Pokebola size={getSize(image.width, image.height)} color={color} />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        onLoadingComplete={handleLoad}
        className={`image`}
        {...image}
      />
    </S.Container>
  )
}

export default ImageCustom

import { Story, Meta } from '@storybook/react'

import Image, { ImageProps } from '.'

export default {
  title: 'Forms/Image',
  component: Image,
  argTypes: {
    width: {
      name: 'Width',
      type: { name: 'number' },
      description: 'Set width from image.',
      defaultValue: 60,
      table: {
        type: {
          summary: 'Number'
        },
        defaultValue: { summary: '60' }
      }
    },
    height: {
      name: 'Height',
      type: { name: 'number' },
      description: 'Set height from image.',
      defaultValue: 60,
      table: {
        type: {
          summary: 'Number'
        },
        defaultValue: { summary: '60' }
      }
    },
    layout: {
      name: 'Layout',
      control: { type: 'inline-radio' },
      description:
        'The layout behavior of the image as the viewport changes size.',
      defaultValue: '',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'N/A' }
      }
    },
    className: {
      name: 'Style',
      description: 'Style the image with Tailwind class.',
      defaultValue: '',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'N/A' }
      }
    },
    title: {
      name: 'Title',
      description: 'Specifies extra information about an element.',
      defaultValue: 'Website logo',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Website logo' }
      }
    },
    unoptimized: {
      name: 'Unoptimized',
      control: { type: 'boolean' },
      description:
        'When true, the source image will be served as-is instead of changing quality, size, or format.',
      defaultValue: true,
      table: {
        type: {
          summary: 'Boolean'
        },
        defaultValue: { summary: 'False' }
      }
    },
    alt: {
      name: 'Alternate',
      type: { name: 'string', required: true },
      description: 'Describes what is being displayed in the image.',
      defaultValue: 'Website logo',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Website logo' }
      }
    },
    src: {
      name: 'Source',
      type: { name: 'string', required: true },
      description: 'Set source from image.',
      defaultValue: 'img/icon-512.png',
      table: {
        disable: true,
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'img/icon-512.png' }
      }
    }
  },
  parameters: {
    componentSubtitle: 'Image default the site.'
  }
} as unknown as Meta

export const Default: Story<ImageProps> = (args) => (
  <Image {...args} unoptimized />
)

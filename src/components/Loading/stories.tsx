import { Story, Meta } from '@storybook/react'

import Loading, { LoadingProps } from '.'

export default {
  title: 'Loading',
  component: Loading,
  argTypes: {
    text: {
      name: 'Text',
      type: { name: 'string' },
      description: 'Text entered in component.',
      defaultValue: 'Loading...',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Loading...' }
      }
    },
    themeProps: {
      name: 'Text',
      control: { name: 'select', type: 'select' },
      description: 'Sets the component theme.',
      defaultValue: 'dark',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Dark' }
      }
    }
  },
  parameters: {
    componentSubtitle: 'Loading default the site.'
  }
} as unknown as Meta

export const Default: Story<LoadingProps> = (args) => <Loading {...args} />

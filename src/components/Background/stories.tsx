import { Story, Meta } from '@storybook/react'

import Background, { BackgroundProps } from '.'

export default {
  title: 'Background',
  component: Background,
  argTypes: {
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
    componentSubtitle: 'Background default the site.'
  }
} as unknown as Meta

export const Default: Story<BackgroundProps> = (args) => (
  <div className={`w-full h-96 relative`}>
    <Background {...args} />
  </div>
)

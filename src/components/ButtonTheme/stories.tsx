import { Story, Meta } from '@storybook/react'

import ButtonTheme from '.'

export default {
  title: 'ButtonTheme',
  component: ButtonTheme,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Default website theme button.'
  }
} as unknown as Meta

export const Default: Story = () => <ButtonTheme />

export const Small: Story = () => <ButtonTheme size="small" />

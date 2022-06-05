import { Story, Meta } from '@storybook/react'

import Navbar from '.'

export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {},
  parameters: {
    componentSubtitle: 'Default website theme button.'
  }
} as unknown as Meta

export const Default: Story = () => (
  <div className="static w-full" style={{ height: '600px' }}>
    <Navbar />
  </div>
)

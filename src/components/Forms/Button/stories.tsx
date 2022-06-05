import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'Value',
      type: { name: 'string', required: true },
      description: 'Insert text in button.',
      defaultValue: 'Button',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Button' }
      }
    },
    className: {
      name: 'Style',
      description: 'Style the button with Tailwind class.',
      defaultValue: '',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'N/A' }
      }
    },
    color: {
      name: 'Color',
      control: { name: 'select', required: true, type: 'select' },
      defaultValue: 'blue',
      description: 'Set color in the button.',
      table: {
        type: {
          summary: 'Array colors:',
          detail: 'blue, red, black, white...'
        },
        defaultValue: { summary: 'blue' }
      }
    },
    type: {
      name: 'Type',
      control: { type: 'inline-radio' },
      defaultValue: 'button',
      description: 'Type of button.',
      table: {
        type: {
          summary: 'button, submit or reset'
        },
        defaultValue: { summary: 'button' }
      }
    },
    size: {
      name: 'Size',
      control: { type: 'inline-radio' },
      defaultValue: 'sm',
      description:
        'Set size in the button. The Custom property does not define a size.',
      table: {
        type: {
          summary: 'sm, md, lg or custom'
        },
        defaultValue: { summary: 'sm' }
      }
    },
    textTransform: {
      name: 'Text Transform',
      control: { type: 'inline-radio' },
      defaultValue: 'capitalize',
      description: 'Controls the capitalization of text.',
      table: {
        type: {
          summary: 'capitalize, uppercase or lowercase'
        },
        defaultValue: { summary: 'capitalize' }
      }
    },
    outline: {
      name: 'Outline',
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Controls if button is outline or not.',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    isDisabled: {
      name: 'Is disabled',
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Controls if button is disabled or not.',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    onClick: {
      name: 'OnClick',
      action: 'clicked',
      description: 'Function of OnClick',
      table: {
        defaultValue: { summary: 'N/A' }
      }
    }
  },
  parameters: {
    componentSubtitle: 'Button default the site.'
  }
} as unknown as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

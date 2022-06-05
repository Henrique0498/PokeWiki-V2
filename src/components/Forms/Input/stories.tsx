import { Story, Meta } from '@storybook/react'
import { IconSearch } from 'components/Icons'
import useForm from 'hooks/useForm'
import { useState } from 'react'

import { InputType } from 'types/forms'
import Input from '.'

export default {
  title: 'Forms/Input/Default',
  component: Input,
  argTypes: {
    className: {
      name: 'Style',
      description: 'Style the input with Tailwind class.',
      defaultValue: '',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'N/A' }
      }
    },
    id: {
      name: 'ID',
      type: { name: 'string', required: true },
      description: 'Element identifier.',
      defaultValue: 'DefaultInput',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'DefaultInput' }
      }
    },
    onChange: {
      name: 'On change',
      type: { required: true },
      description:
        'Reactive function that changes the input value as you type.',
      table: {
        type: {
          summary: 'Function'
        },
        defaultValue: { summary: '(value: string) => void' }
      }
    },
    value: {
      name: 'Value',
      type: { name: 'string', required: true },
      description: 'Text entered in Input.',
      defaultValue: '',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'N/A' }
      }
    },
    placeholder: {
      name: 'Placeholder',
      description:
        'The placeholder attribute specifies a short hint that describes the expected value of an input field.',
      defaultValue: 'Placeholder...',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Placeholder...' }
      }
    },
    type: {
      name: 'Type',
      control: { name: 'select', type: 'select' },
      description: 'Defines the Input value type.',
      defaultValue: 'text',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Text' }
      }
    },
    autoComplete: {
      name: 'Auto complete',
      control: { type: 'inline-radio' },
      description:
        'The autocomplete attribute specifies whether or not an input field should have autocomplete enabled.',
      defaultValue: 'off',
      table: {
        type: {
          summary: 'String'
        },
        defaultValue: { summary: 'Off' }
      }
    },
    icon: {
      defaultValue: <IconSearch />,
      table: {
        disable: true,
        type: {
          summary: 'JSX'
        },
        defaultValue: { summary: <IconSearch /> }
      }
    }
  },
  parameters: {
    componentSubtitle: 'Input default the site.'
  }
} as unknown as Meta

export const Default: Story<InputType> = (args) => {
  const inputStory = useForm('text')

  return <Input {...inputStory} {...args} />
}

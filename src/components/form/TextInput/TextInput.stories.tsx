import { Meta, Story } from '@storybook/react/types-6-0';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'form/TextInput',
  component: TextInput,
} as Meta;

export const Default: Story<TextInputProps> = (args) => <TextInput {...args} />;

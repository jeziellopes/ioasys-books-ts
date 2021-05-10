import { Meta, Story } from '@storybook/react/types-6-0';
import { FormError, FormErrorProps } from './FormError';

export default {
  title: 'structure/FormError',
  component: FormError,
} as Meta;

export const Default: Story<FormErrorProps> = (args) => <FormError {...args} />;

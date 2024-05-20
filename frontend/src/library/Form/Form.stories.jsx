import { fn } from '@storybook/test';
import { Form } from './Form';

export default {
	title: 'Library/Form',
	component: Form,
	tags: ['autodocs']
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (value) => alert(`Form submitted with value: ${value}`),
};
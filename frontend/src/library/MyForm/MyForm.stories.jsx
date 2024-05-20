import { fn } from '@storybook/test';
import { MyForm } from './MyForm';

export default {
	title: 'Library/MyForm',
	component: MyForm,
	tags: ['autodocs']
};

const Template = (args) => <MyForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (value) => alert(`Form submitted with value: ${value}`),
}
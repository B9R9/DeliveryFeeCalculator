import { fn } from '@storybook/test';
import { Input } from './Input';

export default {
	title: 'Library/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: '',
	setValue: (value) => alert(`Input changed with value: ${value}`),
  };
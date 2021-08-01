// todo: import SpButton from '@StarportUI/SpButton';
import SpButton from '../../../vue/src/components/SpButton';

export default {
  title: 'Example/SpButton',
  component: SpButton,
  argTypes: {
    type: { type: 'select', options: ['primary', 'secondary', 'progress', 'loading'] },
  },
	onClick: {},
};

const Template = (args) => ({
  components: { SpButton },
  setup() {
    return { args };
  },
  template: '<SpButton v-bind="args">SpButton</SpButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Progress = Template.bind({});
Progress.args = {
  type: 'progress',
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'loading',
};

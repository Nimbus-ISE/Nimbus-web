import Form from "@/components/Form/Form";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Location = Template.bind({});
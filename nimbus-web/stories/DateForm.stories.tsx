import DateForm from "@/components/Forms/DateForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "DateForm",
    component: DateForm,
} as ComponentMeta<typeof DateForm>;

const Template: ComponentStory<typeof DateForm> = (args) => (
    <DateForm {...args} />
);

export const Date = Template.bind({});

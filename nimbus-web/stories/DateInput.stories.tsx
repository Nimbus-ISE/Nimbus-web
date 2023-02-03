import DateInput from "@/components/Forms/DateInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "DateInput",
    component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
    <DateInput {...args} />
);

export const Date = Template.bind({});

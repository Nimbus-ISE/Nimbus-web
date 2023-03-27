import DateInput from "@/components/FormsElements/DateInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "DateInput",
    component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => <DateInput />;

export const Date = Template.bind({});

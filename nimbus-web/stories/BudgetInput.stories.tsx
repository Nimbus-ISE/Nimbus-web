import BudgetInput from "@/components/FormsElements/BudgetInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "BudgetInput",
    component: BudgetInput,
} as ComponentMeta<typeof BudgetInput>;

const Template: ComponentStory<typeof BudgetInput> = (args) => (
    <BudgetInput {...args} />
);

export const Budget = Template.bind({});

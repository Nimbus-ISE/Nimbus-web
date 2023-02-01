import Plan from "@/components/Plan";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Plan",
    component: Plan,
} as ComponentMeta<typeof Plan>;

const Template: ComponentStory<typeof Plan> = (args) => <Plan />;

export const Primary = Template.bind({});

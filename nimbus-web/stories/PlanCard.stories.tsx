import PlanCard from "@/components/PlanCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "PlanCard",
    component: PlanCard,
} as ComponentMeta<typeof PlanCard>;

const Template: ComponentStory<typeof PlanCard> = (args) => (
    <PlanCard {...args} />
);

export const savedPlans = Template.bind({});

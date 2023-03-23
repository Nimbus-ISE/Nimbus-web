import Star from "@/components/Star";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Star",
    component: Star,
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const Primary = Template.bind({});

Primary.args = { size: 96, percent: "50%" };
